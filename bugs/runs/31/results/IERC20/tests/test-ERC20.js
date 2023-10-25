const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractx6NCtZ0 = await ERC20.new({from: accounts[1]});
		const ownerl0nhK2a = accounts[2]
		const subtractedValueAEHNuIq = BigInt("1215")
		const spenderBHYLe4w = accounts[3]
		const ownerkLW5blr = "0x0000000000000000000000000000000000000001"
		const nullTwmkCO = await contractx6NCtZ0.balanceOf.call(ownerl0nhK2a, {from: accounts[4]});
		const nullaZuMMqc = await contractx6NCtZ0.decreaseAllowance.call(spenderBHYLe4w, subtractedValueAEHNuIq, {from: accounts[0]});
		const nulluNpGin0 = await contractx6NCtZ0.balanceOf.call(ownerkLW5blr, {from: accounts[4]});

		assert.equal(nullTwmkCO, 0)
		await expect(contractx6NCtZ0.decreaseAllowance.call(spenderBHYLe4w, subtractedValueAEHNuIq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractQvgrfgU = await ERC20.new({from: accounts[3]});
		const valuewMl2va3 = BigInt("1862")
		const toPBfBxzm = accounts[0]
		const fromw3sG1cl = accounts[2]
		const nulljdL3qvn = await contractQvgrfgU.totalSupply.call({from: accounts[4]});
		const nullWddnuPS = await contractQvgrfgU.transferFrom.call(fromw3sG1cl, toPBfBxzm, valuewMl2va3, {from: accounts[1]});

		assert.equal(nulljdL3qvn, 0)
		await expect(contractQvgrfgU.transferFrom.call(fromw3sG1cl, toPBfBxzm, valuewMl2va3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJwKRBob = await ERC20.new({from: accounts[4]});
		const addedValueGe9yHx = BigInt("426")
		const spendereH0AVNS = accounts[0]
		const ownerxBwlBGF = accounts[0]
		const valuekOeOSdp = BigInt("998")
		const toNQGrjI8 = accounts[5]
		const fromoTBUCRR = accounts[5]
		const nullPOgDgYY = await contractJwKRBob.increaseAllowance.call(spendereH0AVNS, addedValueGe9yHx, {from: accounts[3]});
		const nullklhC6i4 = await contractJwKRBob.totalSupply.call({from: accounts[0]});
		const nullruBfjcx = await contractJwKRBob.balanceOf.call(ownerxBwlBGF, {from: accounts[2]});
		const nulleTdNAQH = await contractJwKRBob.transferFrom.call(fromoTBUCRR, toNQGrjI8, valuekOeOSdp, {from: accounts[0]});

		assert.equal(nullPOgDgYY, true)
		assert.equal(nullklhC6i4, 0)
		assert.equal(nullruBfjcx, 0)
		await expect(contractJwKRBob.transferFrom.call(fromoTBUCRR, toNQGrjI8, valuekOeOSdp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgTguHoa = await ERC20.new({from: accounts[1]});
		const valueBx0YZTG = BigInt("1004")
		const spendergeqfNzO = accounts[1]
		const valueSsg67aY = BigInt("1389")
		const spenderEKkHA5w = accounts[0]
		const valueHjp2XZ = BigInt("651")
		const toF693fIS = accounts[2]
		const valueSzTTMbE = BigInt("795")
		const toofCbJbE = "0x0000000000000000000000000000000000000001"
		const null47yx0g = await contractgTguHoa.approve.call(spendergeqfNzO, valueBx0YZTG, {from: accounts[0]});
		const nullXyJBiq8 = await contractgTguHoa.totalSupply.call({from: accounts[0]});
		const nullUJqQejj = await contractgTguHoa.approve.call(spenderEKkHA5w, valueSsg67aY, {from: accounts[0]});
		const nullsIjzpME = await contractgTguHoa.transfer.call(toF693fIS, valueHjp2XZ, {from: accounts[2]});
		const nulljE61G0z = await contractgTguHoa.transfer.call(toofCbJbE, valueSzTTMbE, {from: accounts[4]});

		assert.equal(null47yx0g, true)
		assert.equal(nullUJqQejj, true)
		assert.equal(nullXyJBiq8, 0)
		await expect(contractgTguHoa.transfer.call(toF693fIS, valueHjp2XZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractKxxvDRH = await ERC20.new({from: accounts[3]});
		const spenderp5x4tbt = accounts[2]
		const ownerrBFSO4X = accounts[3]
		const valueTvhpoG5 = BigInt("943")
		const toqaBx3hu = accounts[1]
		const valueq4CzIZm = BigInt("1862")
		const toQ2LwuvB = accounts[0]
		const fromuq8Rzqa = accounts[2]
		const nullyQnwdRQ = await contractKxxvDRH.totalSupply.call({from: accounts[4]});
		const nullEvzrCu = await contractKxxvDRH.allowance.call(ownerrBFSO4X, spenderp5x4tbt, {from: accounts[3]});
		const nulldrDX7Kd = await contractKxxvDRH.transfer.call(toqaBx3hu, valueTvhpoG5, {from: accounts[1]});
		const nullfPMbOtV = await contractKxxvDRH.transferFrom.call(fromuq8Rzqa, toQ2LwuvB, valueq4CzIZm, {from: accounts[1]});

		assert.equal(nullEvzrCu, 0)
		assert.equal(nullyQnwdRQ, 0)
		await expect(contractKxxvDRH.transfer.call(toqaBx3hu, valueTvhpoG5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractCHuD16X = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const subtractedValuebaZjl6J = BigInt("874")
		const spenderQcRjJgu = accounts[1]
		const valueZ41PTA = BigInt("117")
		const tocV47VJK = accounts[4]
		const valuegfFgK3c = BigInt("742")
		const spenderyxQwIH = accounts[3]
		const addedValueWkY2kz7 = BigInt("1542")
		const spenderARhW9K = "0x0000000000000000000000000000000000000001"
		const valuegBAZxR5 = BigInt("1257")
		const toAr0MSMJ = accounts[2]
		const fromEAT0AwH = "0x0000000000000000000000000000000000000001"
		const valueBBOILAg = BigInt("112")
		const tolCq6A8v = accounts[0]
		const nullkTvsOQ9 = await contractCHuD16X.decreaseAllowance.call(spenderQcRjJgu, subtractedValuebaZjl6J, {from: accounts[2]});
		const nullkMBgeTX = await contractCHuD16X.transfer.call(tocV47VJK, valueZ41PTA, {from: accounts[4]});
		const nullXx3cLZ3 = await contractCHuD16X.approve.call(spenderyxQwIH, valuegfFgK3c, {from: accounts[1]});
		const nullzbSbjn7 = await contractCHuD16X.increaseAllowance.call(spenderARhW9K, addedValueWkY2kz7, {from: accounts[0]});
		const nullGwHegnv = await contractCHuD16X.transferFrom.call(fromEAT0AwH, toAr0MSMJ, valuegBAZxR5, {from: accounts[1]});
		const nullZwsDrMa = await contractCHuD16X.transfer.call(tolCq6A8v, valueBBOILAg, {from: accounts[4]});
	});
})