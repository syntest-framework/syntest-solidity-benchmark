const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakinguBUKsFF = await SLTDStaking.new({from: accounts[2]});
		const uintOMOhld = BigInt("1277")
		const addressIZEL9OM = accounts[1]
		const addressDh6nLF0 = accounts[3]
//		const uint256yyfSXHg = await SLTDStakinguBUKsFF.withdraw.call(uintOMOhld, {from: accounts[3]});
//		const uint256VsA36YB = await SLTDStakinguBUKsFF.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SLTDStakinguBUKsFF.onlyRewardDistribution.call({from: accounts[3]});
//		const addressmi1qRs = await SLTDStakinguBUKsFF.setSLTD.call(addressDh6nLF0, addressIZEL9OM, {from: accounts[1]});

		await expect(SLTDStakinguBUKsFF.withdraw.call(uintOMOhld, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingc5acgTU = await SLTDStaking.new({from: accounts[4]});
		const addressURJ2NOS = "0x0000000000000000000000000000000000000001"
		const uintkWBXPuI = BigInt("1985")
		const uint256T10YgEV = await SLTDStakingc5acgTU.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ABwgEre = await SLTDStakingc5acgTU.balanceOf.call(addressURJ2NOS, {from: accounts[1]});
//		const uint256YskQr1F = await SLTDStakingc5acgTU.stake.call(uintkWBXPuI, {from: accounts[0]});

		assert.equal(uint256ABwgEre, BigInt("0"))
		assert.equal(uint256T10YgEV, BigInt("0"))
		await expect(SLTDStakingc5acgTU.stake.call(uintkWBXPuI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinggMnRLi = await SLTDStaking.new({from: accounts[5]});
		const uinthGGxqmQ = BigInt("1282")
//		await SLTDStakinggMnRLi.onlyRewardDistribution.call({from: accounts[3]});
//		await SLTDStakinggMnRLi.exit.call({from: accounts[2]});
//		const uint256BOAsyTm = await SLTDStakinggMnRLi.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zBoaZAa = await SLTDStakinggMnRLi.stake.call(uinthGGxqmQ, {from: accounts[0]});

		await expect(SLTDStakinggMnRLi.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWTX2KDH = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxnXhhbA = BigInt("1309")
		const uint256GCEYck3 = await SLTDStakingWTX2KDH.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256ijMtGcI = await SLTDStakingWTX2KDH.totalSupply.call({from: accounts[4]});
		const uint256e1zmJFS = await SLTDStakingWTX2KDH.stake.call(uintxnXhhbA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingAEovNNA = await SLTDStaking.new({from: accounts[2]});
		const addressaj506sf = accounts[2]
		const addressnw9qiyN = accounts[2]
		const uint256xHic2uP = await SLTDStakingAEovNNA.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addresscIZv1B1 = await SLTDStakingAEovNNA.transferOwnership.call(addressaj506sf, {from: accounts[3]});
//		const uint256Qw1VMgS = await SLTDStakingAEovNNA.totalSupply.call({from: accounts[3]});
//		const uint256hSNIJbl = await SLTDStakingAEovNNA.balanceOf.call(addressnw9qiyN, {from: accounts[4]});

		assert.equal(uint256xHic2uP, BigInt("0"))
		await expect(SLTDStakingAEovNNA.transferOwnership.call(addressaj506sf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnKcDRBb = await SLTDStaking.new({from: accounts[1]});
		const addressiOIJFO2 = accounts[4]
		const addressAN4FciU = accounts[4]
		const addressSg4Y1Av = accounts[4]
		const uintICkI8Go = BigInt("52")
		const addressgGkaX3 = accounts[0]
		const addressgAw0b5H = accounts[2]
		const uint256NCa8zoR = await SLTDStakingnKcDRBb.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressURKCH2N = await SLTDStakingnKcDRBb.owner.call({from: accounts[1]});
//		const addressA8bYPxD = await SLTDStakingnKcDRBb.updateReward.call(addressiOIJFO2, {from: accounts[1]});
//		const addressjeS6xrE = await SLTDStakingnKcDRBb.setSLTD.call(addressSg4Y1Av, addressAN4FciU, {from: accounts[5]});
//		const uint256gPNj0HW = await SLTDStakingnKcDRBb.withdraw.call(uintICkI8Go, {from: accounts[2]});
//		const addressrnTSxTh = await SLTDStakingnKcDRBb.setSLTD.call(addressgAw0b5H, addressgGkaX3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressURKCH2N, 0xa7CeBBa0c636EB6A9C389C1DB1283F7C2bE4e1bF)
		assert.equal(uint256NCa8zoR, BigInt("0"))
		await expect(SLTDStakingnKcDRBb.updateReward.call(addressiOIJFO2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnKcDRBb = await SLTDStaking.new({from: accounts[1]});
		const addressQCIlqe8 = accounts[1]
		const addressj68kDg = accounts[2]
		const uint256NCa8zoR = await SLTDStakingnKcDRBb.lastTimeRewardApplicable.call({from: accounts[5]});
//		const addressrnTSxTh = await SLTDStakingnKcDRBb.setSLTD.call(addressj68kDg, addressQCIlqe8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256NCa8zoR, BigInt("0"))
		await expect(SLTDStakingnKcDRBb.setSLTD.call(addressj68kDg, addressQCIlqe8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnKcDRBb = await SLTDStaking.new({from: accounts[1]});
		const addressY52w4m9 = accounts[1]
		const addressl8C7Sh = accounts[0]
		const uintOSNS4pd = BigInt("1989")
		const addressO0i9tCu = accounts[0]
		const addressJ7NiA7F = accounts[2]
//		await SLTDStakingnKcDRBb.getReward.call({from: accounts[2]});
//		await SLTDStakingnKcDRBb.onlyOwner.call({from: accounts[3]});
//		const addressqv6hBdH = await SLTDStakingnKcDRBb.setSLTD.call(addressl8C7Sh, addressY52w4m9, {from: accounts[2]});
//		const uint256gPNj0HW = await SLTDStakingnKcDRBb.withdraw.call(uintOSNS4pd, {from: accounts[2]});
//		const addressrnTSxTh = await SLTDStakingnKcDRBb.setSLTD.call(addressJ7NiA7F, addressO0i9tCu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingnKcDRBb.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnKcDRBb = await SLTDStaking.new({from: accounts[1]});
		const addressNqNaPo4 = accounts[0]
		const addresskiWvj7J = accounts[2]
//		await SLTDStakingnKcDRBb.exit.call({from: accounts[4]});
//		const addressrnTSxTh = await SLTDStakingnKcDRBb.setSLTD.call(addresskiWvj7J, addressNqNaPo4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingnKcDRBb.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnKcDRBb = await SLTDStaking.new({from: accounts[1]});
		const addressfn68Zi7 = accounts[1]
		const addressur3pn9z = accounts[0]
		const uinty6QVGSz = BigInt("1268")
		const uint9FiXkQ = BigInt("1989")
		const addresspy49wTy = accounts[0]
		const addressKF2bDok = accounts[3]
//		await SLTDStakingnKcDRBb.renounceOwnership.call({from: accounts[1]});
//		await SLTDStakingnKcDRBb.getReward.call({from: accounts[2]});
//		await SLTDStakingnKcDRBb.onlyOwner.call({from: accounts[3]});
//		const addressqv6hBdH = await SLTDStakingnKcDRBb.setSLTD.call(addressur3pn9z, addressfn68Zi7, {from: accounts[2]});
//		const uint256rJS1aBD = await SLTDStakingnKcDRBb.stake.call(uinty6QVGSz, {from: accounts[4]});
//		const uint256gPNj0HW = await SLTDStakingnKcDRBb.withdraw.call(uint9FiXkQ, {from: accounts[2]});
//		const addressrnTSxTh = await SLTDStakingnKcDRBb.setSLTD.call(addressKF2bDok, addresspy49wTy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingnKcDRBb.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnKcDRBb = await SLTDStaking.new({from: accounts[1]});
		const addressclR0cU = accounts[0]
		const addressMWc0E8I = accounts[0]
		const addressa8mvDaQ = accounts[3]
		const addressPLil24 = await SLTDStakingnKcDRBb.setRewardDistribution.call(addressclR0cU, {from: accounts[1]});
//		const addressrnTSxTh = await SLTDStakingnKcDRBb.setSLTD.call(addressa8mvDaQ, addressMWc0E8I, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingnKcDRBb.setSLTD.call(addressa8mvDaQ, addressMWc0E8I, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnKcDRBb = await SLTDStaking.new({from: accounts[1]});
		const addressqntFmT = accounts[1]
		const uintlQZflt0 = BigInt("640")
		const addresstoV0ZMq = await SLTDStakingnKcDRBb.transferOwnership.call(addressqntFmT, {from: accounts[1]});
//		await SLTDStakingnKcDRBb.getReward.call({from: accounts[0]});
//		const uint256vxD98sm = await SLTDStakingnKcDRBb.withdraw.call(uintlQZflt0, {from: accounts[2]});

		await expect(SLTDStakingnKcDRBb.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})