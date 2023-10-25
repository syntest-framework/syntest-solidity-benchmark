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
		const contractW9FKuGv = await ERC20.new({from: accounts[4]});
		const addedValueWlPfSqh = BigInt("426")
		const spenderqWUB2WN = accounts[0]
		const spenderJqxLBp7 = accounts[4]
		const ownerWj8mn4k = accounts[2]
		const ownerGO34UmN = accounts[0]
		const valueAePvNLr = BigInt("998")
		const tofKm9KkK = accounts[5]
		const fromVORLXkX = accounts[5]
		const nullcC22Q7L = await contractW9FKuGv.increaseAllowance.call(spenderqWUB2WN, addedValueWlPfSqh, {from: accounts[3]});
		const nullKsyMofI = await contractW9FKuGv.totalSupply.call({from: accounts[0]});
		const nullY81sHga = await contractW9FKuGv.allowance.call(ownerWj8mn4k, spenderJqxLBp7, {from: accounts[1]});
		const nulleYdwSUn = await contractW9FKuGv.balanceOf.call(ownerGO34UmN, {from: accounts[2]});
		const nullz7TwVHS = await contractW9FKuGv.transferFrom.call(fromVORLXkX, tofKm9KkK, valueAePvNLr, {from: accounts[0]});

		assert.equal(nullKsyMofI, 0)
		assert.equal(nullY81sHga, 0)
		assert.equal(nullcC22Q7L, true)
		assert.equal(nulleYdwSUn, 0)
		await expect(contractW9FKuGv.transferFrom.call(fromVORLXkX, tofKm9KkK, valueAePvNLr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractBBpPFWB = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueq4iK6Vr = BigInt("1264")
		const spendercHWN5O = accounts[4]
		const spenderX4MMomL = "0x0000000000000000000000000000000000000001"
		const ownerbZDH6Lk = accounts[2]
		const valueDGSTPJL = BigInt("1199")
		const tow1uBrJ7 = accounts[2]
		const fromDlAcxAZ = "0x0000000000000000000000000000000000000001"
		const valueBMIdXFl = BigInt("1961")
		const toVnMxqG = accounts[0]
		const nullahabYXe = await contractBBpPFWB.approve.call(spendercHWN5O, valueq4iK6Vr, {from: accounts[2]});
		const nullGayStLn = await contractBBpPFWB.allowance.call(ownerbZDH6Lk, spenderX4MMomL, {from: accounts[5]});
		const nullQsyT42 = await contractBBpPFWB.transferFrom.call(fromDlAcxAZ, tow1uBrJ7, valueDGSTPJL, {from: accounts[2]});
		const nullsJsrHfV = await contractBBpPFWB.transfer.call(toVnMxqG, valueBMIdXFl, {from: accounts[3]});
	});
})