const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addresszcuUxbD = "0x0000000000000000000000000000000000000001"
		const addresshFGRAqv = accounts[2]
		const addressmJFll0 = accounts[4]
		const MarsStakingRewardsfRLKYIu = await MarsStakingRewards.new(addresszcuUxbD, addresshFGRAqv, addressmJFll0, {from: accounts[4]});
		const addressjr6Sak = accounts[4]
		const address6dy2nL = accounts[2]
		const boolsbyxtsG = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[1]});
		const uint256PxnbO1q = await MarsStakingRewardsfRLKYIu.earned.call(addressjr6Sak, {from: accounts[0]});
		const uint256VdJzgXJ = await MarsStakingRewardsfRLKYIu.rewardPerToken.call({from: accounts[2]});
		const uint256HlpfWg0 = await MarsStakingRewardsfRLKYIu.balanceOf.call(address6dy2nL, {from: accounts[0]});
		await MarsStakingRewardsfRLKYIu.getReward.call({from: accounts[1]});

		assert.equal(boolsbyxtsG, false)
		assert.equal(uint256HlpfWg0, BigInt("0"))
		assert.equal(uint256PxnbO1q, BigInt("0"))
		assert.equal(uint256VdJzgXJ, BigInt("0"))
		await expect(MarsStakingRewardsfRLKYIu.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrVHcovJ = accounts[4]
		const addressFR1PAh = accounts[4]
		const addressw5pdc8G = accounts[4]
		const MarsStakingRewardsv8N7RPg = await MarsStakingRewards.new(addressrVHcovJ, addressFR1PAh, addressw5pdc8G, {from: "0x0000000000000000000000000000000000000001"});
		const addressrrLJlaP = accounts[2]
		const uint256oo7WsWA = await MarsStakingRewardsv8N7RPg.earned.call(addressrrLJlaP, {from: accounts[0]});
		const boolkOTyXlH = await MarsStakingRewardsv8N7RPg.isOwner.call({from: accounts[3]});
		const boollguKfzg = await MarsStakingRewardsv8N7RPg.isOwner.call({from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressUEUqPn = accounts[4]
		const addressvG9P03v = accounts[1]
		const addressZW4o89 = accounts[2]
		const MarsStakingRewardseBqTbcB = await MarsStakingRewards.new(addressUEUqPn, addressvG9P03v, addressZW4o89, {from: accounts[0]});
		const addressBZ4PM5G = accounts[4]
		const addressTtvu3DQ = await MarsStakingRewardseBqTbcB.setRewardsDistribution.call(addressBZ4PM5G, {from: "0x0000000000000000000000000000000000000001"});
		const uint256S7NLmiz = await MarsStakingRewardseBqTbcB.totalSupply.call({from: accounts[5]});
		const booliTauRz8 = await MarsStakingRewardseBqTbcB.isOwner.call({from: accounts[0]});

		await expect(MarsStakingRewardseBqTbcB.setRewardsDistribution.call(addressBZ4PM5G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMxVThj = accounts[5]
		const addresspsoG81g = accounts[2]
		const addressrae8rKo = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsfDeQBIx = await MarsStakingRewards.new(addressMxVThj, addresspsoG81g, addressrae8rKo, {from: accounts[2]});
		const uintUEa7hO8 = BigInt("1526")
		const addressrEgqPu = accounts[3]
		const uint256FOLy98y = await MarsStakingRewardsfDeQBIx.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressFM6l7eA = await MarsStakingRewardsfDeQBIx.inCaseTokensGetStuck.call(addressrEgqPu, uintUEa7hO8, {from: accounts[4]});
		const uint256T3PsKD = await MarsStakingRewardsfDeQBIx.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256FOLy98y, BigInt("0"))
		await expect(MarsStakingRewardsfDeQBIx.inCaseTokensGetStuck.call(addressrEgqPu, uintUEa7hO8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXgm5Do = accounts[1]
		const addresslD9927r = accounts[0]
		const addressmg4R1p = accounts[1]
		const MarsStakingRewardsEyKLX82 = await MarsStakingRewards.new(addressXgm5Do, addresslD9927r, addressmg4R1p, {from: accounts[2]});
		const addressJ4By5IY = accounts[3]
		const addresspDnsJey = accounts[0]
		const uintBcO8V3i = BigInt("1476")
		await MarsStakingRewardsEyKLX82.onlyOwner.call({from: accounts[4]});
		const addresszfNSRF9 = await MarsStakingRewardsEyKLX82.updateReward.call(addressJ4By5IY, {from: accounts[4]});
		const addressdSSYFNw = await MarsStakingRewardsEyKLX82.updateReward.call(addresspDnsJey, {from: accounts[0]});
		const uint256PhGbmtQ = await MarsStakingRewardsEyKLX82.stake.call(uintBcO8V3i, {from: accounts[4]});

		await expect(MarsStakingRewardsEyKLX82.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfpVKVH2 = accounts[5]
		const addressccQTurg = accounts[2]
		const addressToKPhxk = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsfDeQBIx = await MarsStakingRewards.new(addressfpVKVH2, addressccQTurg, addressToKPhxk, {from: accounts[2]});
		const uintJotqR0G = BigInt("1526")
		const addressNzPkZKV = accounts[3]
		const uint256FOLy98y = await MarsStakingRewardsfDeQBIx.lastTimeRewardApplicable.call({from: accounts[5]});
		await MarsStakingRewardsfDeQBIx.exit.call({from: accounts[2]});
		const addressFM6l7eA = await MarsStakingRewardsfDeQBIx.inCaseTokensGetStuck.call(addressNzPkZKV, uintJotqR0G, {from: accounts[4]});
		const uint256T3PsKD = await MarsStakingRewardsfDeQBIx.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256FOLy98y, BigInt("0"))
		await expect(MarsStakingRewardsfDeQBIx.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresswIs2QRH = accounts[2]
		const addressARouHej = accounts[4]
		const addressNyQun2X = accounts[4]
		const MarsStakingRewardslLAB76x = await MarsStakingRewards.new(addresswIs2QRH, addressARouHej, addressNyQun2X, {from: accounts[4]});
		const addressu8rPADM = accounts[1]
		const boolGh0IgDM = await MarsStakingRewardslLAB76x.isOwner.call({from: accounts[1]});
		const uint256KVa8wE = await MarsStakingRewardslLAB76x.balanceOf.call(addressu8rPADM, {from: accounts[0]});
		const addressLKHInD2 = await MarsStakingRewardslLAB76x.owner.call({from: accounts[2]});
		await MarsStakingRewardslLAB76x.nonReentrant.call({from: accounts[4]});
		const uint256Xwh2has = await MarsStakingRewardslLAB76x.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(addressLKHInD2, 0x36627A2fE05BF6bC45dae78AdEdab45944EDD89C)
		assert.equal(boolGh0IgDM, false)
		assert.equal(uint256KVa8wE, BigInt("0"))
		await expect(MarsStakingRewardslLAB76x.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressBxCsDdb = accounts[5]
		const addressJKapAT1 = accounts[2]
		const addressRKPpcM3 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsfDeQBIx = await MarsStakingRewards.new(addressBxCsDdb, addressJKapAT1, addressRKPpcM3, {from: accounts[2]});
		const uintyUvKKeE = BigInt("1547")
		const addressnRBJzSN = accounts[4]
		const uint256kpUg6AL = await MarsStakingRewardsfDeQBIx.totalSupply.call({from: accounts[2]});
		const addressFM6l7eA = await MarsStakingRewardsfDeQBIx.inCaseTokensGetStuck.call(addressnRBJzSN, uintyUvKKeE, {from: accounts[4]});

		assert.equal(uint256kpUg6AL, BigInt("0"))
		await expect(MarsStakingRewardsfDeQBIx.inCaseTokensGetStuck.call(addressnRBJzSN, uintyUvKKeE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJ6sBcoG = "0x0000000000000000000000000000000000000001"
		const addressGrqfiNa = accounts[2]
		const addressYHajXzr = accounts[4]
		const MarsStakingRewardsfRLKYIu = await MarsStakingRewards.new(addressJ6sBcoG, addressGrqfiNa, addressYHajXzr, {from: accounts[4]});
		const addresshLJA4Oa = accounts[4]
		const uintLQIrwJM = BigInt("1633")
		const uintCSBU4UC = BigInt("277")
		const addressLDx0648 = accounts[3]
		const boolsbyxtsG = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[1]});
		const uint256PxnbO1q = await MarsStakingRewardsfRLKYIu.earned.call(addresshLJA4Oa, {from: accounts[0]});
		const uint256JfjYACC = await MarsStakingRewardsfRLKYIu.notifyRewardAmount.call(uintCSBU4UC, uintLQIrwJM, {from: accounts[3]});
		const uint256VdJzgXJ = await MarsStakingRewardsfRLKYIu.rewardPerToken.call({from: accounts[2]});
		const uint256HlpfWg0 = await MarsStakingRewardsfRLKYIu.balanceOf.call(addressLDx0648, {from: accounts[0]});
		await MarsStakingRewardsfRLKYIu.getReward.call({from: accounts[1]});

		assert.equal(boolsbyxtsG, false)
		assert.equal(uint256PxnbO1q, BigInt("0"))
		await expect(MarsStakingRewardsfRLKYIu.notifyRewardAmount.call(uintCSBU4UC, uintLQIrwJM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresseL0jrD = "0x0000000000000000000000000000000000000001"
		const addressXAVWsQM = accounts[2]
		const addressNxtUOSs = accounts[4]
		const MarsStakingRewardsfRLKYIu = await MarsStakingRewards.new(addresseL0jrD, addressXAVWsQM, addressNxtUOSs, {from: accounts[4]});
		const addressfwqmtT = accounts[4]
		const address6T3EyZ = accounts[4]
		const boolsbyxtsG = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[1]});
		const uint256PxnbO1q = await MarsStakingRewardsfRLKYIu.earned.call(addressfwqmtT, {from: accounts[0]});
		const uint256VdJzgXJ = await MarsStakingRewardsfRLKYIu.rewardPerToken.call({from: accounts[2]});
		const boolvFdOJFB = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[1]});
		const uint256HlpfWg0 = await MarsStakingRewardsfRLKYIu.balanceOf.call(address6T3EyZ, {from: accounts[0]});
		await MarsStakingRewardsfRLKYIu.renounceOwnership.call({from: accounts[4]});
		await MarsStakingRewardsfRLKYIu.getReward.call({from: accounts[1]});

		assert.equal(boolsbyxtsG, false)
		assert.equal(boolvFdOJFB, false)
		assert.equal(uint256HlpfWg0, BigInt("0"))
		assert.equal(uint256PxnbO1q, BigInt("0"))
		assert.equal(uint256VdJzgXJ, BigInt("0"))
		await expect(MarsStakingRewardsfRLKYIu.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressntTg5UU = accounts[0]
		const addressGXkz9Pk = "0x0000000000000000000000000000000000000001"
		const addressmQZejh7 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsSNND52 = await MarsStakingRewards.new(addressntTg5UU, addressGXkz9Pk, addressmQZejh7, {from: accounts[4]});
		const addressHqeTTiK = accounts[1]
		const addressMeU6sj = await MarsStakingRewardsSNND52.transferOwnership.call(addressHqeTTiK, {from: accounts[4]});
		await MarsStakingRewardsSNND52.renounceOwnership.call({from: accounts[5]});
		const uint256Q3VzYS = await MarsStakingRewardsSNND52.totalSupply.call({from: accounts[1]});
		await MarsStakingRewardsSNND52.getReward.call({from: accounts[1]});
		await MarsStakingRewardsSNND52.onlyOwner.call({from: accounts[0]});

		await expect(MarsStakingRewardsSNND52.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqeY2Ipm = "0x0000000000000000000000000000000000000001"
		const addresszA260Ur = accounts[2]
		const addressnrIO7X0 = accounts[4]
		const MarsStakingRewardsfRLKYIu = await MarsStakingRewards.new(addressqeY2Ipm, addresszA260Ur, addressnrIO7X0, {from: accounts[4]});
		const addressSFh9aWP = accounts[4]
		const addressSnjtilV = accounts[2]
		const addressZFPbs5N = accounts[1]
		const uint256Z0TYuhh = await MarsStakingRewardsfRLKYIu.getRewardForDuration.call({from: accounts[3]});
		const boolsbyxtsG = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[1]});
		const boolgJE55hB = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[0]});
		const uint256PxnbO1q = await MarsStakingRewardsfRLKYIu.earned.call(addressSFh9aWP, {from: accounts[0]});
		const uint256VdJzgXJ = await MarsStakingRewardsfRLKYIu.rewardPerToken.call({from: accounts[2]});
		const uint256HlpfWg0 = await MarsStakingRewardsfRLKYIu.balanceOf.call(addressSnjtilV, {from: accounts[0]});
		const addressjHYSbFB = await MarsStakingRewardsfRLKYIu.updateReward.call(addressZFPbs5N, {from: accounts[0]});
		await MarsStakingRewardsfRLKYIu.getReward.call({from: accounts[1]});

		assert.equal(boolgJE55hB, false)
		assert.equal(boolsbyxtsG, false)
		assert.equal(uint256HlpfWg0, BigInt("0"))
		assert.equal(uint256PxnbO1q, BigInt("0"))
		assert.equal(uint256VdJzgXJ, BigInt("0"))
		assert.equal(uint256Z0TYuhh, BigInt("0"))
		await expect(MarsStakingRewardsfRLKYIu.updateReward.call(addressZFPbs5N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address0OzPyF = accounts[0]
		const addresshTOKud0 = accounts[1]
		const addressvITfI9X = accounts[0]
		const MarsStakingRewardsdcLA6AO = await MarsStakingRewards.new(address0OzPyF, addresshTOKud0, addressvITfI9X, {from: accounts[2]});
		const uintcBIzsJn = BigInt("1297")
		const uinthLyBBKI = BigInt("541")
		const uintVCibTRP = BigInt("1968")
		const bytesG8490g = "0x091a0e081d161801180420070c131d201f1c1e0502130d170d0f1c170e010117"
		const bytexrGFRPv = "0x07190d1d0e05071808031f1e1020110309021d181f010812001e0614141d0218"
		const uintdOhIJaa = BigInt("234")
		const uintFzlg3I = BigInt("1401")
		const uinte9MvgqY = BigInt("1581")
		const uint256De9Pkbm = await MarsStakingRewardsdcLA6AO.notifyRewardAmount.call(uinthLyBBKI, uintcBIzsJn, {from: accounts[0]});
		const uint256cb8Zinq = await MarsStakingRewardsdcLA6AO.getRewardForDuration.call({from: accounts[5]});
		const uint256puYGcF = await MarsStakingRewardsdcLA6AO.withdraw.call(uintVCibTRP, {from: accounts[1]});
		const uint256ObFMXt = await MarsStakingRewardsdcLA6AO.stakeWithPermit.call(uinte9MvgqY, uintFzlg3I, uintdOhIJaa, bytexrGFRPv, bytesG8490g, {from: accounts[4]});

		await expect(MarsStakingRewardsdcLA6AO.notifyRewardAmount.call(uinthLyBBKI, uintcBIzsJn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressAZKaU7q = "0x0000000000000000000000000000000000000001"
		const addressEQwGP9E = accounts[2]
		const addressfPgmbGx = accounts[4]
		const MarsStakingRewardsfRLKYIu = await MarsStakingRewards.new(addressAZKaU7q, addressEQwGP9E, addressfPgmbGx, {from: accounts[4]});
		const addressJN6bU3K = accounts[4]
		const uintzeqBpC = BigInt("1248")
		const addressZqQwRRy = accounts[1]
		const addressjx4htJ = accounts[3]
		const boolsbyxtsG = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[1]});
		const uint256PxnbO1q = await MarsStakingRewardsfRLKYIu.earned.call(addressJN6bU3K, {from: accounts[0]});
		const addressKFQKc66 = await MarsStakingRewardsfRLKYIu.inCaseTokensGetStuck.call(addressZqQwRRy, uintzeqBpC, {from: accounts[4]});
		const uint256VdJzgXJ = await MarsStakingRewardsfRLKYIu.rewardPerToken.call({from: accounts[2]});
		const uint256HlpfWg0 = await MarsStakingRewardsfRLKYIu.balanceOf.call(addressjx4htJ, {from: accounts[0]});
		await MarsStakingRewardsfRLKYIu.getReward.call({from: accounts[1]});

		assert.equal(boolsbyxtsG, false)
		assert.equal(uint256PxnbO1q, BigInt("0"))
		await expect(MarsStakingRewardsfRLKYIu.inCaseTokensGetStuck.call(addressZqQwRRy, uintzeqBpC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresszRza2Yr = "0x0000000000000000000000000000000000000001"
		const addressWNGRqzR = accounts[2]
		const addressZVs0XQZ = accounts[4]
		const MarsStakingRewardsfRLKYIu = await MarsStakingRewards.new(addresszRza2Yr, addressWNGRqzR, addressZVs0XQZ, {from: accounts[4]});
		const addressG2xBWAG = accounts[4]
		const uintmYaShdq = BigInt("1248")
		const addressgza0qso = accounts[4]
		const addresssi0Oeo = "0x0000000000000000000000000000000000000001"
		const addresso1M9wXa = accounts[1]
		const uintmGti08 = BigInt("1076")
		const boolsbyxtsG = await MarsStakingRewardsfRLKYIu.isOwner.call({from: accounts[1]});
		const uint256X2qVctL = await MarsStakingRewardsfRLKYIu.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256PxnbO1q = await MarsStakingRewardsfRLKYIu.earned.call(addressG2xBWAG, {from: accounts[0]});
		const addressKFQKc66 = await MarsStakingRewardsfRLKYIu.inCaseTokensGetStuck.call(addressgza0qso, uintmYaShdq, {from: accounts[4]});
		const uint256PA6i7HA = await MarsStakingRewardsfRLKYIu.rewardPerToken.call({from: accounts[4]});
		const uint256ZMiSmbT = await MarsStakingRewardsfRLKYIu.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256VdJzgXJ = await MarsStakingRewardsfRLKYIu.rewardPerToken.call({from: accounts[2]});
		await MarsStakingRewardsfRLKYIu.nonReentrant.call({from: accounts[5]});
		await MarsStakingRewardsfRLKYIu.onlyOwner.call({from: accounts[3]});
		const uint256HlpfWg0 = await MarsStakingRewardsfRLKYIu.balanceOf.call(addresssi0Oeo, {from: accounts[0]});
		const addressZArNznq = await MarsStakingRewardsfRLKYIu.updateReward.call(addresso1M9wXa, {from: accounts[3]});
		const uint256yPRPaU = await MarsStakingRewardsfRLKYIu.stake.call(uintmGti08, {from: accounts[1]});
		await MarsStakingRewardsfRLKYIu.getReward.call({from: accounts[1]});

		assert.equal(boolsbyxtsG, false)
		assert.equal(uint256PxnbO1q, BigInt("0"))
		assert.equal(uint256X2qVctL, BigInt("0"))
		await expect(MarsStakingRewardsfRLKYIu.inCaseTokensGetStuck.call(addressgza0qso, uintmYaShdq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressEuToaA6 = "0x0000000000000000000000000000000000000001"
		const addressZJQhP5v = accounts[0]
		const addressm5oBJ2o = accounts[0]
		const MarsStakingRewardstGTnjtj = await MarsStakingRewards.new(addressEuToaA6, addressZJQhP5v, addressm5oBJ2o, {from: accounts[2]});
		const addressX8Hofmb = accounts[2]
		const addressuMLe5vm = await MarsStakingRewardstGTnjtj.setRewardsDistribution.call(addressX8Hofmb, {from: accounts[2]});
		const uint256UeIoRuh = await MarsStakingRewardstGTnjtj.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pOQJ8lQ = await MarsStakingRewardstGTnjtj.totalSupply.call({from: accounts[1]});
		const uint256F72h3DA = await MarsStakingRewardstGTnjtj.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardstGTnjtj.exit.call({from: accounts[2]});

		assert.equal(uint256F72h3DA, BigInt("0"))
		assert.equal(uint256UeIoRuh, BigInt("0"))
		assert.equal(uint256pOQJ8lQ, BigInt("0"))
		await expect(MarsStakingRewardstGTnjtj.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})