const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingjYdE0Wb = await EqFinanceStaking.new({from: accounts[5]});
		const uintyQxy4LM = await EqFinanceStakingjYdE0Wb.getStakingAndDaoAmount.call({from: accounts[0]});
		await EqFinanceStakingjYdE0Wb.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintyQxy4LM, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingjYdE0Wb.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwcYxKnI = await EqFinanceStaking.new({from: accounts[0]});
		const addressRCMH69 = accounts[2]
		const addressIc7j5x6 = accounts[5]
		const uintn0I7bI = await EqFinanceStakingwcYxKnI.getPendingDivs.call(addressRCMH69, {from: accounts[3]});
		const uintIoac945 = await EqFinanceStakingwcYxKnI.getPendingDivs.call(addressIc7j5x6, {from: accounts[2]});
		await EqFinanceStakingwcYxKnI.claimDivs.call({from: accounts[4]});
		const uintfu7XFtY = await EqFinanceStakingwcYxKnI.getStakingAndDaoAmount.call({from: accounts[0]});

		assert.equal(uintIoac945, BigInt("0"))
		assert.equal(uintn0I7bI, BigInt("0"))
		await expect(EqFinanceStakingwcYxKnI.claimDivs.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakinggFqsrlu = await EqFinanceStaking.new({from: accounts[4]});
		const uintCPBTNLg = BigInt("1603")
		const addressfSxnzV = accounts[0]
		const addressRn85kmU = accounts[1]
		const uintbna7uWg = BigInt("1921")
		const addressSdnTi5I = accounts[3]
		const addressZvJjfs8 = accounts[2]
		const addressKAYWxN = await EqFinanceStakinggFqsrlu.transferAnyERC20Tokens.call(addressRn85kmU, addressfSxnzV, uintCPBTNLg, {from: "0x0000000000000000000000000000000000000001"});
		const addressrBniMPr = await EqFinanceStakinggFqsrlu.transferAnyERC20Tokens.call(addressZvJjfs8, addressSdnTi5I, uintbna7uWg, {from: accounts[4]});
		const uintzumBuSM = await EqFinanceStakinggFqsrlu.getNumberOfHolders.call({from: accounts[4]});

		await expect(EqFinanceStakinggFqsrlu.transferAnyERC20Tokens.call(addressRn85kmU, addressfSxnzV, uintCPBTNLg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingQ5sxSDp = await EqFinanceStaking.new({from: accounts[3]});
		const addressmJfB6JY = accounts[1]
		const uintzM3D0n = BigInt("1790")
		const uintA3m0nFw = await EqFinanceStakingQ5sxSDp.getNumberOfHolders.call({from: accounts[4]});
		const uintNXsp87a = await EqFinanceStakingQ5sxSDp.getNumberOfHolders.call({from: accounts[1]});
		const uinthHoFcIZ = await EqFinanceStakingQ5sxSDp.getPendingDivs.call(addressmJfB6JY, {from: accounts[5]});
		const uintHjmDXh1 = await EqFinanceStakingQ5sxSDp.getNumberOfHolders.call({from: accounts[0]});
		const uintYUvnTD0 = await EqFinanceStakingQ5sxSDp.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintZZ94rmF = await EqFinanceStakingQ5sxSDp.withdraw.call(uintzM3D0n, {from: accounts[1]});

		assert.equal(uintA3m0nFw, BigInt("0"))
		assert.equal(uintHjmDXh1, BigInt("0"))
		assert.equal(uintNXsp87a, BigInt("0"))
		assert.equal(uintYUvnTD0, BigInt("3000000000000000000000000"))
		assert.equal(uinthHoFcIZ, BigInt("0"))
		await expect(EqFinanceStakingQ5sxSDp.withdraw.call(uintzM3D0n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingdzQUPLH = await EqFinanceStaking.new({from: accounts[4]});
		const uintAG5QIH = BigInt("1998")
		const uintsMuxDOQ = BigInt("1215")
		const addressdYIjfBG = accounts[3]
		const addressNpwbrh = accounts[4]
		const uintnTaMils = await EqFinanceStakingdzQUPLH.getNumberOfHolders.call({from: accounts[1]});
		const uintZQvN3R4 = await EqFinanceStakingdzQUPLH.deposit.call(uintAG5QIH, {from: accounts[3]});
		const addressufWgRS0 = await EqFinanceStakingdzQUPLH.transferAnyERC20Tokens.call(addressNpwbrh, addressdYIjfBG, uintsMuxDOQ, {from: accounts[2]});
		const uintGvS3QA0 = await EqFinanceStakingdzQUPLH.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintnTaMils, BigInt("0"))
		await expect(EqFinanceStakingdzQUPLH.deposit.call(uintAG5QIH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingnXIBb4b = await EqFinanceStaking.new({from: accounts[4]});
		const uintjgfJQO7 = BigInt("1978")
		const addressc6rb1PD = accounts[2]
		const addressUvcEef = accounts[2]
		const addressusfsZ3M = await EqFinanceStakingnXIBb4b.transferAnyERC20Tokens.call(addressUvcEef, addressc6rb1PD, uintjgfJQO7, {from: accounts[4]});
		const uint2Cihyf = await EqFinanceStakingnXIBb4b.getStakingAndDaoAmount.call({from: accounts[3]});
		await EqFinanceStakingnXIBb4b.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});
		const uintguVALAA = await EqFinanceStakingnXIBb4b.getStakingAndDaoAmount.call({from: accounts[3]});
		await EqFinanceStakingnXIBb4b.claimDivs.call({from: accounts[4]});

		await expect(EqFinanceStakingnXIBb4b.transferAnyERC20Tokens.call(addressUvcEef, addressc6rb1PD, uintjgfJQO7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingpFlgpT5 = await EqFinanceStaking.new({from: accounts[5]});
		const addresslOWAvHJ = "0x0000000000000000000000000000000000000001"
		const uintb0HQYMO = BigInt("1325")
		const addressYZrrWE = accounts[4]
		const addressGLRb9LN = accounts[2]
		const uintlfo8X7 = BigInt("1451")
		const addressxZqcoVa = await EqFinanceStakingpFlgpT5.transferOwnership.call(addresslOWAvHJ, {from: accounts[5]});
		const uintNQDGPOD = await EqFinanceStakingpFlgpT5.getStakingAndDaoAmount.call({from: accounts[0]});
		const addressfO84qP = await EqFinanceStakingpFlgpT5.transferAnyERC20Tokens.call(addressGLRb9LN, addressYZrrWE, uintb0HQYMO, {from: accounts[4]});
		const uintLW0wpMR = await EqFinanceStakingpFlgpT5.withdraw.call(uintlfo8X7, {from: accounts[5]});
		await EqFinanceStakingpFlgpT5.claimDivs.call({from: accounts[0]});

		assert.equal(uintNQDGPOD, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingpFlgpT5.transferAnyERC20Tokens.call(addressGLRb9LN, addressYZrrWE, uintb0HQYMO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingrXFZWeF = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressV3vPede = accounts[5]
		const addresslsXyHHC = accounts[4]
		const uintgcwNwEv = await EqFinanceStakingrXFZWeF.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintAGihqAX = await EqFinanceStakingrXFZWeF.getPendingDivs.call(addressV3vPede, {from: accounts[2]});
		const uintWDXWLLp = await EqFinanceStakingrXFZWeF.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintE8DYnZc = await EqFinanceStakingrXFZWeF.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintAlTLmOM = await EqFinanceStakingrXFZWeF.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintgvysUw6 = await EqFinanceStakingrXFZWeF.getPendingDivs.call(addresslsXyHHC, {from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingc3glG1B = await EqFinanceStaking.new({from: accounts[0]});
		const uint7JlUsH = BigInt("0")
		const uintq8KnObO = BigInt("1047")
		const uintElv7HV = BigInt("679")
		const addressylZBrNP = accounts[2]
		const addressQ2zyXFe = accounts[1]
		const addressPhqrUb = accounts[2]
		const uintuj4yud7 = await EqFinanceStakingc3glG1B.deposit.call(uint7JlUsH, {from: accounts[3]});
		const uintdrWjMgO = await EqFinanceStakingc3glG1B.withdraw.call(uintq8KnObO, {from: accounts[4]});
		const addressdvRoHsT = await EqFinanceStakingc3glG1B.transferAnyERC20Tokens.call(addressQ2zyXFe, addressylZBrNP, uintElv7HV, {from: accounts[3]});
		const uintUYXyNp = await EqFinanceStakingc3glG1B.getStakingAndDaoAmount.call({from: accounts[1]});
		const uintkaPw28H = await EqFinanceStakingc3glG1B.getPendingDivs.call(addressPhqrUb, {from: accounts[0]});

		await expect(EqFinanceStakingc3glG1B.deposit.call(uint7JlUsH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})