const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingL8NtZzw = await EqFinanceStaking.new({from: accounts[2]});
		const addressygrjC6 = accounts[2]
//		const addressutZy1V = await EqFinanceStakingL8NtZzw.transferOwnership.call(addressygrjC6, {from: accounts[3]});
//		const uintauGdlkJ = await EqFinanceStakingL8NtZzw.getStakingAndDaoAmount.call({from: accounts[4]});
//		await EqFinanceStakingL8NtZzw.claimDivs.call({from: accounts[3]});

		await expect(EqFinanceStakingL8NtZzw.transferOwnership.call(addressygrjC6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingIOHwsaP = await EqFinanceStaking.new({from: accounts[4]});
		const addressnm2xR6O = accounts[4]
		const uintRvARW9B = await EqFinanceStakingIOHwsaP.getNumberOfHolders.call({from: accounts[3]});
//		const addressLZnG3PC = await EqFinanceStakingIOHwsaP.transferOwnership.call(addressnm2xR6O, {from: accounts[3]});
//		await EqFinanceStakingIOHwsaP.onlyOwner.call({from: accounts[3]});

		assert.equal(uintRvARW9B, BigInt("0"))
		await expect(EqFinanceStakingIOHwsaP.transferOwnership.call(addressnm2xR6O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingK351wo3 = await EqFinanceStaking.new({from: accounts[1]});
		const addressJ9fIgYq = accounts[4]
		const uintvTSJl3l = await EqFinanceStakingK351wo3.getStakingAndDaoAmount.call({from: accounts[3]});
		const uinteHH72z = await EqFinanceStakingK351wo3.getPendingDivs.call(addressJ9fIgYq, {from: accounts[1]});
		const uintdPTScb = await EqFinanceStakingK351wo3.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintdPTScb, BigInt("0"))
		assert.equal(uinteHH72z, BigInt("0"))
		assert.equal(uintvTSJl3l, BigInt("3000000000000000000000000"))
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpn1UxCr = await EqFinanceStaking.new({from: accounts[2]});
		const uintkLAvPbg = BigInt("1848")
//		await EqFinanceStakingpn1UxCr.claimDivs.call({from: accounts[5]});
//		const uintkLFXbCy = await EqFinanceStakingpn1UxCr.deposit.call(uintkLAvPbg, {from: accounts[2]});
//		const uintgPTkSd = await EqFinanceStakingpn1UxCr.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uints8ibVFN = await EqFinanceStakingpn1UxCr.getNumberOfHolders.call({from: accounts[5]});

		await expect(EqFinanceStakingpn1UxCr.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingcp9HrWJ = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvfvsU4k = accounts[1]
		const addressT9AhlwN = accounts[2]
		const addressbMWAjRB = await EqFinanceStakingcp9HrWJ.transferOwnership.call(addressvfvsU4k, {from: accounts[1]});
		await EqFinanceStakingcp9HrWJ.claimDivs.call({from: accounts[4]});
		const addressAThkmC7 = await EqFinanceStakingcp9HrWJ.transferOwnership.call(addressT9AhlwN, {from: accounts[1]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingU2ezRLk = await EqFinanceStaking.new({from: accounts[0]});
		const addressGNeEYWg = accounts[0]
		const uintGFC0SPo = BigInt("872")
		const uintt86zrJc = BigInt("1855")
//		await EqFinanceStakingU2ezRLk.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint0p3IsJ = await EqFinanceStakingU2ezRLk.getPendingDivs.call(addressGNeEYWg, {from: accounts[3]});
//		const uintrWHbuRj = await EqFinanceStakingU2ezRLk.withdraw.call(uintGFC0SPo, {from: accounts[3]});
//		const uintNgB5cNE = await EqFinanceStakingU2ezRLk.withdraw.call(uintt86zrJc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingU2ezRLk.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingFArGVnu = await EqFinanceStaking.new({from: accounts[5]});
		const uintBMp30H6 = BigInt("1067")
//		await EqFinanceStakingFArGVnu.onlyOwner.call({from: accounts[3]});
//		await EqFinanceStakingFArGVnu.claimDivs.call({from: accounts[0]});
//		const uintYbWO54 = await EqFinanceStakingFArGVnu.deposit.call(uintBMp30H6, {from: accounts[2]});

		await expect(EqFinanceStakingFArGVnu.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpn1UxCr = await EqFinanceStaking.new({from: accounts[2]});
		const addressVT5JkVB = accounts[4]
//		await EqFinanceStakingpn1UxCr.claimDivs.call({from: accounts[5]});
//		const uints8ibVFN = await EqFinanceStakingpn1UxCr.getNumberOfHolders.call({from: accounts[5]});
//		const addressGLIndQu = await EqFinanceStakingpn1UxCr.transferOwnership.call(addressVT5JkVB, {from: accounts[2]});

		await expect(EqFinanceStakingpn1UxCr.claimDivs.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingK351wo3 = await EqFinanceStaking.new({from: accounts[1]});
		const addressfISRiqi = accounts[5]
		const uintoN9kjxC = BigInt("64")
		const addressvr791G0 = accounts[3]
		const addressSax6XSn = accounts[5]
		const uinteHH72z = await EqFinanceStakingK351wo3.getPendingDivs.call(addressfISRiqi, {from: accounts[1]});
//		const addresscyDZN8Q = await EqFinanceStakingK351wo3.transferAnyERC20Tokens.call(addressSax6XSn, addressvr791G0, uintoN9kjxC, {from: accounts[1]});

		assert.equal(uinteHH72z, BigInt("0"))
		await expect(EqFinanceStakingK351wo3.transferAnyERC20Tokens.call(addressSax6XSn, addressvr791G0, uintoN9kjxC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})