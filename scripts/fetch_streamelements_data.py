import os
import json
import requests
from datetime import datetime, timezone
from dateutil import parser

# Configuration
CHANNEL_NAME = os.environ.get('TWITCH_CHANNEL_NAME', 'marlon')
MARATHON_START = "2025-10-27T00:00:00Z"

# Data file paths
DATA_DIR = 'data'
STATS_FILE = f'{DATA_DIR}/stats.json'
DAILY_FILE = f'{DATA_DIR}/daily.json'

def get_streamelements_channel_id(channel_name):
    """Get StreamElements channel ID from Twitch username"""
    try:
        twitch_url = f'https://decapi.me/twitch/id/{channel_name}'
        response = requests.get(twitch_url, timeout=10)
        if response.status_code == 200:
            return response.text.strip()
        return None
    except Exception as e:
        print(f"Error getting channel ID: {e}")
        return None

def get_streamelements_stats(channel_id):
    """Get statistics from StreamElements public API"""
    try:
        url = f'https://api.streamelements.com/kappa/v2/channels/{channel_id}/stats'
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"StreamElements API returned status: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error fetching StreamElements stats: {e}")
        return None

def get_streamelements_top_data(channel_id, data_type='subscriber'):
    """Get top contributors from StreamElements"""
    try:
        url = f'https://api.streamelements.com/kappa/v2/channels/{channel_id}/top/{data_type}'
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            data = response.json()
            return data.get('users', [])[:10]
        else:
            print(f"Top {data_type} API returned status: {response.status_code}")
            return []
    except Exception as e:
        print(f"Error fetching top {data_type}: {e}")
        return []

def get_twitch_follower_count(channel_name):
    """Get follower count from public API"""
    try:
        url = f'https://decapi.me/twitch/followcount/{channel_name}'
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            count = response.text.strip()
            return int(count) if count.isdigit() else 0
        return 0
    except Exception as e:
        print(f"Error getting follower count: {e}")
        return 0

def get_twitch_live_status(channel_name):
    """Check if channel is live"""
    try:
        url = f'https://decapi.me/twitch/uptime/{channel_name}'
        response = requests.get(url, timeout=10)
        text = response.text.strip().lower()
        return 'offline' not in text
    except Exception as e:
        print(f"Error checking live status: {e}")
        return False

def calculate_marathon_day():
    """Calculate which day of the marathon we're on"""
    start = parser.parse(MARATHON_START)
    now = datetime.now(timezone.utc)
    delta = now - start
    return max(1, min(28, delta.days + 1))

def load_existing_data(filepath):
    """Load existing data file"""
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            return json.load(f)
    return None

def save_data(filepath, data):
    """Save data to file"""
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(filepath, 'w') as f:
        json.dump(data, indent=2, fp=f)

def format_leaderboard(users, amount_key='amount'):
    """Format user list into leaderboard format"""
    leaderboard = []
    for user in users:
        username = user.get('name') or user.get('username') or 'Unknown'
        amount = user.get(amount_key, 0)
        if isinstance(amount, (int, float)) and amount > 0:
            leaderboard.append({
                'username': username,
                'amount': int(amount)
            })
    return sorted(leaderboard, key=lambda x: x['amount'], reverse=True)

