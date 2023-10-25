const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingOErP4GT = await EqFinanceStaking.new({from: accounts[4]});
		const uintt20Nx9m = BigInt("2013")
		const addressdu8dKJ3 = accounts[3]
		const addressjHSCYen = accounts[1]
		const addressfIJM0W = accounts[0]
//		const addressurufaQ3 = await EqFinanceStakingOErP4GT.transferAnyERC20Tokens.call(addressjHSCYen, addressdu8dKJ3, uintt20Nx9m, {from: "0x0000000000000000000000000000000000000001"});
//		const addresse8WZPS8 = await EqFinanceStakingOErP4GT.transferOwnership.call(addressfIJM0W, {from: accounts[3]});
//		const uintvQBQyea = await EqFinanceStakingOErP4GT.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintdMsDWFB = await EqFinanceStakingOErP4GT.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintdayrjV1 = await EqFinanceStakingOErP4GT.getNumberOfHolders.call({from: accounts[4]});

		await expect(EqFinanceStakingOErP4GT.transferAnyERC20Tokens.call(addressjHSCYen, addressdu8dKJ3, uintt20Nx9m, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingJlUj2n = await EqFinanceStaking.new({from: accounts[3]});
		const addressEspunoe = accounts[0]
		const addressI3CJJw1 = accounts[1]
		const addressqL4W7lR = accounts[2]
		const uintESXVCKL = await EqFinanceStakingJlUj2n.getPendingDivs.call(addressEspunoe, {from: accounts[0]});
		const uintZ0dK65R = await EqFinanceStakingJlUj2n.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintKG1YXHh = await EqFinanceStakingJlUj2n.getPendingDivs.call(addressI3CJJw1, {from: accounts[3]});
//		const addressHUTYzkC = await EqFinanceStakingJlUj2n.transferOwnership.call(addressqL4W7lR, {from: accounts[0]});

		assert.equal(uintESXVCKL, BigInt("0"))
		assert.equal(uintKG1YXHh, BigInt("0"))
		assert.equal(uintZ0dK65R, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingJlUj2n.transferOwnership.call(addressqL4W7lR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingH4a6Keg = await EqFinanceStaking.new({from: accounts[3]});
		const addressrLMuDL = accounts[3]
		const address2wTCgM = accounts[2]
		const uintadg8jw = BigInt("1641")
		const uintCv8e4ss = await EqFinanceStakingH4a6Keg.getNumberOfHolders.call({from: accounts[4]});
		const uintixsw5Sb = await EqFinanceStakingH4a6Keg.getPendingDivs.call(addressrLMuDL, {from: "0x0000000000000000000000000000000000000001"});
		const uintXbvOmug = await EqFinanceStakingH4a6Keg.getPendingDivs.call(address2wTCgM, {from: accounts[1]});
//		const uintUbEg4Hg = await EqFinanceStakingH4a6Keg.withdraw.call(uintadg8jw, {from: accounts[3]});

		assert.equal(uintCv8e4ss, BigInt("0"))
		assert.equal(uintXbvOmug, BigInt("0"))
		assert.equal(uintixsw5Sb, BigInt("0"))
		await expect(EqFinanceStakingH4a6Keg.withdraw.call(uintadg8jw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinglU8OCVR = await EqFinanceStaking.new({from: accounts[2]});
		const uintIKXCNL3 = BigInt("714")
		const addressdXhAOO = "0x0000000000000000000000000000000000000001"
		const uinthRisaCp = BigInt("803")
//		await EqFinanceStakinglU8OCVR.claimDivs.call({from: accounts[1]});
//		const uintzlqTFWp = await EqFinanceStakinglU8OCVR.withdraw.call(uintIKXCNL3, {from: accounts[1]});
//		const uints0bJ7xw = await EqFinanceStakinglU8OCVR.getPendingDivs.call(addressdXhAOO, {from: accounts[0]});
//		await EqFinanceStakinglU8OCVR.claimDivs.call({from: accounts[4]});
//		const uintvWLoKy5 = await EqFinanceStakinglU8OCVR.deposit.call(uinthRisaCp, {from: accounts[3]});

		await expect(EqFinanceStakinglU8OCVR.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingihHL7LR = await EqFinanceStaking.new({from: accounts[3]});
		const uintEB7lY0 = await EqFinanceStakingihHL7LR.getNumberOfHolders.call({from: accounts[4]});
//		await EqFinanceStakingihHL7LR.onlyOwner.call({from: accounts[1]});
//		await EqFinanceStakingihHL7LR.onlyOwner.call({from: accounts[2]});
//		await EqFinanceStakingihHL7LR.claimDivs.call({from: accounts[0]});

		assert.equal(uintEB7lY0, BigInt("0"))
		await expect(EqFinanceStakingihHL7LR.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwtrqZbz = await EqFinanceStaking.new({from: accounts[2]});
		const uintLSO3zy6 = BigInt("832")
		const uintWbHGHT5 = BigInt("876")
		const uintC8nDjE = BigInt("1327")
//		const uintnWDIL7L = await EqFinanceStakingwtrqZbz.deposit.call(uintLSO3zy6, {from: accounts[1]});
//		const uintGtRRv6E = await EqFinanceStakingwtrqZbz.deposit.call(uintWbHGHT5, {from: accounts[4]});
//		const uintR4pF8Uw = await EqFinanceStakingwtrqZbz.deposit.call(uintC8nDjE, {from: accounts[5]});
//		const uintaGfDN7P = await EqFinanceStakingwtrqZbz.getStakingAndDaoAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintoPTZISg = await EqFinanceStakingwtrqZbz.getNumberOfHolders.call({from: accounts[2]});

		await expect(EqFinanceStakingwtrqZbz.deposit.call(uintLSO3zy6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingJnAE5tC = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		await EqFinanceStakingJnAE5tC.claimDivs.call({from: accounts[5]});
		await EqFinanceStakingJnAE5tC.onlyOwner.call({from: accounts[5]});
		const uintHt8MfF2 = await EqFinanceStakingJnAE5tC.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingETz2ehu = await EqFinanceStaking.new({from: accounts[4]});
		const addressFycAHgD = accounts[5]
		const uintuyunsHo = BigInt("1104")
		const addressDNFvqTV = await EqFinanceStakingETz2ehu.transferOwnership.call(addressFycAHgD, {from: accounts[4]});
//		const uintAwtCWfT = await EqFinanceStakingETz2ehu.withdraw.call(uintuyunsHo, {from: accounts[5]});

		await expect(EqFinanceStakingETz2ehu.withdraw.call(uintuyunsHo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingJlUj2n = await EqFinanceStaking.new({from: accounts[3]});
		const uints33oB6z = BigInt("109")
		const addressXDvIGU5 = accounts[2]
		const addressLsrr73A = "0x0000000000000000000000000000000000000001"
		const addressyJziR64 = accounts[1]
//		await EqFinanceStakingJlUj2n.claimDivs.call({from: accounts[2]});
//		const addressMM2tH5J = await EqFinanceStakingJlUj2n.transferAnyERC20Tokens.call(addressLsrr73A, addressXDvIGU5, uints33oB6z, {from: accounts[3]});
//		const uintESXVCKL = await EqFinanceStakingJlUj2n.getPendingDivs.call(addressyJziR64, {from: accounts[0]});
//		const uintXK3YQ9D = await EqFinanceStakingJlUj2n.getNumberOfHolders.call({from: accounts[3]});

		await expect(EqFinanceStakingJlUj2n.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})