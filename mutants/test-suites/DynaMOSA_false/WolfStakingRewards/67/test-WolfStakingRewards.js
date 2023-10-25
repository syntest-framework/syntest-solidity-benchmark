const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringfppMBGP = "RjOlY25bkusuMkZAG4bePRP"
		const stringpYuHzPs = "DeqQat12Pb8Fze3faSC7oBbtJEIcsXYxf2KJAfX4NbqSyvUaSb7wM8HTnWGrv0CljIRgb4NZXnEgb"
		const uintMr9SCmF = BigInt("244")
		const WolfStakingRewardsv7usrEd = await WolfStakingRewards.new(stringfppMBGP, stringpYuHzPs, uintMr9SCmF, {from: accounts[4]});
		const uintZ5qoTtt = BigInt("1017")
		const uintzqmhHk = BigInt("835")
		const addressdoDcAkC = accounts[2]
		const uintXhZftXp = BigInt("1960")
		const uint25638NDlG = await WolfStakingRewardsv7usrEd.totalSupplyPerPool.call(uintZ5qoTtt, {from: accounts[0]});
		const uint256jYjmvaN = await WolfStakingRewardsv7usrEd.balanceOfPerPool.call(addressdoDcAkC, uintzqmhHk, {from: accounts[4]});
		const uint8FuhnpxI = await WolfStakingRewardsv7usrEd.decimals.call({from: accounts[3]});
		const uint256uOFeBXq = await WolfStakingRewardsv7usrEd.lastTimeRewardApplicable.call(uintXhZftXp, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressZTPYAcH = accounts[5]
		const addressYYjVrBt = accounts[2]
		const addresszpJVm2 = accounts[5]
		const WolfStakingRewardsmkMvaSk = await WolfStakingRewards.new(addressZTPYAcH, addressYYjVrBt, addresszpJVm2, {from: accounts[3]});
		const uintQ3NyQLD = BigInt("552")
		const uint256QBDmaQR = await WolfStakingRewardsmkMvaSk.lastTimeRewardApplicable.call(uintQ3NyQLD, {from: accounts[1]});
//		await WolfStakingRewardsmkMvaSk.onlyOwner.call({from: accounts[1]});
//		await WolfStakingRewardsmkMvaSk.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringxQkODzY = await WolfStakingRewardsmkMvaSk.symbol.call({from: accounts[1]});
//		const uint8YlvpLm3 = await WolfStakingRewardsmkMvaSk.decimals.call({from: accounts[2]});

		assert.equal(uint256QBDmaQR, BigInt("0"))
		await expect(WolfStakingRewardsmkMvaSk.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringZbpUsvp = "POMx0FDBJUGrTTDIrdsmNcrJhb2drqVfVRFJ4BYS16YU5CuH58XuRQg3D"
		const stringL9IX5W6 = "FtJWsvlsKw3velWBlEUCmBhdE7d7nR"
		const uintau4TASC = BigInt("5")
		const WolfStakingRewardsOdTdq9V = await WolfStakingRewards.new(stringZbpUsvp, stringL9IX5W6, uintau4TASC, {from: accounts[2]});
		const uintr2T8DXM = BigInt("1369")
		const uintwwXcbca = BigInt("1554")
		const uintjJV6XqD = BigInt("1154")
		const uintpuwLVU = BigInt("670")
		await WolfStakingRewardsOdTdq9V.nonReentrant.call({from: accounts[2]});
		const uint256LicgdxJ = await WolfStakingRewardsOdTdq9V.lastTimeRewardApplicable.call(uintr2T8DXM, {from: accounts[3]});
		const uint256lFwrc2 = await WolfStakingRewardsOdTdq9V.exit.call(uintwwXcbca, {from: accounts[0]});
		const uint256N3qNuqs = await WolfStakingRewardsOdTdq9V.getRewardForDuration.call(uintjJV6XqD, {from: accounts[1]});
		const uint256ssOt4SP = await WolfStakingRewardsOdTdq9V.rewardPerToken.call(uintpuwLVU, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressukEv2mS = accounts[4]
		const addressaYRlyTw = accounts[0]
		const addressShfvfjl = accounts[5]
		const WolfStakingRewardsksnmS47 = await WolfStakingRewards.new(addressukEv2mS, addressaYRlyTw, addressShfvfjl, {from: "0x0000000000000000000000000000000000000001"});
		const uintc9cDLx = BigInt("534")
		const uintlEQMFma = BigInt("923")
		const uintnRcmBT = BigInt("360")
		const addressU9QNf2d = "0x0000000000000000000000000000000000000001"
		await WolfStakingRewardsksnmS47.nonReentrant.call({from: accounts[3]});
		const uint256EAseaQy = await WolfStakingRewardsksnmS47.getRewardForDuration.call(uintc9cDLx, {from: accounts[4]});
		const uint256CTD05tc = await WolfStakingRewardsksnmS47.totalSupplyPerPool.call(uintlEQMFma, {from: accounts[4]});
		const addressAPzCLAB = await WolfStakingRewardsksnmS47.updateReward.call(addressU9QNf2d, uintnRcmBT, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressOTWcreu = accounts[4]
		const addressnCWdsw = accounts[3]
		const addressbLfv4CZ = accounts[0]
		const WolfStakingRewardsbx9hKja = await WolfStakingRewards.new(addressOTWcreu, addressnCWdsw, addressbLfv4CZ, {from: accounts[2]});
		const uintnXLQirq = BigInt("1967")
		const uintBWx14wr = BigInt("120")
		const uinteVwTz8h = BigInt("1519")
		const uintW1RQvE7 = BigInt("1210")
		const uintjmeIumN = BigInt("1208")
		const uintP7bDI1M = BigInt("656")
//		const uint256lK50g2c = await WolfStakingRewardsbx9hKja.stake.call(uintBWx14wr, uintnXLQirq, {from: accounts[5]});
//		const uint256UpXNvnX = await WolfStakingRewardsbx9hKja.totalSupplyPerPool.call(uinteVwTz8h, {from: accounts[5]});
//		const stringaVEWPgk = await WolfStakingRewardsbx9hKja.name.call({from: accounts[5]});
//		const uint256Q4uCB5n = await WolfStakingRewardsbx9hKja.getRewardForDuration.call(uintW1RQvE7, {from: accounts[1]});
//		const uint256A4avN1K = await WolfStakingRewardsbx9hKja.stake.call(uintP7bDI1M, uintjmeIumN, {from: accounts[2]});

		await expect(WolfStakingRewardsbx9hKja.stake.call(uintBWx14wr, uintnXLQirq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressDNcnRrP = accounts[1]
		const addressVT43TQ = accounts[1]
		const addressB75I08F = accounts[4]
		const WolfStakingRewardszNNYff6 = await WolfStakingRewards.new(addressDNcnRrP, addressVT43TQ, addressB75I08F, {from: accounts[4]});
		const uintlGXDxSp = BigInt("1004")
		const uintW7kLBY = BigInt("539")
		const uintJLA7jJ1 = BigInt("276")
		const uint256n2RTvs0 = await WolfStakingRewardszNNYff6.rewardPerToken.call(uintlGXDxSp, {from: accounts[3]});
//		const uint256UdHO8Fe = await WolfStakingRewardszNNYff6.withdraw.call(uintJLA7jJ1, uintW7kLBY, {from: accounts[4]});

		assert.equal(uint256n2RTvs0, BigInt("0"))
		await expect(WolfStakingRewardszNNYff6.withdraw.call(uintJLA7jJ1, uintW7kLBY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringviH73Di = "oSrEvRtXpycrBIxdtasP38kgun"
		const stringHip2AgJ = "Q8i9I38XtrcYPwEvLyseoTDNrjZEfeIlJpuaHffn2VHphHCjWUEj8lFpHtyFnYctA1l7yE"
		const uintZbvhg44 = BigInt("72")
		const WolfStakingRewardsEXGCQa = await WolfStakingRewards.new(stringviH73Di, stringHip2AgJ, uintZbvhg44, {from: accounts[3]});
		const uintIdalhN9 = BigInt("1283")
		const uintgwrWIT0 = BigInt("700")
		const addressaYafqz = accounts[2]
		const uint2flBTD = BigInt("1394")
		const uint256arrayxoPK001 = await WolfStakingRewardsEXGCQa.updateNotifyRewardAmount.call(uintIdalhN9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uUrXI3K = await WolfStakingRewardsEXGCQa.balanceOfPerPool.call(addressaYafqz, uintgwrWIT0, {from: accounts[0]});
		await WolfStakingRewardsEXGCQa.onlyOwner.call({from: accounts[2]});
		const uint256arrayeAn7RTT = await WolfStakingRewardsEXGCQa.updateNotifyRewardAmount.call(uint2flBTD, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuPq3di = "hWTbVsLyrvKwD2p4WqL3lUEF7If5yFSEdKNNMNy2lxdMHLoYCxf8RiHUljenbRS99tt508dDpTfUwTu"
		const stringbseCrL3 = "uvPwDlOOlYd9IQbtEJBuJQbdacfi7AvnZWJO"
		const uintb8dnrTX = BigInt("230")
		const WolfStakingRewardss52xBCQ = await WolfStakingRewards.new(stringuPq3di, stringbseCrL3, uintb8dnrTX, {from: accounts[5]});
		const uintrMoDoPw = BigInt("589")
		const addressWX4jdYk = accounts[4]
		const uintV5cnKsm = BigInt("1748")
		const uintjUeee9j = BigInt("1415")
		const uintaC5m2sr = BigInt("1310")
		await WolfStakingRewardss52xBCQ.nonReentrant.call({from: accounts[2]});
		const uint256OWP9Wr = await WolfStakingRewardss52xBCQ.balanceOfPerPool.call(addressWX4jdYk, uintrMoDoPw, {from: accounts[1]});
		const uint256gXp16Bc = await WolfStakingRewardss52xBCQ.lastTimeRewardApplicable.call(uintV5cnKsm, {from: accounts[4]});
		const uint256TB8u4H = await WolfStakingRewardss52xBCQ.withdrawRemainingBalance.call(uintaC5m2sr, uintjUeee9j, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZXiAe7W = "HWttEGgO4fLPPILfDoT5sim9fPEjz3VxyYxQ"
		const stringGHWwowF = "IU4k9OEkFh7hp1mJDd"
		const uintcbpkT7H = BigInt("55")
		const WolfStakingRewardsHkWWLVv = await WolfStakingRewards.new(stringZXiAe7W, stringGHWwowF, uintcbpkT7H, {from: accounts[0]});
		const uintFqkOL1Y = BigInt("1827")
		const uintHQFOjfK = BigInt("1580")
		const uintvxXqpQB = BigInt("748")
		const uintpm6DP5K = BigInt("699")
		const uinte97HPSC = BigInt("1215")
		const uintrwImJxt = BigInt("1900")
		const uintX5vNOk0 = BigInt("407")
		const uint256hvZLimq = await WolfStakingRewardsHkWWLVv.exit.call(uintFqkOL1Y, {from: accounts[3]});
		const uint256o7rd5QC = await WolfStakingRewardsHkWWLVv.withdrawRemainingBalance.call(uintvxXqpQB, uintHQFOjfK, {from: accounts[4]});
		const uint256fHHtuZ6 = await WolfStakingRewardsHkWWLVv.totalSupplyPerPool.call(uintpm6DP5K, {from: accounts[2]});
		const uint256VHReDDN = await WolfStakingRewardsHkWWLVv.totalSupplyPerPool.call(uinte97HPSC, {from: accounts[4]});
		const uint256xbtaQQi = await WolfStakingRewardsHkWWLVv.withdrawRemainingBalance.call(uintX5vNOk0, uintrwImJxt, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb23GSx = "9cMvXUnT8GP977OD"
		const stringsdhmE9L = "0AzzEqU3PTLzmvfOjxP"
		const uintS7lfrYU = BigInt("112")
		const WolfStakingRewardsPvcKb7i = await WolfStakingRewards.new(stringb23GSx, stringsdhmE9L, uintS7lfrYU, {from: accounts[4]});
		const uintOYO4C5s = BigInt("398")
		const uintC7oD04 = await WolfStakingRewardsPvcKb7i.getReward.call(uintOYO4C5s, {from: accounts[0]});
		const stringNKgaVM = await WolfStakingRewardsPvcKb7i.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeJLbSw = "zXN7UkqufUrnDN3kJSqHtDi8BJHcgxhfQKAE1oZCV2uwNfQZYLWtku27r9K9N612DTuK4"
		const stringUhau709 = "R6Tf94iUYxdMjSsXR6G7Gnr2XfHnbEe5GJvrLE"
		const uintC06fxg2 = BigInt("88")
		const WolfStakingRewardsJO1KJGH = await WolfStakingRewards.new(stringeJLbSw, stringUhau709, uintC06fxg2, {from: accounts[1]});
		const uintSGBdR4x = BigInt("384")
		const uintfmpfKN1 = BigInt("437")
		const uintBcipk39 = BigInt("1375")
		const uintSARJvPu = BigInt("710")
		const uint256NBJjiWu = await WolfStakingRewardsJO1KJGH.lastTimeRewardApplicable.call(uintSGBdR4x, {from: accounts[0]});
		const uint8OvZVNxo = await WolfStakingRewardsJO1KJGH.decimals.call({from: accounts[1]});
		const uint256MEAPiQo = await WolfStakingRewardsJO1KJGH.exit.call(uintfmpfKN1, {from: accounts[2]});
		const uint256zmisUEy = await WolfStakingRewardsJO1KJGH.getRewardForDuration.call(uintBcipk39, {from: accounts[1]});
		const uint256vfklMfR = await WolfStakingRewardsJO1KJGH.rewardPerToken.call(uintSARJvPu, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyuXI7Ss = "ebFxshP"
		const stringLdoUryx = "1H8fMIGaJxzrBDiwGwGrZIPfD68lSb6Cg"
		const uinthW9bfj = BigInt("174")
		const WolfStakingRewardscQZUHVQ = await WolfStakingRewards.new(stringyuXI7Ss, stringLdoUryx, uinthW9bfj, {from: accounts[0]});
		const uintB1ulLgR = BigInt("218")
		const uintPdqajZC = BigInt("1852")
		const addressdzW91XC = accounts[2]
		const uinto0hTw4m = await WolfStakingRewardscQZUHVQ.getReward.call(uintB1ulLgR, {from: accounts[0]});
		const addressb377PHC = await WolfStakingRewardscQZUHVQ.updateReward.call(addressdzW91XC, uintPdqajZC, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressFwwZvGE = accounts[2]
		const addressKUBDh96 = accounts[4]
		const addressFSVs194 = accounts[0]
		const WolfStakingRewardsJDKVaB7 = await WolfStakingRewards.new(addressFwwZvGE, addressKUBDh96, addressFSVs194, {from: accounts[1]});
		const uinttq4vZjn = BigInt("834")
		const uintwxHRRq8 = BigInt("624")
		const uintQQgL0nm = await WolfStakingRewardsJDKVaB7.getReward.call(uinttq4vZjn, {from: accounts[1]});
//		const uint256ti1FMD = await WolfStakingRewardsJDKVaB7.exit.call(uintwxHRRq8, {from: accounts[1]});

		await expect(WolfStakingRewardsJDKVaB7.exit.call(uintwxHRRq8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressUNXJReb = accounts[2]
		const addressyOMJAVU = accounts[4]
		const addressuNuBX2U = accounts[0]
		const WolfStakingRewardsJDKVaB7 = await WolfStakingRewards.new(addressUNXJReb, addressyOMJAVU, addressuNuBX2U, {from: accounts[1]});
		const uintB4RRCR = BigInt("834")
		const uintVcpOkSO = BigInt("1886")
		const uintcyn7uTd = BigInt("624")
		const uintQQgL0nm = await WolfStakingRewardsJDKVaB7.getReward.call(uintB4RRCR, {from: accounts[1]});
//		const uint256jfcAatO = await WolfStakingRewardsJDKVaB7.getRewardForDuration.call(uintVcpOkSO, {from: accounts[4]});
//		const uint256ti1FMD = await WolfStakingRewardsJDKVaB7.exit.call(uintcyn7uTd, {from: accounts[1]});

		await expect(WolfStakingRewardsJDKVaB7.getRewardForDuration.call(uintVcpOkSO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringaO7n2ln = "8yT6QzCy3haJGJcVCw1z7Fl27chReRLhYhRJ0ikL"
		const stringD5QbBnn = "gwfE"
		const uintppCin7e = BigInt("251")
		const WolfStakingRewardsGweEDX = await WolfStakingRewards.new(stringaO7n2ln, stringD5QbBnn, uintppCin7e, {from: accounts[0]});
		const uinty2DTV6I = BigInt("762")
		const uintA4dww89 = BigInt("402")
		const uintTBwYxiA = BigInt("259")
		const uintYkMjUDK = BigInt("114")
		const uintXtD2AE = BigInt("1528")
		const uint256qsu3pDE = await WolfStakingRewardsGweEDX.withdraw.call(uintA4dww89, uinty2DTV6I, {from: accounts[1]});
		const uint256L2Ipcwr = await WolfStakingRewardsGweEDX.stake.call(uintYkMjUDK, uintTBwYxiA, {from: accounts[4]});
		const uint256XFZ0Znw = await WolfStakingRewardsGweEDX.lastTimeRewardApplicable.call(uintXtD2AE, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsM1mFrh = "UCJEEb7pfnWsoIM4MZPvQyHyNEvkVskMoaqWINj8Ybg6CxK3uCAfv1ZXlL5kpbWsxfTh01Rn9toNFcw"
		const stringF7FoahW = "ezPCneThuO95BB7NYwV4iyTSL5ghCSqhKxetWNgmFIX7soQ6WzaKWFxEgPnQxLpM7mnEyNBm9U7NzsfLF1U0yb2b"
		const uintpXeBE6S = BigInt("113")
		const WolfStakingRewardsUoCqfSj = await WolfStakingRewards.new(stringsM1mFrh, stringF7FoahW, uintpXeBE6S, {from: accounts[3]});
		const uintEycfkB8 = BigInt("1891")
		const uintpS3SdOx = BigInt("1452")
		const uintI8xNJX = BigInt("1495")
		const uintwh3JaQ = BigInt("269")
		const uint256arrayfguek00 = await WolfStakingRewardsUoCqfSj.updateNotifyRewardAmount.call(uintEycfkB8, {from: accounts[5]});
		await WolfStakingRewardsUoCqfSj.nonReentrant.call({from: accounts[1]});
		const uint256lOJEoMm = await WolfStakingRewardsUoCqfSj.rewardPerToken.call(uintpS3SdOx, {from: accounts[3]});
		const uint256PUIwnu4 = await WolfStakingRewardsUoCqfSj.rewardPerToken.call(uintI8xNJX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Rxu62sG = await WolfStakingRewardsUoCqfSj.lastTimeRewardApplicable.call(uintwh3JaQ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressgZJ1AU8 = accounts[2]
		const addressqkIAL90 = accounts[4]
		const addressRsfBK8C = accounts[0]
		const WolfStakingRewardsJDKVaB7 = await WolfStakingRewards.new(addressgZJ1AU8, addressqkIAL90, addressRsfBK8C, {from: accounts[1]});
		const uintMDRy2iG = BigInt("1204")
		const addressLzeinMa = accounts[4]
		const uintF9xJVIU = BigInt("834")
		const uintsIfNsuW = BigInt("1897")
		const uintNqFKOQV = BigInt("1574")
		const addressRZvJU8n = accounts[4]
		const uintKj4tUPm = BigInt("615")
		const uint256nPuIu20 = await WolfStakingRewardsJDKVaB7.balanceOfPerPool.call(addressLzeinMa, uintMDRy2iG, {from: accounts[5]});
		const uintQQgL0nm = await WolfStakingRewardsJDKVaB7.getReward.call(uintF9xJVIU, {from: accounts[1]});
//		const uint256jfcAatO = await WolfStakingRewardsJDKVaB7.getRewardForDuration.call(uintsIfNsuW, {from: accounts[4]});
//		const addressgqUNSNJ = await WolfStakingRewardsJDKVaB7.updateReward.call(addressRZvJU8n, uintNqFKOQV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ti1FMD = await WolfStakingRewardsJDKVaB7.exit.call(uintKj4tUPm, {from: accounts[1]});

		assert.equal(uint256nPuIu20, BigInt("0"))
		await expect(WolfStakingRewardsJDKVaB7.getRewardForDuration.call(uintsIfNsuW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringsuZXvM9 = "KQ8wJonHM9rOGI3aNLvfzwzlAB6DfZ3LZSHlj6mrJKQds7BzfG"
		const stringCmyRvIW = "Xis6rML8WNrDSRCmSWUdto3V2"
		const uintPCYw16K = BigInt("248")
		const WolfStakingRewardsTvKYtwh = await WolfStakingRewards.new(stringsuZXvM9, stringCmyRvIW, uintPCYw16K, {from: accounts[0]});
		const uintsmotKO3 = BigInt("865")
		const uintutVo0jv = BigInt("1072")
		const uintC8opoGX = BigInt("207")
		const uintU1cS25 = BigInt("125")
		const uint256AEm9ygM = await WolfStakingRewardsTvKYtwh.getRewardForDuration.call(uintsmotKO3, {from: accounts[1]});
		const uint256XnLPwwT = await WolfStakingRewardsTvKYtwh.getRewardForDuration.call(uintutVo0jv, {from: accounts[0]});
		const uint256fcoZfIG = await WolfStakingRewardsTvKYtwh.exit.call(uintC8opoGX, {from: accounts[1]});
		const uint256CczXJU = await WolfStakingRewardsTvKYtwh.rewardPerToken.call(uintU1cS25, {from: accounts[1]});
		await WolfStakingRewardsTvKYtwh.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDR1LfRT = accounts[2]
		const addressLcnx145 = accounts[4]
		const addresszkS5ueL = accounts[0]
		const WolfStakingRewardsJDKVaB7 = await WolfStakingRewards.new(addressDR1LfRT, addressLcnx145, addresszkS5ueL, {from: accounts[1]});
		const uintOcGtoT0 = BigInt("834")
		const uinthUoQaIg = BigInt("91")
		const uintFWv0Hl = BigInt("1781")
		const uintQ77XO0F = BigInt("603")
		const uintQQgL0nm = await WolfStakingRewardsJDKVaB7.getReward.call(uintOcGtoT0, {from: accounts[1]});
//		const uint256c0HSg6 = await WolfStakingRewardsJDKVaB7.withdrawRemainingBalance.call(uintFWv0Hl, uinthUoQaIg, {from: accounts[1]});
//		const uint256ti1FMD = await WolfStakingRewardsJDKVaB7.exit.call(uintQ77XO0F, {from: accounts[1]});

		await expect(WolfStakingRewardsJDKVaB7.withdrawRemainingBalance.call(uintFWv0Hl, uinthUoQaIg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressccpgIn8 = accounts[2]
		const addressXGrLcp6 = accounts[4]
		const addressQDyZBJb = accounts[0]
		const WolfStakingRewardsJDKVaB7 = await WolfStakingRewards.new(addressccpgIn8, addressXGrLcp6, addressQDyZBJb, {from: accounts[1]});
		const uintKjVRkLX = BigInt("1999")
		const uintCxrLZY = BigInt("1553")
		const uint0X4ZPQ = BigInt("1437")
		const uintp1jKa9a = BigInt("499")
		const uintFRemQKH = BigInt("673")
		const uintCl5amHB = BigInt("634")
//		const uint256pIxEMAk = await WolfStakingRewardsJDKVaB7.withdrawRemainingBalance.call(uintCxrLZY, uintKjVRkLX, {from: accounts[5]});
//		const uint256UFejVM = await WolfStakingRewardsJDKVaB7.stake.call(uintp1jKa9a, uint0X4ZPQ, {from: accounts[3]});
//		const uint256FyStosn = await WolfStakingRewardsJDKVaB7.totalSupplyPerPool.call(uintFRemQKH, {from: accounts[1]});
//		const uint256ti1FMD = await WolfStakingRewardsJDKVaB7.exit.call(uintCl5amHB, {from: accounts[1]});

		await expect(WolfStakingRewardsJDKVaB7.withdrawRemainingBalance.call(uintCxrLZY, uintKjVRkLX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringdP48TDU = "BW361x3JbrMZJdDyasW7TFE7ygYk30QkfrwrpdKW8c9OliYhIBOIJrklegISNXG0IWzItR"
		const stringw81vwtK = "Btu2HBg4LLcB2NmxEPxXLBTq4J5W"
		const uintTz2Dpgt = BigInt("254")
		const WolfStakingRewardsaToQ6T = await WolfStakingRewards.new(stringdP48TDU, stringw81vwtK, uintTz2Dpgt, {from: accounts[1]});
		const uintIGTFVJ0 = BigInt("51")
		const uint1VOjQW = BigInt("1059")
		const uintA8gvnxt = BigInt("1393")
		const addressWZMMtZ = accounts[2]
		const uintDE56c9H = BigInt("1587")
		const uintneQvx40 = BigInt("45")
		const uint256wTBzrPi = await WolfStakingRewardsaToQ6T.exit.call(uintIGTFVJ0, {from: accounts[3]});
		const uintRPZ03cz = await WolfStakingRewardsaToQ6T.getReward.call(uint1VOjQW, {from: accounts[4]});
		const uint256ff1GUD = await WolfStakingRewardsaToQ6T.earned.call(addressWZMMtZ, uintA8gvnxt, {from: accounts[5]});
		const uint256KNBT8Aa = await WolfStakingRewardsaToQ6T.stake.call(uintneQvx40, uintDE56c9H, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqarkHtL = "ZXdw8InhnevpLOvlp8dOLcH1adVj7i4"
		const stringBwXUJk = "3ri9DsVFKp70"
		const uintMd800bO = BigInt("42")
		const WolfStakingRewardsCmAIuWd = await WolfStakingRewards.new(stringqarkHtL, stringBwXUJk, uintMd800bO, {from: accounts[3]});
		const uintzeIMQu = BigInt("1513")
		const uintMgjjA3E = BigInt("1704")
		const uintImjs3Gu = BigInt("1295")
		const uintQASAc4f = BigInt("1576")
		const uintifsuDX = BigInt("271")
		const uintrn4eWCX = BigInt("1065")
		const uint256kTifFBt = await WolfStakingRewardsCmAIuWd.rewardPerToken.call(uintzeIMQu, {from: accounts[3]});
		const uint256fzozweN = await WolfStakingRewardsCmAIuWd.lastTimeRewardApplicable.call(uintMgjjA3E, {from: accounts[4]});
		const uint256rOlPhfE = await WolfStakingRewardsCmAIuWd.totalSupplyPerPool.call(uintImjs3Gu, {from: accounts[2]});
		const uint256jboujgf = await WolfStakingRewardsCmAIuWd.lastTimeRewardApplicable.call(uintQASAc4f, {from: accounts[4]});
		const uint256nr7YSa = await WolfStakingRewardsCmAIuWd.stake.call(uintrn4eWCX, uintifsuDX, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressXbdCW0C = accounts[2]
		const addressJS9DqA = accounts[4]
		const addressxHmjTgF = accounts[0]
		const WolfStakingRewardsJDKVaB7 = await WolfStakingRewards.new(addressXbdCW0C, addressJS9DqA, addressxHmjTgF, {from: accounts[1]});
		const uintUNXAgZ = BigInt("192")
		const uintikPWorM = BigInt("865")
		const uinthYhA3H5 = BigInt("1911")
		const uintKgCsn9j = BigInt("624")
		const uint256klblvlv = await WolfStakingRewardsJDKVaB7.totalSupplyPerPool.call(uintUNXAgZ, {from: accounts[0]});
		const uintQQgL0nm = await WolfStakingRewardsJDKVaB7.getReward.call(uintikPWorM, {from: accounts[1]});
		const uintwbjJnEd = await WolfStakingRewardsJDKVaB7.getReward.call(uinthYhA3H5, {from: accounts[1]});
//		await WolfStakingRewardsJDKVaB7.onlyRewardsDistribution.call({from: accounts[0]});
//		await WolfStakingRewardsJDKVaB7.nonReentrant.call({from: accounts[4]});
//		const uint256ti1FMD = await WolfStakingRewardsJDKVaB7.exit.call(uintKgCsn9j, {from: accounts[1]});

		assert.equal(uint256klblvlv, BigInt("0"))
		await expect(WolfStakingRewardsJDKVaB7.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringEN1iKi3 = "WHkrueYbQ4msMZrQaqizZw5rILHHJjHgJSdaTCbzT3FVBCtsF9whowBbGIgGOXa"
		const stringYyEtcAb = "pxtmMXjrPpVG3LBeSDWjp3JnaL2e6sDKidHY7wDqiG4kyqHwMU3H6wUw0XShSp6bcOUlfkINofkUQGyFoEpcOQpOgLxY6k"
		const uintJ2DtMex = BigInt("207")
		const WolfStakingRewardsfW8stu = await WolfStakingRewards.new(stringEN1iKi3, stringYyEtcAb, uintJ2DtMex, {from: accounts[5]});
		const uintSSSmLT3 = BigInt("1444")
		const addressgMp8m4o = accounts[1]
		const uintrct2lBS = BigInt("651")
		const uintp21Pfti = BigInt("1626")
		const uintoZqYm5c = BigInt("1486")
		const addressHxCkono = await WolfStakingRewardsfW8stu.updateReward.call(addressgMp8m4o, uintSSSmLT3, {from: accounts[1]});
		await WolfStakingRewardsfW8stu.nonReentrant.call({from: accounts[1]});
		const uint256crMnKmr = await WolfStakingRewardsfW8stu.stake.call(uintp21Pfti, uintrct2lBS, {from: accounts[3]});
		const uint256EVjIHSO = await WolfStakingRewardsfW8stu.totalSupplyPerPool.call(uintoZqYm5c, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressW7iOT9V = accounts[2]
		const addressSAt5yuP = accounts[4]
		const addressA3KQro = accounts[0]
		const WolfStakingRewardsJDKVaB7 = await WolfStakingRewards.new(addressW7iOT9V, addressSAt5yuP, addressA3KQro, {from: accounts[1]});
		const uintEec8MSW = BigInt("834")
		const uintkRE0zE5 = BigInt("457")
		const uintorMLBm5 = BigInt("624")
		const uintQQgL0nm = await WolfStakingRewardsJDKVaB7.getReward.call(uintEec8MSW, {from: accounts[1]});
//		const uint256arrayJ5guLDg = await WolfStakingRewardsJDKVaB7.updateNotifyRewardAmount.call(uintkRE0zE5, {from: accounts[0]});
//		const uint256ti1FMD = await WolfStakingRewardsJDKVaB7.exit.call(uintorMLBm5, {from: accounts[1]});
//		const stringJ21bKnY = await WolfStakingRewardsJDKVaB7.name.call({from: accounts[4]});

		await expect(WolfStakingRewardsJDKVaB7.updateNotifyRewardAmount.call(uintkRE0zE5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringZ02fIer = "mjpjojNfLnhJXJzTblyWTxLCPTM5QXKRqZlEEgXc2dECqcOVilGlcGPte5VP2z"
		const stringBOb34q3 = "9wq7OFxPM7IJGpp3eJohL4VcaCaCaO53PKWWaAnpxE84ToSXSgocbk3ylCDfvmZbjb6chHA5"
		const uintrcuOP8t = BigInt("38")
		const WolfStakingRewardsrMaV78x = await WolfStakingRewards.new(stringZ02fIer, stringBOb34q3, uintrcuOP8t, {from: accounts[3]});
		const uintZB19Utc = BigInt("1698")
		const uintDeBm9xP = BigInt("739")
		const uintYuNnknc = BigInt("1802")
		const uintmOacvkn = BigInt("69")
		const uintxF39e9g = await WolfStakingRewardsrMaV78x.getReward.call(uintZB19Utc, {from: accounts[1]});
		await WolfStakingRewardsrMaV78x.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256arrayjtsy0sk = await WolfStakingRewardsrMaV78x.updateNotifyRewardAmount.call(uintDeBm9xP, {from: accounts[5]});
		const uint256byNgKYP = await WolfStakingRewardsrMaV78x.withdrawRemainingBalance.call(uintmOacvkn, uintYuNnknc, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmbQfYc = "2hOdN7pPjv9oowBFxn1a9LQLeyIHyA0olFk5ZeBqp3nGKlCrtGhtNhqTHpLVPiQZfux"
		const string5FbGO9 = "i1wYoJsoAubbdhiQ4Z4VHr6dMsid5uA6cs2rL2TBeOCZoQPtUF1nlvwHBsEfi4vzg9MiVYMMH4Ne7Ic4nLZ"
		const uintTK1uRG = BigInt("220")
		const WolfStakingRewardstXZQYa1 = await WolfStakingRewards.new(stringmbQfYc, string5FbGO9, uintTK1uRG, {from: "0x0000000000000000000000000000000000000001"});
		const uintiuPQ1zd = BigInt("305")
		const uintC6Sws9U = BigInt("509")
		const uintCduBvuv = BigInt("878")
		const uintCeM7Aaz = BigInt("1119")
		const addressxb27DVe = accounts[4]
		const uint256ITX9TxU = await WolfStakingRewardstXZQYa1.lastTimeRewardApplicable.call(uintiuPQ1zd, {from: accounts[1]});
		const uint256VdXEw39 = await WolfStakingRewardstXZQYa1.exit.call(uintC6Sws9U, {from: accounts[3]});
		const uint256GPjij24 = await WolfStakingRewardstXZQYa1.totalSupplyPerPool.call(uintCduBvuv, {from: accounts[5]});
		await WolfStakingRewardstXZQYa1.nonReentrant.call({from: accounts[1]});
		const addressUXam9kI = await WolfStakingRewardstXZQYa1.updateReward.call(addressxb27DVe, uintCeM7Aaz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgXMQwUR = "41MwH4biMLtiHlJkAfHWtPIvWHNC8Geo7si9tzZj19VriuQ2Ou3kKYAIU"
		const stringiRrrZPS = "UXV0UBWbVV3AS75ivy8R5O9DWkn1JGXXcd97zAvZAmtG8u6iGo8t"
		const uintN5xIVPS = BigInt("245")
		const WolfStakingRewardsmPjVfNw = await WolfStakingRewards.new(stringgXMQwUR, stringiRrrZPS, uintN5xIVPS, {from: accounts[3]});
		const uintdOWmIRr = BigInt("799")
		const uintinMcaj9 = BigInt("1612")
		const uintwzgnw3w = BigInt("1680")
		const uintmx039M = BigInt("1667")
		const uint8untDGcV = await WolfStakingRewardsmPjVfNw.decimals.call({from: accounts[5]});
		await WolfStakingRewardsmPjVfNw.nonReentrant.call({from: accounts[3]});
		const uint256NoXuQHs = await WolfStakingRewardsmPjVfNw.totalSupplyPerPool.call(uintdOWmIRr, {from: accounts[3]});
		const uint256arraye2VKCMI = await WolfStakingRewardsmPjVfNw.updateNotifyRewardAmount.call(uintinMcaj9, {from: accounts[2]});
		const uint256bzCo6PV = await WolfStakingRewardsmPjVfNw.withdrawRemainingBalance.call(uintmx039M, uintwzgnw3w, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcz7QgXJ = "pYYritB7sodAeFJtO2HUJjSXbs53Skxc2Qs"
		const stringUDaxm64 = "XWUKlbpIL7B6dLgDkXpC9WfROC8LSE0P4FwOkuPqJdLEO33Qb6eFB6yBotC6QHIiEJVAcKrSu"
		const uinttUOLA23 = BigInt("172")
		const WolfStakingRewardsFS17DB3 = await WolfStakingRewards.new(stringcz7QgXJ, stringUDaxm64, uinttUOLA23, {from: "0x0000000000000000000000000000000000000001"});
		const uintz5kCOxY = BigInt("641")
		const addressYYmubXS = accounts[0]
		const addressMddml2Z = await WolfStakingRewardsFS17DB3.updateReward.call(addressYYmubXS, uintz5kCOxY, {from: accounts[4]});
		const stringPhiE9RK = await WolfStakingRewardsFS17DB3.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmavoXe5 = "EbmLrQugrRXu"
		const stringDB3gfo = "y1aOlRizooFX"
		const uintwHAdSyU = BigInt("217")
		const WolfStakingRewardsx0MKrwK = await WolfStakingRewards.new(stringmavoXe5, stringDB3gfo, uintwHAdSyU, {from: accounts[3]});
		const uintNNIYWtd = BigInt("1798")
		const uintBCg80H = BigInt("136")
		const uintjrkmMRO = BigInt("832")
		const stringR5fUDH8 = await WolfStakingRewardsx0MKrwK.symbol.call({from: accounts[5]});
		const stringkKgKvZA = await WolfStakingRewardsx0MKrwK.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Hb2sYW5 = await WolfStakingRewardsx0MKrwK.rewardPerToken.call(uintNNIYWtd, {from: accounts[5]});
		const uint256nuOGhYj = await WolfStakingRewardsx0MKrwK.withdrawRemainingBalance.call(uintjrkmMRO, uintBCg80H, {from: accounts[1]});
		const stringKebORyw = await WolfStakingRewardsx0MKrwK.name.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtdKmxb = "V0BhCM8LbENDsFonnOcwvW89lpM876Ufqu9aJcXpawJeWwN838eVM8QWr8BDQ6YRuW7nVfB"
		const stringSJcrJd = "2eCTq7YFLLO2x5FlPy1y2lWAS4yRHuoghnDHx8aubbAcie61ZdLKD"
		const uintzOrIMza = BigInt("79")
		const WolfStakingRewardsGDmrUp = await WolfStakingRewards.new(stringtdKmxb, stringSJcrJd, uintzOrIMza, {from: accounts[2]});
		const uintOAlUOB9 = BigInt("1072")
		const uintVkhnc3Y = BigInt("1895")
		const uintkmzypBa = BigInt("243")
		const uintKbejBBw = BigInt("993")
		const uintCXnGct8 = BigInt("1319")
		const uint256arrayNIm8Uf = await WolfStakingRewardsGDmrUp.updateNotifyRewardAmount.call(uintOAlUOB9, {from: accounts[3]});
		const uint256eQGTzOo = await WolfStakingRewardsGDmrUp.stake.call(uintkmzypBa, uintVkhnc3Y, {from: accounts[0]});
		const uint256MzHQyD8 = await WolfStakingRewardsGDmrUp.exit.call(uintKbejBBw, {from: accounts[1]});
		const uint256ZzgBo7 = await WolfStakingRewardsGDmrUp.lastTimeRewardApplicable.call(uintCXnGct8, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsny4LAq = "bPMeRLD3HqaEX5wFdQafIvOI4DfT8YpXKYzylXQGdig3IeKVim4kUr9Cj"
		const stringiyH2Ck1 = "tDk1bLwyuTGu6AMjhg8GhQRwzLpvbVzwaV9Nd2hz1a6Usz4yxgzShXPlqECvR0uiB"
		const uinttJJ1ETJ = BigInt("63")
		const WolfStakingRewardsWY42m8w = await WolfStakingRewards.new(stringsny4LAq, stringiyH2Ck1, uinttJJ1ETJ, {from: accounts[0]});
		await WolfStakingRewardsWY42m8w.onlyOwner.call({from: accounts[2]});
		const uint8Y8g5QSj = await WolfStakingRewardsWY42m8w.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringNuof3lK = await WolfStakingRewardsWY42m8w.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmWayA2h = "d8tIMnYbpYuYKaKa04FJIg2FM21JtTiNXbkk1Sfu"
		const stringtOdwR7R = "ZFlLU5QiL8M1OO9qfIEsI39MqzjLKFfTB1UOTHtNzXV2CQKhI66lkC5wMXWDt0vsixSgMpQddV7opBj3IFMVfChxqm4ix3OK"
		const uintWuUnjdn = BigInt("97")
		const WolfStakingRewardsH6c92pn = await WolfStakingRewards.new(stringmWayA2h, stringtOdwR7R, uintWuUnjdn, {from: accounts[2]});
		const uintLO4aJZo = BigInt("316")
		const uintCFWiXTx = BigInt("1482")
		const uintWbHbA8W = BigInt("1628")
		const uintMEGnFew = BigInt("1621")
		const uint256arrayAb822rb = await WolfStakingRewardsH6c92pn.updateNotifyRewardAmount.call(uintLO4aJZo, {from: accounts[0]});
		const uint256PWXayjK = await WolfStakingRewardsH6c92pn.getRewardForDuration.call(uintCFWiXTx, {from: accounts[3]});
		const uint256A2Xj43z = await WolfStakingRewardsH6c92pn.withdraw.call(uintMEGnFew, uintWbHbA8W, {from: accounts[3]});
		await WolfStakingRewardsH6c92pn.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLnF7ao = "TPYifrdHLiwKUaYaM3sh2VydyCCjrCfNmW657uFeM8Os1BHEoar79GFCnx3iKUXAH9Fn"
		const stringcATprkR = "8jKoecTgtRuFUsoEVVd5Kyk93qmN83LXEN"
		const uintAsMRlb4 = BigInt("252")
		const WolfStakingRewardsrNOqRmx = await WolfStakingRewards.new(stringLnF7ao, stringcATprkR, uintAsMRlb4, {from: accounts[0]});
		const uintf3a6TnP = BigInt("978")
		const addressdFWRBCV = accounts[4]
		const uintcEvGzto = BigInt("472")
		const uintLIxujjy = BigInt("1874")
		const uintNVq1Hgm = BigInt("1008")
		const addressw4h3Mh1 = accounts[4]
		const uint256ybBT27n = await WolfStakingRewardsrNOqRmx.earned.call(addressdFWRBCV, uintf3a6TnP, {from: accounts[0]});
		const uint256pvRkhJv = await WolfStakingRewardsrNOqRmx.withdraw.call(uintLIxujjy, uintcEvGzto, {from: accounts[4]});
		const uint256mMrTZPl = await WolfStakingRewardsrNOqRmx.earned.call(addressw4h3Mh1, uintNVq1Hgm, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCyKjnl6 = "qIttGiQR9jXLpLGjuCQd6ginAvbTUVOOyX85eIqPp7jS"
		const stringLp3pOMF = "JDJ8d5GikrFiT2J17kAeOSHP7up7SdSmxsqtM9CfdQdRrpNpxIp1fCkXybv9BdredlgUKAAvuXGpda7PVd7AcMQd48qk"
		const uintAdG0sTi = BigInt("75")
		const WolfStakingRewardsldO6hMj = await WolfStakingRewards.new(stringCyKjnl6, stringLp3pOMF, uintAdG0sTi, {from: accounts[0]});
		const uintU9ATtWp = BigInt("573")
		const uinti9GzzZU = BigInt("1973")
		const uintVWCOuJV = BigInt("285")
		const uintVJ8kmY = BigInt("1748")
		const uintP964iP = BigInt("1835")
		const addressf1eD51R = "0x0000000000000000000000000000000000000001"
		const uint256arrayIGt3kJC = await WolfStakingRewardsldO6hMj.updateNotifyRewardAmount.call(uintU9ATtWp, {from: accounts[4]});
		const uint256fi7HQHM = await WolfStakingRewardsldO6hMj.stake.call(uintVWCOuJV, uinti9GzzZU, {from: accounts[4]});
		const uint256NEIMU2P = await WolfStakingRewardsldO6hMj.rewardPerToken.call(uintVJ8kmY, {from: accounts[1]});
		await WolfStakingRewardsldO6hMj.nonReentrant.call({from: accounts[5]});
		const uint256sw6uAN = await WolfStakingRewardsldO6hMj.earned.call(addressf1eD51R, uintP964iP, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeLtxTJK = "cY98DD7nvWv19wcu"
		const stringHwshCM = "Anoy2sGQFtN2Ig1GOAv2IilxPLtOfLiJoGQTN1HJWqer4WLLhbelmlmqAaSrTtHscvWXEPwnTcKNpLHnByVIFwm7qMRuGcKx"
		const uintsmqTN54 = BigInt("194")
		const WolfStakingRewardsv0KLKYT = await WolfStakingRewards.new(stringeLtxTJK, stringHwshCM, uintsmqTN54, {from: "0x0000000000000000000000000000000000000001"});
		const uintytXc1Ya = BigInt("508")
		const addresspzeEAQI = accounts[4]
		const uintV681RDd = BigInt("448")
		const uintdxTLd5Q = BigInt("1950")
		const uintk6hjejf = BigInt("1770")
		const uintlUMIAq4 = BigInt("548")
		const uintXzmEfQ7 = BigInt("323")
		const addressJmXn7f = accounts[2]
		const stringkOIGoRS = await WolfStakingRewardsv0KLKYT.symbol.call({from: accounts[0]});
		await WolfStakingRewardsv0KLKYT.nonReentrant.call({from: accounts[4]});
		const uint256Coqe8E = await WolfStakingRewardsv0KLKYT.earned.call(addresspzeEAQI, uintytXc1Ya, {from: accounts[3]});
		const uint256D6ai2W0 = await WolfStakingRewardsv0KLKYT.withdraw.call(uintdxTLd5Q, uintV681RDd, {from: accounts[2]});
		const uint256uyYDVtB = await WolfStakingRewardsv0KLKYT.stake.call(uintlUMIAq4, uintk6hjejf, {from: accounts[2]});
		const uint256LOqarJF = await WolfStakingRewardsv0KLKYT.earned.call(addressJmXn7f, uintXzmEfQ7, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ4Dy9NG = "iRjrcOH80O1yfUIav96uRAdcojSSPdWz3Eh6m"
		const stringKlg2ZdG = "4ESb9FN"
		const uintbicWbIW = BigInt("216")
		const WolfStakingRewardscO6hSlj = await WolfStakingRewards.new(stringQ4Dy9NG, stringKlg2ZdG, uintbicWbIW, {from: accounts[3]});
		const uintUNRRbEs = BigInt("1177")
		const uintrNuBypg = BigInt("1445")
		const uintF5I0RJw = BigInt("670")
		const uintfy7XL5U = BigInt("1217")
		const uintXhwyyhM = BigInt("1943")
		const addressDH1O9yY = accounts[3]
		const uintvflYZw = BigInt("756")
		const uint256jOs7gJs = await WolfStakingRewardscO6hSlj.getRewardForDuration.call(uintUNRRbEs, {from: accounts[1]});
		const uint256rrX2Vk5 = await WolfStakingRewardscO6hSlj.withdrawRemainingBalance.call(uintF5I0RJw, uintrNuBypg, {from: accounts[3]});
		await WolfStakingRewardscO6hSlj.nonReentrant.call({from: accounts[0]});
		const uint256LulhB6n = await WolfStakingRewardscO6hSlj.getRewardForDuration.call(uintfy7XL5U, {from: accounts[0]});
		const addressXAxC5Rv = await WolfStakingRewardscO6hSlj.updateReward.call(addressDH1O9yY, uintXhwyyhM, {from: accounts[0]});
		const uinthAuxHia = await WolfStakingRewardscO6hSlj.getReward.call(uintvflYZw, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDINCZK = "rRIqxY7WY2SKc72XXK5CqMEE5JIePRRVq4nosMQSTEde9m6Ip"
		const stringMExNOV8 = "49l2AsBVGQnHimDp7yJAn7uJ89VkRJRlaSDRwyH3x5fwCCELdNBbRsA1UAa51zrAkcribyXt"
		const uintUFD4Bni = BigInt("59")
		const WolfStakingRewardsuC2Yf6Z = await WolfStakingRewards.new(stringDINCZK, stringMExNOV8, uintUFD4Bni, {from: accounts[5]});
		const uintu1DflXD = BigInt("114")
		const addressSiIC4BY = accounts[0]
		const uintcxlH2ng = BigInt("1116")
		const uinthEp2rqd = BigInt("1934")
		await WolfStakingRewardsuC2Yf6Z.onlyOwner.call({from: accounts[0]});
		const uint256kga1Lma = await WolfStakingRewardsuC2Yf6Z.earned.call(addressSiIC4BY, uintu1DflXD, {from: accounts[0]});
		const uintsJeNzZm = await WolfStakingRewardsuC2Yf6Z.getReward.call(uintcxlH2ng, {from: accounts[2]});
		const stringBw4Rgzz = await WolfStakingRewardsuC2Yf6Z.symbol.call({from: accounts[3]});
		const uint256W9yGYU7 = await WolfStakingRewardsuC2Yf6Z.lastTimeRewardApplicable.call(uinthEp2rqd, {from: accounts[4]});
		const stringmPtu1Zc = await WolfStakingRewardsuC2Yf6Z.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWJpIyBV = "xbThMUx"
		const stringiN7RJvX = "4LSTOFRU8jGQWEwZXpV5Z6S7AG4IURcoJJzL7Gf7YpjHGF1Xf8UxRSmlPiCC"
		const uintHvnLY1w = BigInt("194")
		const WolfStakingRewardsEvPtI1e = await WolfStakingRewards.new(stringWJpIyBV, stringiN7RJvX, uintHvnLY1w, {from: accounts[3]});
		const uintlpnvSJe = BigInt("2036")
		const uintljgFOi = BigInt("1078")
		const uintFVqGPZm = BigInt("1649")
		const uintnovJGH = BigInt("117")
		const addressrctJnNu = accounts[3]
		const uint256ogO9Dr = await WolfStakingRewardsEvPtI1e.withdraw.call(uintljgFOi, uintlpnvSJe, {from: accounts[4]});
		const uint256fxAbjr = await WolfStakingRewardsEvPtI1e.totalSupplyPerPool.call(uintFVqGPZm, {from: accounts[3]});
		const uint256XOYLhlH = await WolfStakingRewardsEvPtI1e.earned.call(addressrctJnNu, uintnovJGH, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOHGkAUU = "w1qKNBFdqTjzHvVOBfwOA8HwBl81YDx3lX8gNJaCMqu3b99YdhwMdDc2KrD8GBrh7M2V3HovQkKWvMho0gqsH8tH5eo"
		const stringFSC3ibA = "MVqxPz"
		const uintPRoYPwM = BigInt("236")
		const WolfStakingRewardsXziPUGP = await WolfStakingRewards.new(stringOHGkAUU, stringFSC3ibA, uintPRoYPwM, {from: accounts[1]});
		const uintucH2njs = BigInt("17")
		const addressFeg8Zj = accounts[1]
		await WolfStakingRewardsXziPUGP.nonReentrant.call({from: accounts[3]});
		const stringQ9HFot5 = await WolfStakingRewardsXziPUGP.name.call({from: accounts[0]});
		const addressH256mgJ = await WolfStakingRewardsXziPUGP.updateReward.call(addressFeg8Zj, uintucH2njs, {from: accounts[1]});
		const uint8pHv3EQA = await WolfStakingRewardsXziPUGP.decimals.call({from: accounts[0]});
		const stringzO0QR5 = await WolfStakingRewardsXziPUGP.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLyRTbic = "fglUgVQPCAMP8qZDrP"
		const stringP60Oqhr = "veIH2qmA4qYvZLoMnRiBpsBZj7sv4AMXDROqNtTI8OmT314jcJO"
		const uintDRanVl = BigInt("0")
		const WolfStakingRewardsK7bx3q = await WolfStakingRewards.new(stringLyRTbic, stringP60Oqhr, uintDRanVl, {from: accounts[4]});
		const uintlRrHHwy = BigInt("77")
		const uinttZjswyI = BigInt("608")
		const uintKu8D9V0 = BigInt("1541")
		const addressg1gWZU7 = accounts[4]
		const uintFTo4xCr = BigInt("235")
		const addressnjS5Nyq = accounts[2]
		const uint256mEQfHeN = await WolfStakingRewardsK7bx3q.withdraw.call(uinttZjswyI, uintlRrHHwy, {from: accounts[1]});
		await WolfStakingRewardsK7bx3q.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256bpihdEX = await WolfStakingRewardsK7bx3q.earned.call(addressg1gWZU7, uintKu8D9V0, {from: accounts[4]});
		const uint256goa8KW = await WolfStakingRewardsK7bx3q.earned.call(addressnjS5Nyq, uintFTo4xCr, {from: accounts[4]});
		await WolfStakingRewardsK7bx3q.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringK5pbxAn = "D3JHjWf73mEtTmDzXolJJTubngr4VpR9kiBG"
		const stringWaNMW3M = "mg6RUqgNQ0BPGCgShN4rmdtYNg77lXTSvdfsUszNUts1RSb7kY8Eru7JUMyMSxt31ADNDqLmzVGi"
		const uintpxFtVMb = BigInt("252")
		const WolfStakingRewardst3fMYQu = await WolfStakingRewards.new(stringK5pbxAn, stringWaNMW3M, uintpxFtVMb, {from: accounts[1]});
		const uintRazBoG0 = BigInt("2005")
		const uintR7QP8Mz = BigInt("273")
		const uintljMFn31 = BigInt("172")
		const uintZ2h8yeg = BigInt("809")
		const addressum9yQ5C = accounts[2]
		const uint256Nbz0Eu = await WolfStakingRewardst3fMYQu.withdraw.call(uintR7QP8Mz, uintRazBoG0, {from: accounts[0]});
		const uint256R1AqcSB = await WolfStakingRewardst3fMYQu.lastTimeRewardApplicable.call(uintljMFn31, {from: accounts[1]});
		const uint256v4H0Amk = await WolfStakingRewardst3fMYQu.balanceOfPerPool.call(addressum9yQ5C, uintZ2h8yeg, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKlzr33 = "PNizdVN1v8PFAcHmsWqSHqh5jE4pBFPkGyQySfLjg93rP7tKkYOFHEW"
		const stringYMYWgnt = "7sjXlGgu9r5iPq2g4wbCp91q3R1VYNFuzYdMtLt7qwUX0Lwyjk"
		const uintDM535lf = BigInt("70")
		const WolfStakingRewardsZYZB6E7 = await WolfStakingRewards.new(stringKlzr33, stringYMYWgnt, uintDM535lf, {from: accounts[3]});
		const uintp7XDqlB = BigInt("1457")
		const uintCi0mFx8 = BigInt("44")
		const uintAhREdjz = BigInt("404")
		const uintdP19ux0 = BigInt("683")
		const addressVCUxFn = accounts[1]
		const uintsO8aSR6 = BigInt("362")
		const uintbelnCCJ = BigInt("705")
		const uint8DfMd92B = await WolfStakingRewardsZYZB6E7.decimals.call({from: accounts[5]});
		const uint256r3Wbjqr = await WolfStakingRewardsZYZB6E7.totalSupplyPerPool.call(uintp7XDqlB, {from: accounts[0]});
		const uint8k9Lvdl9 = await WolfStakingRewardsZYZB6E7.decimals.call({from: accounts[2]});
		const uint256QZXGPE = await WolfStakingRewardsZYZB6E7.stake.call(uintAhREdjz, uintCi0mFx8, {from: accounts[3]});
		const uint256HRpWgE = await WolfStakingRewardsZYZB6E7.earned.call(addressVCUxFn, uintdP19ux0, {from: accounts[2]});
		const uint256crTod2g = await WolfStakingRewardsZYZB6E7.stake.call(uintbelnCCJ, uintsO8aSR6, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQLWlpd = "UGpoBo19OZUmiv9wyttMk"
		const stringNCzXZkn = "rdOIlQcU7LObafS8cfsTVcihtkWQByxhcmsjwnucpPlfJofWWLexnOyswo9ebCTWEHbV57Au1R5OPPkIgpGKIskF5cz16pCpW"
		const uintUgzr7bb = BigInt("78")
		const WolfStakingRewardsfAVkqHs = await WolfStakingRewards.new(stringQLWlpd, stringNCzXZkn, uintUgzr7bb, {from: accounts[0]});
		const uintVfLxcP3 = BigInt("1738")
		const uintDRhfEoX = BigInt("1745")
		const uint6xAbMM = BigInt("1545")
		const uintwW9VaL = BigInt("1983")
		const uint256scWGbno = await WolfStakingRewardsfAVkqHs.stake.call(uintDRhfEoX, uintVfLxcP3, {from: accounts[4]});
		const uint256NGuGnu5 = await WolfStakingRewardsfAVkqHs.rewardPerToken.call(uint6xAbMM, {from: accounts[1]});
		const uint256Wck14Hs = await WolfStakingRewardsfAVkqHs.rewardPerToken.call(uintwW9VaL, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZjLpD8 = "UrewF2yfpfm2DH23kkJHYpnjGQFIx5hkVHawOpUCwt"
		const stringGA0NMVT = "YpqqUccBNuRHov2fPXlJesmAmvlhzlA7RWjTdhuzfBumacOyn1iJTv2NtRWAZuX7qoDfyd"
		const uintIcp3sOw = BigInt("81")
		const WolfStakingRewardsj4QF4as = await WolfStakingRewards.new(stringZjLpD8, stringGA0NMVT, uintIcp3sOw, {from: accounts[1]});
		const uintrOnPpxt = BigInt("1894")
		const uintc47a6ZN = BigInt("1404")
		const addresspXp77Co = accounts[2]
		const uint256PsEQljd = await WolfStakingRewardsj4QF4as.totalSupplyPerPool.call(uintrOnPpxt, {from: accounts[3]});
		const uint256zs3V1v = await WolfStakingRewardsj4QF4as.balanceOfPerPool.call(addresspXp77Co, uintc47a6ZN, {from: accounts[5]});
		const stringt0IxhWL = await WolfStakingRewardsj4QF4as.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmzx3QZg = "M"
		const stringe9LAy1O = "EtscXlxgrt8UyzCHLIZRqx8"
		const uintVUnVCpv = BigInt("66")
		const WolfStakingRewardsirXfRJ = await WolfStakingRewards.new(stringmzx3QZg, stringe9LAy1O, uintVUnVCpv, {from: accounts[1]});
		const uintBEBa6m4 = BigInt("1218")
		const uintHN6xIyH = BigInt("171")
		const uintNSfrVEL = BigInt("1425")
		const uintJf8DZBQ = BigInt("1985")
		const uintYLo2KE7 = BigInt("772")
		const uint256UYHc27a = await WolfStakingRewardsirXfRJ.lastTimeRewardApplicable.call(uintBEBa6m4, {from: accounts[1]});
		await WolfStakingRewardsirXfRJ.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZJDr6eW = await WolfStakingRewardsirXfRJ.withdraw.call(uintNSfrVEL, uintHN6xIyH, {from: accounts[3]});
		const uint256UPyChm1 = await WolfStakingRewardsirXfRJ.stake.call(uintYLo2KE7, uintJf8DZBQ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMEFF87 = "oErkXfv3LiSNcZH2TqSj9QTq0HEsARzAjm3JdrJiFXr7ahw9lMN95lt2gjnyEuRkLgLaV1CasEwrrprbYrS4"
		const stringapOQ0B1 = "aoz67FjMFTNWD5rpM9xGTquwC9yKE0a1uc99LoUeKaO133oM8w7b2c4qKZA7sKKuCaW5nB3Gq7CTVtGIFl9nwGxmsG71a"
		const uintlaJBGzH = BigInt("49")
		const WolfStakingRewardsoitXj6 = await WolfStakingRewards.new(stringMEFF87, stringapOQ0B1, uintlaJBGzH, {from: "0x0000000000000000000000000000000000000001"});
		const uintBRAjMg = BigInt("515")
		const uintb1BQL0z = BigInt("1429")
		const uintA2ts8ts = BigInt("776")
		const uint256OKZk7B5 = await WolfStakingRewardsoitXj6.withdrawRemainingBalance.call(uintb1BQL0z, uintBRAjMg, {from: accounts[4]});
		const uint8aaclSu = await WolfStakingRewardsoitXj6.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayEPS7LTn = await WolfStakingRewardsoitXj6.updateNotifyRewardAmount.call(uintA2ts8ts, {from: accounts[0]});
		const stringluJM3hx = await WolfStakingRewardsoitXj6.name.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const string6sFrbG = "evIj"
		const stringzbUQnbS = "f5rNiuMbIxy1RDW3n1S98TSXRULs8B0ZDmiLDWSyMk3SifnKVwMnPoHRCGEW1hNrZKUXB5CDcA9sSwMS5y3tJFin4q9J9zRQKau"
		const uintAY4aPZZ = BigInt("114")
		const WolfStakingRewardsdV1SBWD = await WolfStakingRewards.new(string6sFrbG, stringzbUQnbS, uintAY4aPZZ, {from: accounts[4]});
		const uinthJdXica = BigInt("256")
		const uintrqpagr0 = BigInt("721")
		const addressjiz7i3S = "0x0000000000000000000000000000000000000001"
		const uintqYhABGL = BigInt("1160")
		const addresswbYB7r1 = accounts[0]
		const uintt8rs8NX = BigInt("1929")
		const uint256arrayqyDs78 = await WolfStakingRewardsdV1SBWD.updateNotifyRewardAmount.call(uinthJdXica, {from: accounts[4]});
		const uint256DBYX7y = await WolfStakingRewardsdV1SBWD.balanceOfPerPool.call(addressjiz7i3S, uintrqpagr0, {from: accounts[4]});
		const uint256sJoDFvD = await WolfStakingRewardsdV1SBWD.earned.call(addresswbYB7r1, uintqYhABGL, {from: accounts[4]});
		const uint256arrayhNg5Rog = await WolfStakingRewardsdV1SBWD.updateNotifyRewardAmount.call(uintt8rs8NX, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDOLVDOA = "fOPmoAR4AzVFVjn6Hxb8iVmkYq418VE53LZLmL"
		const stringmhdbmgB = "ExhP6T1yTlaPwQx9zlobenhrJyWpH6BBeJKKxiW9WdrgHsGiZM9l66CcBMqqXNYavGpPxV2KniJsmqw513CtXGVFyL"
		const uintL08dXX = BigInt("254")
		const WolfStakingRewardsHAVqjDx = await WolfStakingRewards.new(stringDOLVDOA, stringmhdbmgB, uintL08dXX, {from: accounts[2]});
		const uintG3RfvZk = BigInt("1109")
		const uintQwD1nAP = BigInt("798")
		const uint8MZoBcnr = await WolfStakingRewardsHAVqjDx.decimals.call({from: accounts[0]});
		await WolfStakingRewardsHAVqjDx.nonReentrant.call({from: accounts[4]});
		const uint256L1CkNRr = await WolfStakingRewardsHAVqjDx.stake.call(uintQwD1nAP, uintG3RfvZk, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const string7bPoOV = "fmxjNJTDifcg7o9H5PdwVbZmnnW5RvbcB3DagwOPnlJb7Pf2H3O"
		const stringKXNcr1 = "AR"
		const uintJz9zqbU = BigInt("227")
		const WolfStakingRewardsVergdES = await WolfStakingRewards.new(string7bPoOV, stringKXNcr1, uintJz9zqbU, {from: accounts[1]});
		const uintSYzXRXU = BigInt("535")
		const uintZG2gZL6 = BigInt("1328")
		const addressBfurAzc = accounts[3]
		const uintvVYR4By = BigInt("689")
		const uintD8s3Hhi = BigInt("899")
		const uintHiNB13U = BigInt("1220")
		const uintOsjpfDd = BigInt("1353")
		const uint256arrayt5ASr4o = await WolfStakingRewardsVergdES.updateNotifyRewardAmount.call(uintSYzXRXU, {from: accounts[0]});
		await WolfStakingRewardsVergdES.nonReentrant.call({from: accounts[4]});
		const uint256GFGISoW = await WolfStakingRewardsVergdES.earned.call(addressBfurAzc, uintZG2gZL6, {from: accounts[0]});
		const uint256wrTQzDY = await WolfStakingRewardsVergdES.withdrawRemainingBalance.call(uintD8s3Hhi, uintvVYR4By, {from: accounts[2]});
		const uint256MytOEK0 = await WolfStakingRewardsVergdES.withdraw.call(uintOsjpfDd, uintHiNB13U, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuxQmimY = "mI2U7MS4FrTVlXM5cVzaMoMBqxE7AHUfuUvSAjQeJBuFUJSog2DZbUCNc5y6tjUQBfwB"
		const stringWw0EtC = "FCRcHUfoSNmthPQArbtDF9N7Yvlqq7oxJICsCiRHV0GpPLlCyvrLc4bHdEBLLpDC5l6fB6nIN8FCYv1FPL2WCGsFGxKpa8Huf"
		const uintj2UnimC = BigInt("206")
		const WolfStakingRewardsAKPBvw = await WolfStakingRewards.new(stringuxQmimY, stringWw0EtC, uintj2UnimC, {from: accounts[5]});
		const uintMqQzK5G = BigInt("1776")
		const uintiv232cC = BigInt("1235")
		const uinttS1DPcE = BigInt("226")
		const uintK9zFvJp = BigInt("232")
		const uintZVea1oG = BigInt("1158")
		const uintZ3CnAFf = BigInt("828")
		const uint256ZHEbS2v = await WolfStakingRewardsAKPBvw.withdrawRemainingBalance.call(uintiv232cC, uintMqQzK5G, {from: accounts[3]});
		const uint256McHvhoX = await WolfStakingRewardsAKPBvw.stake.call(uintK9zFvJp, uinttS1DPcE, {from: accounts[5]});
		const uint256iIAfOAf = await WolfStakingRewardsAKPBvw.withdrawRemainingBalance.call(uintZ3CnAFf, uintZVea1oG, {from: accounts[3]});
		await WolfStakingRewardsAKPBvw.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcd16ZGC = "zvd"
		const stringQGV8HJq = "b3Vy2ltY5pnMBip9POconDH6GfGO7vROdu4Gn"
		const uintab2uk9Q = BigInt("208")
		const WolfStakingRewardsKqnMlj6 = await WolfStakingRewards.new(stringcd16ZGC, stringQGV8HJq, uintab2uk9Q, {from: accounts[5]});
		const uinttyWCj7T = BigInt("1548")
		const uintUh9n75 = BigInt("426")
		const uintQzgqMCe = BigInt("1941")
		const uintbUnKg9E = BigInt("300")
		await WolfStakingRewardsKqnMlj6.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256oFbLjv7 = await WolfStakingRewardsKqnMlj6.getRewardForDuration.call(uinttyWCj7T, {from: accounts[5]});
		const uint256VA5qF3c = await WolfStakingRewardsKqnMlj6.rewardPerToken.call(uintUh9n75, {from: accounts[1]});
		const uint256EtrymZA = await WolfStakingRewardsKqnMlj6.rewardPerToken.call(uintQzgqMCe, {from: accounts[0]});
		const uint256oCHS8fh = await WolfStakingRewardsKqnMlj6.exit.call(uintbUnKg9E, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringA9mDaLV = "DwVptmAAYjUqddvIwzYJo4"
		const stringkS5CZjS = "3MCWB9xf8VHq8dUK4dJLBCaIutyP8Q76NVkjpK"
		const uintXOYCuWz = BigInt("220")
		const WolfStakingRewards2Ox93P = await WolfStakingRewards.new(stringA9mDaLV, stringkS5CZjS, uintXOYCuWz, {from: accounts[0]});
		await WolfStakingRewards2Ox93P.onlyRewardsDistribution.call({from: accounts[2]});
		const stringzfthUHj = await WolfStakingRewards2Ox93P.symbol.call({from: accounts[0]});
		const stringeUtNk6 = await WolfStakingRewards2Ox93P.symbol.call({from: accounts[1]});
	});
})