def main():
    print("=" * 60)
    print("FETCHING STREAMELEMENTS DATA")
    print("=" * 60)
    
    print(f"\n[1/7] Getting channel ID for: {CHANNEL_NAME}")
    channel_id = get_streamelements_channel_id(CHANNEL_NAME)
    
    if not channel_id:
        print(f"✗ Could not find channel: {CHANNEL_NAME}")
        return
    
    print(f"✓ Channel ID: {channel_id}")
    
    print(f"\n[2/7] Checking Twitch status...")
    follower_count = get_twitch_follower_count(CHANNEL_NAME)
    is_live = get_twitch_live_status(CHANNEL_NAME)
    current_day = calculate_marathon_day()
    
    print(f"✓ Followers: {follower_count:,}")
    print(f"✓ Stream: {'🔴 LIVE' if is_live else '⚫ OFFLINE'}")
    print(f"✓ Marathon Day: {current_day}/28")
    
    print(f"\n[3/7] Fetching StreamElements stats...")
    se_stats = get_streamelements_stats(channel_id)
    
    if se_stats:
        print(f"✓ Retrieved StreamElements statistics")
    else:
        print(f"⚠ Could not fetch StreamElements stats")
        se_stats = {}
    
    print(f"\n[4/7] Fetching top subscribers...")
    top_subs = get_streamelements_top_data(channel_id, 'subscriber')
    print(f"✓ Found {len(top_subs)} top subscribers")
    
    print(f"\n[5/7] Fetching top cheers (bits)...")
    top_cheers = get_streamelements_top_data(channel_id, 'cheer')
    print(f"✓ Found {len(top_cheers)} top cheerers")
    
    print(f"\n[6/7] Processing data...")
    existing_stats = load_existing_data(STATS_FILE)
    
    if existing_stats and 'marathonStartFollowers' in existing_stats:
        marathon_followers = follower_count - existing_stats['marathonStartFollowers']
        marathon_start_followers = existing_stats['marathonStartFollowers']
    else:
        marathon_followers = 0
        marathon_start_followers = follower_count
    
    sub_leaderboard = format_leaderboard(top_subs, 'amount')
    bits_leaderboard = format_leaderboard(top_cheers, 'amount')
    chatters_leaderboard = existing_stats.get('topChatters', []) if existing_stats else []
    
    total_subs = se_stats.get('subscribers', {}).get('count', 0)
    total_bits = se_stats.get('cheers', {}).get('amount', 0)
    
    stats = {
        'lastUpdated': datetime.now(timezone.utc).isoformat(),
        'marathonStart': MARATHON_START,
        'marathonEnd': "2025-11-24T00:00:00Z",
        'currentDay': current_day,
        'isLive': is_live,
        'stats': {
            'totalFollowers': follower_count,
            'marathonFollowers': marathon_followers,
            'marathonStartFollowers': marathon_start_followers,
            'totalSubs': total_subs,
            'marathonSubs': existing_stats.get('stats', {}).get('marathonSubs', 0) if existing_stats else 0,
            'totalBits': total_bits
        },
        'topSubGifters': sub_leaderboard,
        'topBitDonors': bits_leaderboard,
        'topChatters': chatters_leaderboard
    }
    
    print(f"\n[7/7] Saving data...")
    save_data(STATS_FILE, stats)
    print(f"✓ Saved stats to {STATS_FILE}")
    
    daily_data = load_existing_data(DAILY_FILE) or {}
    day_key = f"day{current_day}"
    
    if day_key not in daily_data:
        daily_data[day_key] = {
            'date': datetime.now(timezone.utc).strftime('%Y-%m-%d'),
            'subGifters': [],
            'bitDonors': [],
            'chatters': []
        }
    
    save_data(DAILY_FILE, daily_data)
    print(f"✓ Saved daily data to {DAILY_FILE}")
    
    print("\n" + "=" * 60)
    print("✅ DATA FETCH COMPLETE!")
    print("=" * 60)
    print(f"\n  • Total Followers: {follower_count:,}")
    print(f"  • Marathon Followers: {marathon_followers:,}")
    print(f"  • Total Subs: {total_subs:,}")
    print(f"  • Total Bits: {total_bits:,}")
    print(f"  • Top Sub Gifters: {len(sub_leaderboard)}")
    print(f"  • Top Bit Donors: {len(bits_leaderboard)}")
    print(f"  • Stream: {'🔴 LIVE' if is_live else '⚫ OFFLINE'}")
    print(f"  • Marathon Day: {current_day}/28\n")

if __name__ == '__main__':
    main()
