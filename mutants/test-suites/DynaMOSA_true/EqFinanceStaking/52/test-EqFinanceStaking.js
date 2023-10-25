const EqFinanceStaking = artifacts.require("EqFinanceStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EqFinanceStaking', (accounts) => {
	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingT99LVYV = await EqFinanceStaking.new({from: accounts[1]});
		const uintX5hniXZ = BigInt("1020")
		const uintSQeBWQz = await EqFinanceStakingT99LVYV.getStakingAndDaoAmount.call({from: accounts[1]});
//		await EqFinanceStakingT99LVYV.onlyOwner.call({from: accounts[4]});
//		const uinttAuKUx = await EqFinanceStakingT99LVYV.withdraw.call(uintX5hniXZ, {from: accounts[3]});
//		const uintnt2fuLr = await EqFinanceStakingT99LVYV.getStakingAndDaoAmount.call({from: accounts[3]});
//		const uintHQNhUG3 = await EqFinanceStakingT99LVYV.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintSQeBWQz, BigInt("3000000000000000000000000"))
		await expect(EqFinanceStakingT99LVYV.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingwBtvQOk = await EqFinanceStaking.new({from: accounts[2]});
		const uintsrvn2gl = BigInt("1775")
		const addressEIwPFa = accounts[3]
		const addressGtw1SA0 = accounts[0]
//		const uintL0sv7Y = await EqFinanceStakingwBtvQOk.deposit.call(uintsrvn2gl, {from: accounts[0]});
//		const uintFLrotbT = await EqFinanceStakingwBtvQOk.getPendingDivs.call(addressEIwPFa, {from: accounts[1]});
//		const addressS10DSwJ = await EqFinanceStakingwBtvQOk.transferOwnership.call(addressGtw1SA0, {from: accounts[1]});
//		await EqFinanceStakingwBtvQOk.claimDivs.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(EqFinanceStakingwBtvQOk.deposit.call(uintsrvn2gl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingWWEPHv = await EqFinanceStaking.new({from: accounts[1]});
		const uintq7o2gp0 = await EqFinanceStakingWWEPHv.getNumberOfHolders.call({from: accounts[1]});
//		await EqFinanceStakingWWEPHv.claimDivs.call({from: accounts[0]});
//		const uintA26qo7T = await EqFinanceStakingWWEPHv.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintHmsCOG = await EqFinanceStakingWWEPHv.getStakingAndDaoAmount.call({from: accounts[0]});
//		const uintiVdjmQ = await EqFinanceStakingWWEPHv.getNumberOfHolders.call({from: accounts[0]});

		assert.equal(uintq7o2gp0, BigInt("0"))
		await expect(EqFinanceStakingWWEPHv.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingIYhhgq6 = await EqFinanceStaking.new({from: accounts[3]});
		const addressoaEJi0 = accounts[3]
		const uintHyfdyBv = BigInt("888")
		const uintTCBOjOI = BigInt("649")
		const uintClojC42 = BigInt("95")
		const addressIQUoQH4 = accounts[4]
		const addressH3MW9x = accounts[3]
		const uint3MwcUL = await EqFinanceStakingIYhhgq6.getNumberOfHolders.call({from: accounts[4]});
		const uintvDyNPam = await EqFinanceStakingIYhhgq6.getPendingDivs.call(addressoaEJi0, {from: accounts[3]});
//		const uintbb63wOi = await EqFinanceStakingIYhhgq6.withdraw.call(uintHyfdyBv, {from: accounts[0]});
//		const uintFeXrPB = await EqFinanceStakingIYhhgq6.withdraw.call(uintTCBOjOI, {from: accounts[0]});
//		const uintBOYeGry = await EqFinanceStakingIYhhgq6.getNumberOfHolders.call({from: accounts[2]});
//		const addressibrRXm1 = await EqFinanceStakingIYhhgq6.transferAnyERC20Tokens.call(addressH3MW9x, addressIQUoQH4, uintClojC42, {from: accounts[3]});

		assert.equal(uint3MwcUL, BigInt("0"))
		assert.equal(uintvDyNPam, BigInt("0"))
		await expect(EqFinanceStakingIYhhgq6.withdraw.call(uintHyfdyBv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingWWEPHv = await EqFinanceStaking.new({from: accounts[1]});
		const addresspLBb1Ig = accounts[5]
//		await EqFinanceStakingWWEPHv.claimDivs.call({from: accounts[0]});
//		const uintq7o2gp0 = await EqFinanceStakingWWEPHv.getNumberOfHolders.call({from: accounts[1]});
		await EqFinanceStakingWWEPHv.claimDivs.call({from: accounts[0]});
//		const uintA26qo7T = await EqFinanceStakingWWEPHv.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintHmsCOG = await EqFinanceStakingWWEPHv.getStakingAndDaoAmount.call({from: accounts[0]});
//		const uintiVdjmQ = await EqFinanceStakingWWEPHv.getNumberOfHolders.call({from: accounts[0]});
//		const addresslJ0a3Lh = await EqFinanceStakingWWEPHv.transferOwnership.call(addresspLBb1Ig, {from: accounts[1]});

		await expect(EqFinanceStakingWWEPHv.claimDivs.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingWWEPHv = await EqFinanceStaking.new({from: accounts[1]});
		const uintMRTi0QI = BigInt("1552")
		const addressXLS3XVR = accounts[4]
		const addressybwSBK = accounts[2]
		const addressHyHDq9R = accounts[5]
		const address6kQorT = accounts[2]
		const uint7bUPPH = BigInt("1210")
		const uintq7o2gp0 = await EqFinanceStakingWWEPHv.getNumberOfHolders.call({from: accounts[1]});
//		const addresseVhf8cc = await EqFinanceStakingWWEPHv.transferAnyERC20Tokens.call(addressybwSBK, addressXLS3XVR, uintMRTi0QI, {from: accounts[1]});
//		const uint27z1Kb = await EqFinanceStakingWWEPHv.getPendingDivs.call(addressHyHDq9R, {from: accounts[4]});
//		const addressiNP0B7o = await EqFinanceStakingWWEPHv.transferOwnership.call(address6kQorT, {from: accounts[4]});
//		await EqFinanceStakingWWEPHv.claimDivs.call({from: accounts[0]});
//		const uintA26qo7T = await EqFinanceStakingWWEPHv.getStakingAndDaoAmount.call({from: accounts[1]});
//		const uintfeebY6D = await EqFinanceStakingWWEPHv.withdraw.call(uint7bUPPH, {from: accounts[2]});

		assert.equal(uintq7o2gp0, BigInt("0"))
		await expect(EqFinanceStakingWWEPHv.transferAnyERC20Tokens.call(addressybwSBK, addressXLS3XVR, uintMRTi0QI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingaqmchmY = await EqFinanceStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintudf5KTI = BigInt("332")
		const addresslESm9J = accounts[3]
		const uintAtaYTv3 = BigInt("1792")
		const uint5Ws4q0 = await EqFinanceStakingaqmchmY.deposit.call(uintudf5KTI, {from: accounts[2]});
		const uintPYWEYj7 = await EqFinanceStakingaqmchmY.getNumberOfHolders.call({from: accounts[0]});
		const addressL0fdTU = await EqFinanceStakingaqmchmY.transferOwnership.call(addresslESm9J, {from: accounts[3]});
		const uintHR80OEr = await EqFinanceStakingaqmchmY.deposit.call(uintAtaYTv3, {from: accounts[4]});
	});

	it('test for EqFinanceStaking', async () => {
		const EqFinanceStakingBBUdbM6 = await EqFinanceStaking.new({from: accounts[1]});
		const addressgWEHRRY = accounts[2]
		const addressVz4wwXm = accounts[2]
		const addressDCBjbtU = accounts[1]
		const uintoL9ZjIF = BigInt("0")
		const addressfdJf2bY = accounts[1]
		const uinthbW2Dks = BigInt("1524")
		const uinto4FYIyW = await EqFinanceStakingBBUdbM6.getNumberOfHolders.call({from: accounts[1]});
		const uintftXB6ht = await EqFinanceStakingBBUdbM6.getPendingDivs.call(addressgWEHRRY, {from: accounts[2]});
		const uintBLfSxb = await EqFinanceStakingBBUdbM6.getPendingDivs.call(addressVz4wwXm, {from: accounts[3]});
		const uintLprZ19f = await EqFinanceStakingBBUdbM6.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintvpDJKS9 = await EqFinanceStakingBBUdbM6.getPendingDivs.call(addressDCBjbtU, {from: accounts[5]});
//		const uintW20yBhK = await EqFinanceStakingBBUdbM6.deposit.call(uintoL9ZjIF, {from: accounts[5]});
//		const uintbBfKhub = await EqFinanceStakingBBUdbM6.getPendingDivs.call(addressfdJf2bY, {from: accounts[3]});
//		const uintkcChSQ8 = await EqFinanceStakingBBUdbM6.withdraw.call(uinthbW2Dks, {from: accounts[3]});

		assert.equal(uintBLfSxb, BigInt("0"))
		assert.equal(uintLprZ19f, BigInt("3000000000000000000000000"))
		assert.equal(uintftXB6ht, BigInt("0"))
		assert.equal(uinto4FYIyW, BigInt("0"))
		assert.equal(uintvpDJKS9, BigInt("0"))
		await expect(EqFinanceStakingBBUdbM6.deposit.call(uintoL9ZjIF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})