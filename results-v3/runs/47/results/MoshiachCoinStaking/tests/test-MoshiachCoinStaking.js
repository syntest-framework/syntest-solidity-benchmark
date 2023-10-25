const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingZhbbEDa = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintm1MQkBv = BigInt("129")
		await MoshiachCoinStakingZhbbEDa.onlyOwner.call({from: accounts[5]});
		const uintdj9acGD = await MoshiachCoinStakingZhbbEDa.deposit.call(uintm1MQkBv, {from: accounts[5]});
		await MoshiachCoinStakingZhbbEDa.onlyOwner.call({from: accounts[0]});

		await expect(MoshiachCoinStakingZhbbEDa.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingOXtP8r = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressIbuQkHV = accounts[5]
		const addressMY3CfY6 = await MoshiachCoinStakingOXtP8r.transferOwnership.call(addressIbuQkHV, {from: accounts[3]});
		const uintbyUh6Ih = await MoshiachCoinStakingOXtP8r.getNumberOfHolders.call({from: accounts[3]});

		await expect(MoshiachCoinStakingOXtP8r.transferOwnership.call(addressIbuQkHV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingAG8S2B5 = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressmeGKLW8 = accounts[1]
		const addressMef2MJ = accounts[3]
		const addressLMmSIEF = accounts[2]
		const uintoxj6vE8 = BigInt("306")
		const addressYODmD4F = accounts[0]
		const addressi17RYkK = accounts[2]
		const uintRVZo8V0 = await MoshiachCoinStakingAG8S2B5.getPendingDivs.call(addressmeGKLW8, {from: accounts[2]});
		await MoshiachCoinStakingAG8S2B5.onlyOwner.call({from: accounts[1]});
		const uintfeZA4xl = await MoshiachCoinStakingAG8S2B5.getPendingDivs.call(addressMef2MJ, {from: accounts[1]});
		const uintKqNOMV = await MoshiachCoinStakingAG8S2B5.getPendingDivs.call(addressLMmSIEF, {from: accounts[0]});
		const addressUmtXtI5 = await MoshiachCoinStakingAG8S2B5.transferAnyERC20Tokens.call(addressi17RYkK, addressYODmD4F, uintoxj6vE8, {from: accounts[0]});

		assert.equal(uintRVZo8V0, BigInt("0"))
		await expect(MoshiachCoinStakingAG8S2B5.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingInKSjJg = await MoshiachCoinStaking.new({from: accounts[1]});
		const uinteuJRqJ1 = BigInt("1503")
		const uintkfINOsI = BigInt("1933")
		const addressEkoOmmb = "0x0000000000000000000000000000000000000001"
		const addressIV1Hxm = accounts[2]
		const uintQpO51gv = await MoshiachCoinStakingInKSjJg.deposit.call(uinteuJRqJ1, {from: accounts[3]});
		const uintD1RahxD = await MoshiachCoinStakingInKSjJg.getNumberOfHolders.call({from: accounts[3]});
		const addresszTcWJ69 = await MoshiachCoinStakingInKSjJg.transferAnyERC20Tokens.call(addressIV1Hxm, addressEkoOmmb, uintkfINOsI, {from: accounts[3]});

		await expect(MoshiachCoinStakingInKSjJg.deposit.call(uinteuJRqJ1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNeuaMhG = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintLBdROKF = BigInt("1326")
		const uintRZSFzw4 = await MoshiachCoinStakingNeuaMhG.getNumberOfHolders.call({from: accounts[2]});
		const uintpnE5Bs = await MoshiachCoinStakingNeuaMhG.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintREnPf2X = await MoshiachCoinStakingNeuaMhG.withdraw.call(uintLBdROKF, {from: accounts[0]});

		assert.equal(uintRZSFzw4, BigInt("0"))
		assert.equal(uintpnE5Bs, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingNeuaMhG.withdraw.call(uintLBdROKF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingxfwpa0q = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressGbBVIZU = accounts[3]
		const uintwELjVTv = BigInt("1870")
		const addressq44hhZ = await MoshiachCoinStakingxfwpa0q.transferOwnership.call(addressGbBVIZU, {from: accounts[2]});
		const uintsj7EsR = await MoshiachCoinStakingxfwpa0q.getNumberOfHolders.call({from: accounts[2]});
		const uintlFWqJ2v = await MoshiachCoinStakingxfwpa0q.withdraw.call(uintwELjVTv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintsj7EsR, BigInt("0"))
		await expect(MoshiachCoinStakingxfwpa0q.withdraw.call(uintwELjVTv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingYAL0Uj9 = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintU4GnOWk = await MoshiachCoinStakingYAL0Uj9.getNumberOfHolders.call({from: accounts[0]});
		await MoshiachCoinStakingYAL0Uj9.claimDivs.call({from: accounts[0]});
		await MoshiachCoinStakingYAL0Uj9.claimDivs.call({from: accounts[5]});
		const uinthu1pXAF = await MoshiachCoinStakingYAL0Uj9.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uintb0yzo8 = await MoshiachCoinStakingYAL0Uj9.getStakingAndDaoAmount.call({from: accounts[0]});

		assert.equal(uintU4GnOWk, BigInt("0"))
		await expect(MoshiachCoinStakingYAL0Uj9.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingmikJVoM = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdCrDeui = BigInt("1766")
		await MoshiachCoinStakingmikJVoM.claimDivs.call({from: accounts[5]});
		const uinti26zENd = await MoshiachCoinStakingmikJVoM.withdraw.call(uintdCrDeui, {from: accounts[0]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingOXtP8r = await MoshiachCoinStaking.new({from: accounts[4]});
		const uints17zBTk = BigInt("205")
		const addressm1969sp = accounts[4]
		const addressSvrIDS5 = accounts[5]
		const addresskF12RZZ = accounts[1]
		const addressLTFvvUt = await MoshiachCoinStakingOXtP8r.transferAnyERC20Tokens.call(addressSvrIDS5, addressm1969sp, uints17zBTk, {from: accounts[4]});
		const uintbyUh6Ih = await MoshiachCoinStakingOXtP8r.getNumberOfHolders.call({from: accounts[3]});
		const uintwmsM0uW = await MoshiachCoinStakingOXtP8r.getPendingDivs.call(addresskF12RZZ, {from: accounts[1]});
		await MoshiachCoinStakingOXtP8r.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingOXtP8r.transferAnyERC20Tokens.call(addressSvrIDS5, addressm1969sp, uints17zBTk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNeuaMhG = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintdVFYA2w = BigInt("0")
		const uintqw5Cdp = BigInt("1326")
		const addressYctbdAv = accounts[0]
		await MoshiachCoinStakingNeuaMhG.claimDivs.call({from: accounts[5]});
		const uintvD5lXDi = await MoshiachCoinStakingNeuaMhG.deposit.call(uintdVFYA2w, {from: accounts[0]});
		const uintpnE5Bs = await MoshiachCoinStakingNeuaMhG.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintOqlw450 = await MoshiachCoinStakingNeuaMhG.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintSvvp031 = await MoshiachCoinStakingNeuaMhG.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintO7hE5K6 = await MoshiachCoinStakingNeuaMhG.getStakingAndDaoAmount.call({from: accounts[2]});
		await MoshiachCoinStakingNeuaMhG.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintjBGf0Nz = await MoshiachCoinStakingNeuaMhG.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintREnPf2X = await MoshiachCoinStakingNeuaMhG.withdraw.call(uintqw5Cdp, {from: accounts[0]});
		const addressfcprxKV = await MoshiachCoinStakingNeuaMhG.transferOwnership.call(addressYctbdAv, {from: accounts[2]});

		await expect(MoshiachCoinStakingNeuaMhG.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})