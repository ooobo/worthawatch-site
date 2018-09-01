/*
 * These were all ranked as good games in 2017-2018 by reddit & blogs
 *
 * https://fansided.com/2018/04/09/5-best-games-2017-18-nba-season/2/
 * https://www.reddit.com/r/nba/comments/7y0g5s/top_10_best_gamesfinishes_of_the_20172018_nba/
 */

let games = {}

/*
 * Timberwolves over Thunder, Oct. 22
 * A game winning 3 to win by 2, right after a 3 by the other team to go up 1
 *
 * https://www.worthawatch.today/?date=20171022
 */

games.MINOKC_20171022 = {'event_id': '20171022-minnesota-timberwolves-at-oklahoma-city-thunder', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-10-22T19:00:00-04:00', 'season_type': 'regular', 'away_team': {'team_id': 'minnesota-timberwolves', 'abbreviation': 'MIN', 'active': true, 'first_name': 'Minnesota', 'last_name': 'Timberwolves', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Target Center', 'city': 'Minneapolis', 'state': 'Minnesota', 'full_name': 'Minnesota Timberwolves'}, 'home_team': {'team_id': 'oklahoma-city-thunder', 'abbreviation': 'OKC', 'active': true, 'first_name': 'Oklahoma City', 'last_name': 'Thunder', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma', 'full_name': 'Oklahoma City Thunder'}, 'site': {'capacity': 19599, 'surface': 'Hardwood', 'name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma'}, 'away_period_scores': [28, 33, 27, 27], 'home_period_scores': [23, 31, 21, 38], 'away_points_scored': 115, 'home_points_scored': 113}

/*
 * Thunder over 76ers, Dec. 15
 * 3OT, won by 2, huge triple double for russ
 *
 * https://www.worthawatch.today/?date=20171215
 */

games.OKCPHI_20171215 = {'event_id': '20171215-oklahoma-city-thunder-at-philadelphia-76ers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-15T19:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'oklahoma-city-thunder', 'abbreviation': 'OKC', 'active': true, 'first_name': 'Oklahoma City', 'last_name': 'Thunder', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma', 'full_name': 'Oklahoma City Thunder'}, 'home_team': {'team_id': 'philadelphia-76ers', 'abbreviation': 'PHI', 'active': true, 'first_name': 'Philadelphia', 'last_name': '76ers', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania', 'full_name': 'Philadelphia 76ers'}, 'site': {'capacity': 20318, 'surface': 'Hardwood', 'name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania'}, 'away_period_scores': [28, 27, 26, 13, 8, 9, 8], 'home_period_scores': [23, 24, 30, 17, 8, 9, 6], 'away_points_scored': 119, 'home_points_scored': 117}

/*
 * Lakers over 76ers, Dec. 7
 * Won by 3. Simmons triple double. Lots of young players / rookies.
 *
 * https://www.worthawatch.today/?date=20171207
 */

games.LALPHI_20171207 = {'event_id': '20171207-los-angeles-lakers-at-philadelphia-76ers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-07T20:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'los-angeles-lakers', 'abbreviation': 'LAL', 'active': true, 'first_name': 'Los Angeles', 'last_name': 'Lakers', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California', 'full_name': 'Los Angeles Lakers'}, 'home_team': {'team_id': 'philadelphia-76ers', 'abbreviation': 'PHI', 'active': true, 'first_name': 'Philadelphia', 'last_name': '76ers', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania', 'full_name': 'Philadelphia 76ers'}, 'site': {'capacity': 20318, 'surface': 'Hardwood', 'name': 'Wells Fargo Center', 'city': 'Philadelphia', 'state': 'Pennsylvania'}, 'away_period_scores': [32, 25, 22, 28], 'home_period_scores': [25, 24, 21, 34], 'away_points_scored': 107, 'home_points_scored': 104}

/*
 * Celtics over Rockets, Dec. 28
 * Celtics down by 26, won by 1. 2 of the best teams in the league.
 *
 * https://www.worthawatch.today/?date=20171228
 */

games.BOSHOU_20171228 = {'event_id': '20171228-houston-rockets-at-boston-celtics', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-28T20:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'houston-rockets', 'abbreviation': 'HOU', 'active': true, 'first_name': 'Houston', 'last_name': 'Rockets', 'conference': 'West', 'division': 'Southwest', 'site_name': 'Toyota Center', 'city': 'Houston', 'state': 'Texas', 'full_name': 'Houston Rockets'}, 'home_team': {'team_id': 'boston-celtics', 'abbreviation': 'BOS', 'active': true, 'first_name': 'Boston', 'last_name': 'Celtics', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'TD Garden', 'city': 'Boston', 'state': 'Massachusetts', 'full_name': 'Boston Celtics'}, 'site': {'capacity': 18624, 'surface': 'Hardwood', 'name': 'TD Garden', 'city': 'Boston', 'state': 'Massachusetts'}, 'away_period_scores': [32, 30, 16, 20], 'home_period_scores': [12, 26, 31, 30], 'away_points_scored': 98, 'home_points_scored': 99}

/*
 * Rockets over Warriors, Jan. 20
 * Rockets win by 8. Top 2 teams in the league. By all accounts a very good game,
 * but hard to rate just with stats?
 *
 * https://www.worthawatch.today/?date=20180120
 */

games.GSWHOU_20180120 = {'event_id': '20180120-golden-state-warriors-at-houston-rockets', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-01-20T20:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'home_team': {'team_id': 'houston-rockets', 'abbreviation': 'HOU', 'active': true, 'first_name': 'Houston', 'last_name': 'Rockets', 'conference': 'West', 'division': 'Southwest', 'site_name': 'Toyota Center', 'city': 'Houston', 'state': 'Texas', 'full_name': 'Houston Rockets'}, 'site': {'capacity': 18300, 'surface': 'Hardwood', 'name': 'Toyota Center', 'city': 'Houston', 'state': 'Texas'}, 'away_period_scores': [28, 30, 33, 17], 'home_period_scores': [40, 25, 27, 24], 'away_points_scored': 108, 'home_points_scored': 116}

/*
 * Bos vs GSW
 * GSW win by 4
 * Point guard duel: curry 49, kyrie 37
 * Curry scores 13 in final 1:42
 *
 * https://www.worthawatch.today/?date=20180127
 */

games.GSWBOS_20180127 = {'event_id': '20180127-boston-celtics-at-golden-state-warriors', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-01-27T20:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'boston-celtics', 'abbreviation': 'BOS', 'active': true, 'first_name': 'Boston', 'last_name': 'Celtics', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'TD Garden', 'city': 'Boston', 'state': 'Massachusetts', 'full_name': 'Boston Celtics'}, 'home_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'site': {'capacity': 19596, 'surface': 'Hardwood', 'name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California'}, 'away_period_scores': [37, 17, 19, 32], 'home_period_scores': [27, 23, 30, 29], 'away_points_scored': 105, 'home_points_scored': 109, 'away_stats': [{'last_name': 'Irving', 'first_name': 'Kyrie', 'display_name': 'Kyrie Irving', 'position': 'PG', 'minutes': 36, 'points': 37, 'assists': 4, 'turnovers': 3, 'steals': 1, 'blocks': 0, 'rebounds': 2, 'field_goals_attempted': 18, 'field_goals_made': 13, 'three_point_field_goals_attempted': 6, 'three_point_field_goals_made': 5, 'free_throws_attempted': 8, 'free_throws_made': 6, 'defensive_rebounds': 2, 'offensive_rebounds': 0, 'personal_fouls': 3, 'team_abbreviation': 'BOS', 'is_starter': true, 'field_goal_percentage': 0.722, 'three_point_percentage': 0.833, 'free_throw_percentage': 0.75, 'field_goal_percentage_string': '72.2', 'three_point_field_goal_percentage_string': '83.3', 'free_throw_percentage_string': '75.0'}, {'last_name': 'Brown', 'first_name': 'Jaylen', 'display_name': 'Jaylen Brown', 'position': 'SG', 'minutes': 35, 'points': 20, 'assists': 0, 'turnovers': 2, 'steals': 0, 'blocks': 0, 'rebounds': 2, 'field_goals_attempted': 9, 'field_goals_made': 6, 'three_point_field_goals_attempted': 4, 'three_point_field_goals_made': 3, 'free_throws_attempted': 6, 'free_throws_made': 5, 'defensive_rebounds': 2, 'offensive_rebounds': 0, 'personal_fouls': 3, 'team_abbreviation': 'BOS', 'is_starter': true, 'field_goal_percentage': 0.667, 'three_point_percentage': 0.75, 'free_throw_percentage': 0.833, 'field_goal_percentage_string': '66.7', 'three_point_field_goal_percentage_string': '75.0', 'free_throw_percentage_string': '83.3'}, {'last_name': 'Horford', 'first_name': 'Al', 'display_name': 'Al Horford', 'position': 'PF', 'minutes': 34, 'points': 15, 'assists': 3, 'turnovers': 3, 'steals': 1, 'blocks': 2, 'rebounds': 13, 'field_goals_attempted': 15, 'field_goals_made': 6, 'three_point_field_goals_attempted': 3, 'three_point_field_goals_made': 2, 'free_throws_attempted': 2, 'free_throws_made': 1, 'defensive_rebounds': 10, 'offensive_rebounds': 3, 'personal_fouls': 2, 'team_abbreviation': 'BOS', 'is_starter': true, 'field_goal_percentage': 0.4, 'three_point_percentage': 0.667, 'free_throw_percentage': 0.5, 'field_goal_percentage_string': '40.0', 'three_point_field_goal_percentage_string': '66.7', 'free_throw_percentage_string': '50.0'}, {'last_name': 'Tatum', 'first_name': 'Jayson', 'display_name': 'Jayson Tatum', 'position': 'SF', 'minutes': 28, 'points': 4, 'assists': 0, 'turnovers': 1, 'steals': 1, 'blocks': 0, 'rebounds': 5, 'field_goals_attempted': 9, 'field_goals_made': 2, 'three_point_field_goals_attempted': 3, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 5, 'offensive_rebounds': 0, 'personal_fouls': 1, 'team_abbreviation': 'BOS', 'is_starter': true, 'field_goal_percentage': 0.222, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '22.2', 'three_point_field_goal_percentage_string': '0.0', 'free_throw_percentage_string': '&mdash;'}, {'last_name': 'Baynes', 'first_name': 'Aron', 'display_name': 'Aron Baynes', 'position': 'C', 'minutes': 16, 'points': 1, 'assists': 0, 'turnovers': 1, 'steals': 0, 'blocks': 0, 'rebounds': 7, 'field_goals_attempted': 1, 'field_goals_made': 0, 'three_point_field_goals_attempted': 0, 'three_point_field_goals_made': 0, 'free_throws_attempted': 2, 'free_throws_made': 1, 'defensive_rebounds': 6, 'offensive_rebounds': 1, 'personal_fouls': 2, 'team_abbreviation': 'BOS', 'is_starter': true, 'field_goal_percentage': 0.0, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.5, 'field_goal_percentage_string': '0.0', 'three_point_field_goal_percentage_string': '&mdash;', 'free_throw_percentage_string': '50.0'}, {'last_name': 'Morris', 'first_name': 'Marcus', 'display_name': 'Marcus Morris', 'position': 'PF', 'minutes': 33, 'points': 12, 'assists': 2, 'turnovers': 1, 'steals': 1, 'blocks': 0, 'rebounds': 8, 'field_goals_attempted': 15, 'field_goals_made': 5, 'three_point_field_goals_attempted': 5, 'three_point_field_goals_made': 1, 'free_throws_attempted': 1, 'free_throws_made': 1, 'defensive_rebounds': 5, 'offensive_rebounds': 3, 'personal_fouls': 4, 'team_abbreviation': 'BOS', 'is_starter': false, 'field_goal_percentage': 0.333, 'three_point_percentage': 0.2, 'free_throw_percentage': 1.0, 'field_goal_percentage_string': '33.3', 'three_point_field_goal_percentage_string': '20.0', 'free_throw_percentage_string': '100.0'}, {'last_name': 'Rozier', 'first_name': 'Terry', 'display_name': 'Terry Rozier', 'position': 'PG', 'minutes': 24, 'points': 9, 'assists': 3, 'turnovers': 1, 'steals': 1, 'blocks': 0, 'rebounds': 5, 'field_goals_attempted': 6, 'field_goals_made': 2, 'three_point_field_goals_attempted': 3, 'three_point_field_goals_made': 2, 'free_throws_attempted': 4, 'free_throws_made': 3, 'defensive_rebounds': 2, 'offensive_rebounds': 3, 'personal_fouls': 4, 'team_abbreviation': 'BOS', 'is_starter': false, 'field_goal_percentage': 0.333, 'three_point_percentage': 0.667, 'free_throw_percentage': 0.75, 'field_goal_percentage_string': '33.3', 'three_point_field_goal_percentage_string': '66.7', 'free_throw_percentage_string': '75.0'}, {'last_name': 'Larkin', 'first_name': 'DeShane', 'display_name': 'Shane Larkin', 'position': 'PG', 'minutes': 16, 'points': 4, 'assists': 2, 'turnovers': 1, 'steals': 1, 'blocks': 0, 'rebounds': 1, 'field_goals_attempted': 8, 'field_goals_made': 2, 'three_point_field_goals_attempted': 2, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 1, 'offensive_rebounds': 0, 'personal_fouls': 1, 'team_abbreviation': 'BOS', 'is_starter': false, 'field_goal_percentage': 0.25, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '25.0', 'three_point_field_goal_percentage_string': '0.0', 'free_throw_percentage_string': '&mdash;'}, {'last_name': 'Theis', 'first_name': 'Daniel', 'display_name': 'Daniel Theis', 'position': 'PF', 'minutes': 12, 'points': 3, 'assists': 3, 'turnovers': 1, 'steals': 0, 'blocks': 0, 'rebounds': 2, 'field_goals_attempted': 1, 'field_goals_made': 1, 'three_point_field_goals_attempted': 1, 'three_point_field_goals_made': 1, 'free_throws_attempted': 1, 'free_throws_made': 0, 'defensive_rebounds': 1, 'offensive_rebounds': 1, 'personal_fouls': 3, 'team_abbreviation': 'BOS', 'is_starter': false, 'field_goal_percentage': 1.0, 'three_point_percentage': 1.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '100.0', 'three_point_field_goal_percentage_string': '100.0', 'free_throw_percentage_string': '0.0'}, {'last_name': 'Ojeleye', 'first_name': 'Jesusemilore', 'display_name': 'Semi Ojeleye', 'position': 'PF', 'minutes': 6, 'points': 0, 'assists': 0, 'turnovers': 0, 'steals': 0, 'blocks': 0, 'rebounds': 0, 'field_goals_attempted': 3, 'field_goals_made': 0, 'three_point_field_goals_attempted': 1, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 0, 'offensive_rebounds': 0, 'personal_fouls': 0, 'team_abbreviation': 'BOS', 'is_starter': false, 'field_goal_percentage': 0.0, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '0.0', 'three_point_field_goal_percentage_string': '0.0', 'free_throw_percentage_string': '&mdash;'}], 'home_stats': [{'last_name': 'Green', 'first_name': 'Draymond', 'display_name': 'Draymond Green', 'position': 'PF', 'minutes': 38, 'points': 15, 'assists': 5, 'turnovers': 4, 'steals': 1, 'blocks': 3, 'rebounds': 11, 'field_goals_attempted': 11, 'field_goals_made': 4, 'three_point_field_goals_attempted': 4, 'three_point_field_goals_made': 1, 'free_throws_attempted': 6, 'free_throws_made': 6, 'defensive_rebounds': 6, 'offensive_rebounds': 5, 'personal_fouls': 4, 'team_abbreviation': 'GS', 'is_starter': true, 'field_goal_percentage': 0.364, 'three_point_percentage': 0.25, 'free_throw_percentage': 1.0, 'field_goal_percentage_string': '36.4', 'three_point_field_goal_percentage_string': '25.0', 'free_throw_percentage_string': '100.0'}, {'last_name': 'Curry', 'first_name': 'Wardell', 'display_name': 'Stephen Curry', 'position': 'PG', 'minutes': 37, 'points': 49, 'assists': 5, 'turnovers': 1, 'steals': 2, 'blocks': 0, 'rebounds': 4, 'field_goals_attempted': 24, 'field_goals_made': 16, 'three_point_field_goals_attempted': 13, 'three_point_field_goals_made': 8, 'free_throws_attempted': 10, 'free_throws_made': 9, 'defensive_rebounds': 4, 'offensive_rebounds': 0, 'personal_fouls': 2, 'team_abbreviation': 'GS', 'is_starter': true, 'field_goal_percentage': 0.667, 'three_point_percentage': 0.615, 'free_throw_percentage': 0.9, 'field_goal_percentage_string': '66.7', 'three_point_field_goal_percentage_string': '61.5', 'free_throw_percentage_string': '90.0'}, {'last_name': 'Thompson', 'first_name': 'Klay', 'display_name': 'Klay Thompson', 'position': 'SG', 'minutes': 36, 'points': 7, 'assists': 3, 'turnovers': 1, 'steals': 1, 'blocks': 2, 'rebounds': 4, 'field_goals_attempted': 12, 'field_goals_made': 3, 'three_point_field_goals_attempted': 4, 'three_point_field_goals_made': 0, 'free_throws_attempted': 1, 'free_throws_made': 1, 'defensive_rebounds': 4, 'offensive_rebounds': 0, 'personal_fouls': 1, 'team_abbreviation': 'GS', 'is_starter': true, 'field_goal_percentage': 0.25, 'three_point_percentage': 0.0, 'free_throw_percentage': 1.0, 'field_goal_percentage_string': '25.0', 'three_point_field_goal_percentage_string': '0.0', 'free_throw_percentage_string': '100.0'}, {'last_name': 'Durant', 'first_name': 'Kevin', 'display_name': 'Kevin Durant', 'position': 'SF', 'minutes': 36, 'points': 20, 'assists': 2, 'turnovers': 2, 'steals': 1, 'blocks': 1, 'rebounds': 9, 'field_goals_attempted': 18, 'field_goals_made': 7, 'three_point_field_goals_attempted': 5, 'three_point_field_goals_made': 1, 'free_throws_attempted': 7, 'free_throws_made': 5, 'defensive_rebounds': 8, 'offensive_rebounds': 1, 'personal_fouls': 3, 'team_abbreviation': 'GS', 'is_starter': true, 'field_goal_percentage': 0.389, 'three_point_percentage': 0.2, 'free_throw_percentage': 0.714, 'field_goal_percentage_string': '38.9', 'three_point_field_goal_percentage_string': '20.0', 'free_throw_percentage_string': '71.4'}, {'last_name': 'Pachulia', 'first_name': 'Zaza', 'display_name': 'Zaza Pachulia', 'position': 'C', 'minutes': 15, 'points': 2, 'assists': 2, 'turnovers': 1, 'steals': 0, 'blocks': 0, 'rebounds': 4, 'field_goals_attempted': 1, 'field_goals_made': 1, 'three_point_field_goals_attempted': 0, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 3, 'offensive_rebounds': 1, 'personal_fouls': 0, 'team_abbreviation': 'GS', 'is_starter': true, 'field_goal_percentage': 1.0, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '100.0', 'three_point_field_goal_percentage_string': '&mdash;', 'free_throw_percentage_string': '&mdash;'}, {'last_name': 'Iguodala', 'first_name': 'Andre', 'display_name': 'Andre Iguodala', 'position': 'SF', 'minutes': 28, 'points': 4, 'assists': 1, 'turnovers': 1, 'steals': 1, 'blocks': 0, 'rebounds': 3, 'field_goals_attempted': 1, 'field_goals_made': 1, 'three_point_field_goals_attempted': 0, 'three_point_field_goals_made': 0, 'free_throws_attempted': 2, 'free_throws_made': 2, 'defensive_rebounds': 3, 'offensive_rebounds': 0, 'personal_fouls': 3, 'team_abbreviation': 'GS', 'is_starter': false, 'field_goal_percentage': 1.0, 'three_point_percentage': 0.0, 'free_throw_percentage': 1.0, 'field_goal_percentage_string': '100.0', 'three_point_field_goal_percentage_string': '&mdash;', 'free_throw_percentage_string': '100.0'}, {'last_name': 'West', 'first_name': 'David', 'display_name': 'David West', 'position': 'PF', 'minutes': 16, 'points': 6, 'assists': 0, 'turnovers': 0, 'steals': 1, 'blocks': 2, 'rebounds': 3, 'field_goals_attempted': 6, 'field_goals_made': 3, 'three_point_field_goals_attempted': 0, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 3, 'offensive_rebounds': 0, 'personal_fouls': 1, 'team_abbreviation': 'GS', 'is_starter': false, 'field_goal_percentage': 0.5, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '50.0', 'three_point_field_goal_percentage_string': '&mdash;', 'free_throw_percentage_string': '&mdash;'}, {'last_name': 'Livingston', 'first_name': 'Shaun', 'display_name': 'Shaun Livingston', 'position': 'PG', 'minutes': 14, 'points': 4, 'assists': 0, 'turnovers': 1, 'steals': 0, 'blocks': 1, 'rebounds': 1, 'field_goals_attempted': 4, 'field_goals_made': 2, 'three_point_field_goals_attempted': 0, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 0, 'offensive_rebounds': 1, 'personal_fouls': 2, 'team_abbreviation': 'GS', 'is_starter': false, 'field_goal_percentage': 0.5, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '50.0', 'three_point_field_goal_percentage_string': '&mdash;', 'free_throw_percentage_string': '&mdash;'}, {'last_name': 'Looney', 'first_name': 'Kevon', 'display_name': 'Kevon Looney', 'position': 'SF', 'minutes': 9, 'points': 2, 'assists': 1, 'turnovers': 0, 'steals': 0, 'blocks': 0, 'rebounds': 4, 'field_goals_attempted': 3, 'field_goals_made': 1, 'three_point_field_goals_attempted': 0, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 2, 'offensive_rebounds': 2, 'personal_fouls': 0, 'team_abbreviation': 'GS', 'is_starter': false, 'field_goal_percentage': 0.333, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '33.3', 'three_point_field_goal_percentage_string': '&mdash;', 'free_throw_percentage_string': '&mdash;'}, {'last_name': 'Young', 'first_name': 'Nick', 'display_name': 'Nick Young', 'position': 'SG', 'minutes': 7, 'points': 0, 'assists': 0, 'turnovers': 0, 'steals': 1, 'blocks': 0, 'rebounds': 0, 'field_goals_attempted': 3, 'field_goals_made': 0, 'three_point_field_goals_attempted': 1, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 0, 'offensive_rebounds': 0, 'personal_fouls': 0, 'team_abbreviation': 'GS', 'is_starter': false, 'field_goal_percentage': 0.0, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '0.0', 'three_point_field_goal_percentage_string': '0.0', 'free_throw_percentage_string': '&mdash;'}, {'last_name': 'Casspi', 'first_name': 'Omri', 'display_name': 'Omri Casspi', 'position': 'SF', 'minutes': 4, 'points': 0, 'assists': 0, 'turnovers': 0, 'steals': 1, 'blocks': 0, 'rebounds': 0, 'field_goals_attempted': 1, 'field_goals_made': 0, 'three_point_field_goals_attempted': 0, 'three_point_field_goals_made': 0, 'free_throws_attempted': 0, 'free_throws_made': 0, 'defensive_rebounds': 0, 'offensive_rebounds': 0, 'personal_fouls': 1, 'team_abbreviation': 'GS', 'is_starter': false, 'field_goal_percentage': 0.0, 'three_point_percentage': 0.0, 'free_throw_percentage': 0.0, 'field_goal_percentage_string': '0.0', 'three_point_field_goal_percentage_string': '&mdash;', 'free_throw_percentage_string': '&mdash;'}]}

/*
 * Nuggets Thunder
 * Gary harris game winning 3
 *
 * https://www.worthawatch.today/?date=20180201
 */

games.OKCDEN_20180201 = {'event_id': '20180201-oklahoma-city-thunder-at-denver-nuggets', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-02-01T22:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'oklahoma-city-thunder', 'abbreviation': 'OKC', 'active': true, 'first_name': 'Oklahoma City', 'last_name': 'Thunder', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Chesapeake Energy Arena', 'city': 'Oklahoma City', 'state': 'Oklahoma', 'full_name': 'Oklahoma City Thunder'}, 'home_team': {'team_id': 'denver-nuggets', 'abbreviation': 'DEN', 'active': true, 'first_name': 'Denver', 'last_name': 'Nuggets', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Pepsi Center', 'city': 'Denver', 'state': 'Colorado', 'full_name': 'Denver Nuggets'}, 'site': {'capacity': 19099, 'surface': 'Hardwood', 'name': 'Pepsi Center', 'city': 'Denver', 'state': 'Colorado'}, 'away_period_scores': [33, 24, 32, 35], 'home_period_scores': [40, 32, 32, 23], 'away_points_scored': 124, 'home_points_scored': 127}

/* Cavs Timberwolves
 * Cavs win by 2 in OT
 * Lebron block & buzzer beater
 *
 * https://www.worthawatch.today/?date=20180207
 */

games.CLEMIN_20180207 = {'event_id': '20180207-minnesota-timberwolves-at-cleveland-cavaliers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-02-07T20:00:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'minnesota-timberwolves', 'abbreviation': 'MIN', 'active': true, 'first_name': 'Minnesota', 'last_name': 'Timberwolves', 'conference': 'West', 'division': 'Northwest', 'site_name': 'Target Center', 'city': 'Minneapolis', 'state': 'Minnesota', 'full_name': 'Minnesota Timberwolves'}, 'home_team': {'team_id': 'cleveland-cavaliers', 'abbreviation': 'CLE', 'active': true, 'first_name': 'Cleveland', 'last_name': 'Cavaliers', 'conference': 'East', 'division': 'Central', 'site_name': 'Quicken Loans Arena', 'city': 'Cleveland', 'state': 'Ohio', 'full_name': 'Cleveland Cavaliers'}, 'site': {'capacity': 20562, 'surface': 'Hardwood', 'name': 'Quicken Loans Arena', 'city': 'Cleveland', 'state': 'Ohio'}, 'away_period_scores': [29, 37, 33, 30, 9], 'home_period_scores': [31, 33, 37, 28, 11], 'away_points_scored': 138, 'home_points_scored': 140}

/* Raptors Bucks
 * Raptors win by 4 in OT
 * Derozan has 52
 *
 * https://www.worthawatch.today/?date=20180101
 */

games.TORMIL_20180101 = {'event_id': '20180101-milwaukee-bucks-at-toronto-raptors', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2018-01-01T19:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'milwaukee-bucks', 'abbreviation': 'MIL', 'active': true, 'first_name': 'Milwaukee', 'last_name': 'Bucks', 'conference': 'East', 'division': 'Central', 'site_name': 'BMO Harris Bradley Center', 'city': 'Milwaukee', 'state': 'Wisconsin', 'full_name': 'Milwaukee Bucks'}, 'home_team': {'team_id': 'toronto-raptors', 'abbreviation': 'TOR', 'active': true, 'first_name': 'Toronto', 'last_name': 'Raptors', 'conference': 'East', 'division': 'Atlantic', 'site_name': 'Air Canada Centre', 'city': 'Toronto', 'state': 'Ontario', 'full_name': 'Toronto Raptors'}, 'site': {'capacity': 19800, 'surface': 'Hardwood', 'name': 'Air Canada Centre', 'city': 'Toronto', 'state': 'Ontario'}, 'away_period_scores': [30, 26, 28, 30, 13], 'home_period_scores': [35, 25, 28, 26, 17], 'away_points_scored': 127, 'home_points_scored': 131}

/* Cavs Wizards
 * Cavs win by 8 but Lebron has 57
 *
 * https://www.worthawatch.today/?date=20171103
 */

games.CLEWAS_20171103 = {'event_id': '20171103-cleveland-cavaliers-at-washington-wizards', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-11-03T19:00:00-04:00', 'season_type': 'regular', 'away_team': {'team_id': 'cleveland-cavaliers', 'abbreviation': 'CLE', 'active': true, 'first_name': 'Cleveland', 'last_name': 'Cavaliers', 'conference': 'East', 'division': 'Central', 'site_name': 'Quicken Loans Arena', 'city': 'Cleveland', 'state': 'Ohio', 'full_name': 'Cleveland Cavaliers'}, 'home_team': {'team_id': 'washington-wizards', 'abbreviation': 'WAS', 'active': true, 'first_name': 'Washington', 'last_name': 'Wizards', 'conference': 'East', 'division': 'Southeast', 'site_name': 'Verizon Center', 'city': 'Washington', 'state': 'District of Columbia', 'full_name': 'Washington Wizards'}, 'site': {'capacity': 20173, 'surface': 'Hardwood', 'name': 'Verizon Center', 'city': 'Washington', 'state': 'District of Columbia'}, 'away_period_scores': [42, 32, 30, 26], 'home_period_scores': [36, 30, 27, 29], 'away_points_scored': 130, 'home_points_scored': 122}

/* Lakers Warriors
 * 2 point OT win for GSW. Buzzer beater and game saving block
 *
 * https://www.worthawatch.today/?date=20171218
 */

games.LALGSW_20171218 = {'event_id': '20171218-golden-state-warriors-at-los-angeles-lakers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-12-18T22:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'home_team': {'team_id': 'los-angeles-lakers', 'abbreviation': 'LAL', 'active': true, 'first_name': 'Los Angeles', 'last_name': 'Lakers', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California', 'full_name': 'Los Angeles Lakers'}, 'site': {'capacity': 18997, 'surface': 'Hardwood', 'name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California'}, 'away_period_scores': [32, 25, 26, 19, 14], 'home_period_scores': [24, 29, 29, 20, 12], 'away_points_scored': 116, 'home_points_scored': 114}

/* Lakers Warriors
 * 4 point OT win for GSW.
 * Steph scores 13 in OT
 *
 * https://www.worthawatch.today/?date=20171129
 */

games.LALGSW_20171129 = {'event_id': '20171129-golden-state-warriors-at-los-angeles-lakers', 'event_status': 'completed', 'sport': 'NBA', 'start_date_time': '2017-11-29T22:30:00-05:00', 'season_type': 'regular', 'away_team': {'team_id': 'golden-state-warriors', 'abbreviation': 'GS', 'active': true, 'first_name': 'Golden State', 'last_name': 'Warriors', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Oracle Arena', 'city': 'Oakland', 'state': 'California', 'full_name': 'Golden State Warriors'}, 'home_team': {'team_id': 'los-angeles-lakers', 'abbreviation': 'LAL', 'active': true, 'first_name': 'Los Angeles', 'last_name': 'Lakers', 'conference': 'West', 'division': 'Pacific', 'site_name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California', 'full_name': 'Los Angeles Lakers'}, 'site': {'capacity': 18997, 'surface': 'Hardwood', 'name': 'Staples Center', 'city': 'Los Angeles', 'state': 'California'}, 'away_period_scores': [30, 20, 34, 25, 18], 'home_period_scores': [20, 34, 30, 25, 14], 'away_points_scored': 127, 'home_points_scored': 123}

module.exports = games