const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingeE5R8Sy = await MoshiachCoinStaking.new({from: accounts[2]});
		const addressVbn3du5 = accounts[0]
		const uinttyBqXyd = BigInt("52")
		const addressTGYKd1h = accounts[4]
		const addressab2Noal = accounts[4]
		const uintr7IsyBu = await MoshiachCoinStakingeE5R8Sy.getPendingDivs.call(addressVbn3du5, {from: accounts[3]});
		const uintLNzpd2L = await MoshiachCoinStakingeE5R8Sy.withdraw.call(uinttyBqXyd, {from: accounts[3]});
		const uintc8jH9OG = await MoshiachCoinStakingeE5R8Sy.getPendingDivs.call(addressTGYKd1h, {from: accounts[2]});
		const uintwDOXlNl = await MoshiachCoinStakingeE5R8Sy.getPendingDivs.call(addressab2Noal, {from: accounts[3]});

		assert.equal(uintr7IsyBu, BigInt("0"))
		await expect(MoshiachCoinStakingeE5R8Sy.withdraw.call(uinttyBqXyd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingQ4CaX0V = await MoshiachCoinStaking.new({from: accounts[3]});
		const addressJLIJpGL = accounts[2]
		const uinth45AiFu = await MoshiachCoinStakingQ4CaX0V.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintTCNtO0r = await MoshiachCoinStakingQ4CaX0V.getPendingDivs.call(addressJLIJpGL, {from: accounts[2]});
		const uintERqXub4 = await MoshiachCoinStakingQ4CaX0V.getStakingAndDaoAmount.call({from: accounts[0]});
		const uintuSdYBqo = await MoshiachCoinStakingQ4CaX0V.getNumberOfHolders.call({from: accounts[2]});
		const uintP2vyPJ0 = await MoshiachCoinStakingQ4CaX0V.getNumberOfHolders.call({from: accounts[4]});
		const uintIB6JyRF = await MoshiachCoinStakingQ4CaX0V.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintERqXub4, BigInt("60000000000000000000000000"))
		assert.equal(uintIB6JyRF, BigInt("60000000000000000000000000"))
		assert.equal(uintP2vyPJ0, BigInt("0"))
		assert.equal(uintTCNtO0r, BigInt("0"))
		assert.equal(uinth45AiFu, BigInt("60000000000000000000000000"))
		assert.equal(uintuSdYBqo, BigInt("0"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingm5iGaaR = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintPNBT3VE = BigInt("1788")
		const uintIVra0xb = BigInt("60")
		const uintvX5Amy0 = BigInt("75")
		const uintM3dIrAj = await MoshiachCoinStakingm5iGaaR.deposit.call(uintPNBT3VE, {from: accounts[1]});
		const uintwvF5bWk = await MoshiachCoinStakingm5iGaaR.withdraw.call(uintIVra0xb, {from: accounts[4]});
		const uintDJNwV48 = await MoshiachCoinStakingm5iGaaR.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintfWLbCvW = await MoshiachCoinStakingm5iGaaR.deposit.call(uintvX5Amy0, {from: "0x0000000000000000000000000000000000000001"});
		await MoshiachCoinStakingm5iGaaR.claimDivs.call({from: accounts[0]});

		await expect(MoshiachCoinStakingm5iGaaR.deposit.call(uintPNBT3VE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingJY6xWJc = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAQoGQKQ = accounts[1]
		const uintkNdbwlP = await MoshiachCoinStakingJY6xWJc.getStakingAndDaoAmount.call({from: accounts[5]});
		const uintBP9Rwat = await MoshiachCoinStakingJY6xWJc.getNumberOfHolders.call({from: "0x0000000000000000000000000000000000000001"});
		const uintQgqaIwG = await MoshiachCoinStakingJY6xWJc.getPendingDivs.call(addressAQoGQKQ, {from: accounts[4]});
		await MoshiachCoinStakingJY6xWJc.onlyOwner.call({from: accounts[1]});
		await MoshiachCoinStakingJY6xWJc.claimDivs.call({from: accounts[4]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingahwp1jw = await MoshiachCoinStaking.new({from: accounts[0]});
		const addressMT93d4R = accounts[1]
		await MoshiachCoinStakingahwp1jw.onlyOwner.call({from: accounts[1]});
		const addressU0ySVEN = await MoshiachCoinStakingahwp1jw.transferOwnership.call(addressMT93d4R, {from: accounts[2]});
		await MoshiachCoinStakingahwp1jw.claimDivs.call({from: accounts[2]});
		const uintB6g6qDr = await MoshiachCoinStakingahwp1jw.getNumberOfHolders.call({from: accounts[4]});
		await MoshiachCoinStakingahwp1jw.claimDivs.call({from: accounts[1]});

		await expect(MoshiachCoinStakingahwp1jw.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingMsyam1 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintLSntA2O = await MoshiachCoinStakingMsyam1.getNumberOfHolders.call({from: accounts[1]});
		await MoshiachCoinStakingMsyam1.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintLSntA2O, BigInt("0"))
		await expect(MoshiachCoinStakingMsyam1.claimDivs.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingwkFSevn = await MoshiachCoinStaking.new({from: accounts[0]});
		const uintmc75YcT = BigInt("1131")
		const addressmZHE732 = accounts[2]
		const addressNXldQr8 = accounts[0]
		const addressuIDrfsv = accounts[0]
		const addressOEYEgCl = await MoshiachCoinStakingwkFSevn.transferAnyERC20Tokens.call(addressNXldQr8, addressmZHE732, uintmc75YcT, {from: accounts[0]});
		const uintbxhfEgH = await MoshiachCoinStakingwkFSevn.getPendingDivs.call(addressuIDrfsv, {from: accounts[3]});
		await MoshiachCoinStakingwkFSevn.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MoshiachCoinStakingwkFSevn.transferAnyERC20Tokens.call(addressNXldQr8, addressmZHE732, uintmc75YcT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingMsyam1 = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressIGHUcoA = accounts[0]
		const uintfWB6JAL = BigInt("54")
		const addressnWUKyzn = await MoshiachCoinStakingMsyam1.transferOwnership.call(addressIGHUcoA, {from: accounts[1]});
		const uintu03RsyB = await MoshiachCoinStakingMsyam1.getNumberOfHolders.call({from: accounts[2]});
		const uintky2eeRW = await MoshiachCoinStakingMsyam1.withdraw.call(uintfWB6JAL, {from: accounts[1]});

		assert.equal(uintu03RsyB, BigInt("0"))
		await expect(MoshiachCoinStakingMsyam1.withdraw.call(uintfWB6JAL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})