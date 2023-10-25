const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractaZ30qJC = await ERC20.new({from: accounts[1]});
		const valuertXtOq2 = BigInt("1490")
		const tokondfWI = accounts[4]
		const fromWT0I0gO = accounts[1]
		const addedValueL9KjNS7 = BigInt("1975")
		const spenderOXhGWfL = accounts[3]
		const valueNbwdAWQ = BigInt("1055")
		const toXVOJnXG = accounts[1]
		const subtractedValueu0wi8qG = BigInt("352")
		const spenderMzr8KIj = accounts[4]
		const valuejKAZ1Gp = BigInt("1390")
		const toOg0Lys = accounts[1]
		const fromYPKvu6d = "0x0000000000000000000000000000000000000001"
		const spenderCo2KAi0 = accounts[2]
		const ownerZNYC0pE = accounts[2]
		const nullhDDyFin = await contractaZ30qJC.transferFrom.call(fromWT0I0gO, tokondfWI, valuertXtOq2, {from: accounts[4]});
		const nullT8DeLQ = await contractaZ30qJC.increaseAllowance.call(spenderOXhGWfL, addedValueL9KjNS7, {from: accounts[4]});
		const nullkAAEmTn = await contractaZ30qJC.transfer.call(toXVOJnXG, valueNbwdAWQ, {from: "0x0000000000000000000000000000000000000001"});
		const nullKrkme9 = await contractaZ30qJC.decreaseAllowance.call(spenderMzr8KIj, subtractedValueu0wi8qG, {from: accounts[1]});
		const nullLSxS1j4 = await contractaZ30qJC.transferFrom.call(fromYPKvu6d, toOg0Lys, valuejKAZ1Gp, {from: accounts[4]});
		const nullnrbTGss = await contractaZ30qJC.allowance.call(ownerZNYC0pE, spenderCo2KAi0, {from: accounts[2]});

		await expect(contractaZ30qJC.transferFrom.call(fromWT0I0gO, tokondfWI, valuertXtOq2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractCCPPDTc = await ERC20.new({from: accounts[1]});
		const owneraRttEAk = accounts[0]
		const addedValueKiRuWF = BigInt("1900")
		const spenderndIQ9wc = accounts[2]
		const owneraN4n7aC = accounts[2]
		const nullj80UgFB = await contractCCPPDTc.balanceOf.call(owneraRttEAk, {from: accounts[4]});
		const nullTYJ5fgt = await contractCCPPDTc.increaseAllowance.call(spenderndIQ9wc, addedValueKiRuWF, {from: accounts[1]});
		const nullRDS8M7g = await contractCCPPDTc.balanceOf.call(owneraN4n7aC, {from: accounts[3]});

		assert.equal(nullRDS8M7g, 0)
		assert.equal(nullTYJ5fgt, true)
		assert.equal(nullj80UgFB, 0)
	});

	it('test for ERC20', async () => {
		const contractDvNLEfr = await ERC20.new({from: accounts[0]});
		const valuexpP3zb = BigInt("398")
		const spenderVrkJbz8 = accounts[2]
		const spenderFyifPgT = accounts[4]
		const ownerwLprSqH = accounts[0]
		const subtractedValuewiC8Uc = BigInt("400")
		const spenderNtYkbV2 = accounts[2]
		const valueBBbIP8M = BigInt("670")
		const toelV8SH7 = accounts[4]
		const ownerOBx4hcb = "0x0000000000000000000000000000000000000001"
		const nullwzQEAG = await contractDvNLEfr.approve.call(spenderVrkJbz8, valuexpP3zb, {from: accounts[1]});
		const nullixXH4x7 = await contractDvNLEfr.allowance.call(ownerwLprSqH, spenderFyifPgT, {from: accounts[3]});
		const nullhrCKxcQ = await contractDvNLEfr.decreaseAllowance.call(spenderNtYkbV2, subtractedValuewiC8Uc, {from: accounts[0]});
		const nullS0PVUkL = await contractDvNLEfr.transfer.call(toelV8SH7, valueBBbIP8M, {from: accounts[1]});
		const nullsvfCdWh = await contractDvNLEfr.balanceOf.call(ownerOBx4hcb, {from: accounts[2]});

		assert.equal(nullixXH4x7, 0)
		assert.equal(nullwzQEAG, true)
		await expect(contractDvNLEfr.decreaseAllowance.call(spenderNtYkbV2, subtractedValuewiC8Uc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractunbTsEO = await ERC20.new({from: accounts[5]});
		const valuemjmgDph = BigInt("1200")
		const toMMoLDp5 = accounts[0]
		const ownerNveQz2F = accounts[4]
		const ownerwKDchra = accounts[1]
		const spenderjZC2ZRv = accounts[4]
		const owner3fCMO0 = accounts[1]
		const valueg3YC4KQ = BigInt("686")
		const spendervDqLFvZ = accounts[4]
		const nullMJPio5z = await contractunbTsEO.transfer.call(toMMoLDp5, valuemjmgDph, {from: accounts[2]});
		const nullFiCCxrc = await contractunbTsEO.balanceOf.call(ownerNveQz2F, {from: accounts[4]});
		const nullFQNK82 = await contractunbTsEO.balanceOf.call(ownerwKDchra, {from: accounts[0]});
		const nullKwI9slG = await contractunbTsEO.allowance.call(owner3fCMO0, spenderjZC2ZRv, {from: accounts[2]});
		const nullX94XXBw = await contractunbTsEO.approve.call(spendervDqLFvZ, valueg3YC4KQ, {from: accounts[1]});

		await expect(contractunbTsEO.transfer.call(toMMoLDp5, valuemjmgDph, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractyKdm8Sz = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerNCPKn2a = accounts[1]
		const spenderEjT48IY = accounts[4]
		const ownerKIPecHV = "0x0000000000000000000000000000000000000001"
		const addedValuePdjR7Uc = BigInt("1870")
		const spenderKHmLqMT = accounts[2]
		const spenderW1GZcc8 = accounts[1]
		const ownerSPHPvhW = accounts[0]
		const subtractedValuekhZ56tv = BigInt("1523")
		const spenderGim5Nh = accounts[2]
		const nulln41Zvgw = await contractyKdm8Sz.balanceOf.call(ownerNCPKn2a, {from: accounts[2]});
		const nullyET9w3e = await contractyKdm8Sz.allowance.call(ownerKIPecHV, spenderEjT48IY, {from: "0x0000000000000000000000000000000000000001"});
		const nullBhFwaqb = await contractyKdm8Sz.increaseAllowance.call(spenderKHmLqMT, addedValuePdjR7Uc, {from: accounts[3]});
		const nulleX87sNt = await contractyKdm8Sz.allowance.call(ownerSPHPvhW, spenderW1GZcc8, {from: accounts[3]});
		const nulll8sJtyG = await contractyKdm8Sz.totalSupply.call({from: accounts[0]});
		const nullSjYyTzW = await contractyKdm8Sz.decreaseAllowance.call(spenderGim5Nh, subtractedValuekhZ56tv, {from: accounts[1]});
	});

	it('test for ERC20', async () => {
		const contractP6rJCJ = await ERC20.new({from: accounts[0]});
		const valueTlx6ZGQ = BigInt("1090")
		const toBwHFzq = accounts[2]
		const fromrBhFknu = accounts[3]
		const spenderKFHYpFL = "0x0000000000000000000000000000000000000001"
		const owner6NBy3F = accounts[1]
		const valuemuFzp4 = BigInt("1657")
		const spenderJrWKFP = accounts[3]
		const nullH2vswZL = await contractP6rJCJ.totalSupply.call({from: accounts[3]});
		const nullFGlEJLT = await contractP6rJCJ.transferFrom.call(fromrBhFknu, toBwHFzq, valueTlx6ZGQ, {from: accounts[0]});
		const nullvRgViEu = await contractP6rJCJ.allowance.call(owner6NBy3F, spenderKFHYpFL, {from: accounts[5]});
		const nulliZnkLIp = await contractP6rJCJ.approve.call(spenderJrWKFP, valuemuFzp4, {from: accounts[0]});

		assert.equal(nullH2vswZL, 0)
		await expect(contractP6rJCJ.transferFrom.call(fromrBhFknu, toBwHFzq, valueTlx6ZGQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractN68G1nL = await ERC20.new({from: accounts[2]});
		const spenderj3pHnv8 = "0x00000000000000000000000000000000000000-1"
		const ownerZV6WHf0 = accounts[5]
		const ownercwR8qOS = accounts[0]
		const nullq8v5l2v = await contractN68G1nL.allowance.call(ownerZV6WHf0, spenderj3pHnv8, {from: accounts[5]});
		const nullOAwOim1 = await contractN68G1nL.balanceOf.call(ownercwR8qOS, {from: accounts[0]});

		await expect(contractN68G1nL.allowance.call(ownerZV6WHf0, spenderj3pHnv8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})