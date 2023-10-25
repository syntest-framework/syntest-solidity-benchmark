const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressJNMpThZ = accounts[2]
		const addressGeiC5Tl = accounts[3]
		const uintPmVba6O = BigInt("137")
		const uintgSkOpTm = BigInt("6")
		const MisesLegacyPool2Rpx8U = await MisesLegacyPool.new(addressJNMpThZ, addressGeiC5Tl, uintPmVba6O, uintgSkOpTm, {from: accounts[5]});
		const uintugNk7uv = BigInt("2002")
		const uintCNQHTtq = BigInt("687")
		const uint256mFnP2s7 = await MisesLegacyPool2Rpx8U.stake.call(uintugNk7uv, {from: accounts[5]});
		const uint256V3lio7f = await MisesLegacyPool2Rpx8U.notifyRewardAmount.call(uintCNQHTtq, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPool2Rpx8U.checkStart.call({from: accounts[2]});
		const uint256UqVxc1 = await MisesLegacyPool2Rpx8U.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(MisesLegacyPool2Rpx8U.stake.call(uintugNk7uv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressvVPf0W1 = accounts[0]
		const addressHyhOUn = accounts[1]
		const uintJq9IdDU = BigInt("2011")
		const uinteeMviCd = BigInt("1396")
		const MisesLegacyPoolFmAm1ef = await MisesLegacyPool.new(addressvVPf0W1, addressHyhOUn, uintJq9IdDU, uinteeMviCd, {from: "0x0000000000000000000000000000000000000001"});
		const addresstPWCH7C = accounts[1]
		const addressv8N60pz = await MisesLegacyPoolFmAm1ef.updateReward.call(addresstPWCH7C, {from: accounts[4]});
		await MisesLegacyPoolFmAm1ef.getReward.call({from: accounts[0]});
		const uint256HqzvLYP = await MisesLegacyPoolFmAm1ef.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MisesLegacyPool', async () => {
		const addressUCEGfA = accounts[4]
		const addressfPDeBAi = accounts[4]
		const uinttChu008 = BigInt("2039")
		const uintvX1Kkre = BigInt("1051")
		const MisesLegacyPoolWNbt8FO = await MisesLegacyPool.new(addressUCEGfA, addressfPDeBAi, uinttChu008, uintvX1Kkre, {from: accounts[0]});
		const uintpPeiTo = BigInt("109")
		const addressaMlIqN6 = accounts[1]
		const uintbkCr0z = BigInt("1523")
		await MisesLegacyPoolWNbt8FO.exit.call({from: accounts[2]});
		const uint256faJEKBS = await MisesLegacyPoolWNbt8FO.notifyRewardAmount.call(uintpPeiTo, {from: accounts[0]});
		const uint256pqvr83K = await MisesLegacyPoolWNbt8FO.earned.call(addressaMlIqN6, {from: accounts[2]});
		const uint256G6XnZgW = await MisesLegacyPoolWNbt8FO.stake.call(uintbkCr0z, {from: accounts[4]});
		const uint256GGzEUPb = await MisesLegacyPoolWNbt8FO.rewardPerToken.call({from: accounts[1]});

		await expect(MisesLegacyPoolWNbt8FO.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresszhPQ9W = accounts[3]
		const addressio5IuYz = accounts[1]
		const uintdwtUqMO = BigInt("354")
		const uintjUyKS8I = BigInt("1811")
		const MisesLegacyPoolzuedzVh = await MisesLegacyPool.new(addresszhPQ9W, addressio5IuYz, uintdwtUqMO, uintjUyKS8I, {from: accounts[3]});
		const uints500PSe = BigInt("464")
		const uintrPRjeii = BigInt("343")
		const uint256ZBmXUcb = await MisesLegacyPoolzuedzVh.withdraw.call(uints500PSe, {from: accounts[4]});
		await MisesLegacyPoolzuedzVh.exit.call({from: accounts[4]});
		const uint256vE9ci6j = await MisesLegacyPoolzuedzVh.rewardPerToken.call({from: accounts[4]});
		const uint256R4huETV = await MisesLegacyPoolzuedzVh.withdraw.call(uintrPRjeii, {from: accounts[1]});
		const uint256YYce4ZY = await MisesLegacyPoolzuedzVh.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint2561C8LZu = await MisesLegacyPoolzuedzVh.rewardPerToken.call({from: accounts[2]});

		await expect(MisesLegacyPoolzuedzVh.withdraw.call(uints500PSe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressz2iOlS = accounts[3]
		const addressFm5HCVq = accounts[3]
		const uintyaBUYiS = BigInt("980")
		const uintSGraOpg = BigInt("1970")
		const MisesLegacyPoolo6t3tq = await MisesLegacyPool.new(addressz2iOlS, addressFm5HCVq, uintyaBUYiS, uintSGraOpg, {from: accounts[3]});
		const addresscqrBYj = accounts[1]
		const uintprWcSvi = BigInt("179")
		const addressgmqWhCA = accounts[3]
		const addressu8sfl4 = await MisesLegacyPoolo6t3tq.updateReward.call(addresscqrBYj, {from: "0x0000000000000000000000000000000000000001"});
		await MisesLegacyPoolo6t3tq.exit.call({from: accounts[1]});
		const uint256JQ6uTMQ = await MisesLegacyPoolo6t3tq.withdraw.call(uintprWcSvi, {from: accounts[4]});
		const uint256z0e2hYb = await MisesLegacyPoolo6t3tq.earned.call(addressgmqWhCA, {from: accounts[3]});

		await expect(MisesLegacyPoolo6t3tq.updateReward.call(addresscqrBYj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressxiUn5RA = accounts[3]
		const addresspXkwq1c = accounts[3]
		const uintT9uXVhK = BigInt("980")
		const uintD1hGnnp = BigInt("1970")
		const MisesLegacyPoolo6t3tq = await MisesLegacyPool.new(addressxiUn5RA, addresspXkwq1c, uintT9uXVhK, uintD1hGnnp, {from: accounts[3]});
		const uintzRZToXS = BigInt("550")
		await MisesLegacyPoolo6t3tq.getReward.call({from: accounts[1]});
		await MisesLegacyPoolo6t3tq.getReward.call({from: accounts[2]});
		const uint256r2j8DBY = await MisesLegacyPoolo6t3tq.stake.call(uintzRZToXS, {from: accounts[2]});
		await MisesLegacyPoolo6t3tq.exit.call({from: accounts[1]});

		await expect(MisesLegacyPoolo6t3tq.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressbncrfAU = "0x0000000000000000000000000000000000000001"
		const addressB6lvc84 = accounts[2]
		const uintpHSxRW = BigInt("1300")
		const uintJgv6hTL = BigInt("550")
		const MisesLegacyPoolqbMeH9O = await MisesLegacyPool.new(addressbncrfAU, addressB6lvc84, uintpHSxRW, uintJgv6hTL, {from: accounts[4]});
		const uintja36epU = BigInt("987")
		const uint256EqyGRS4 = await MisesLegacyPoolqbMeH9O.notifyRewardAmount.call(uintja36epU, {from: accounts[0]});
		await MisesLegacyPoolqbMeH9O.checkStart.call({from: accounts[2]});
		await MisesLegacyPoolqbMeH9O.checkStart.call({from: accounts[3]});

		await expect(MisesLegacyPoolqbMeH9O.notifyRewardAmount.call(uintja36epU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})