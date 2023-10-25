const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractVVt1eis = await ERC20.new({from: accounts[1]});
		const addedValueZpvhzbg = BigInt("474")
		const spenderLvG8JZE = accounts[0]
		const valueYMoq1G = BigInt("1137")
		const toS72I60 = accounts[0]
		const fromrsa5Fy7 = "0x0000000000000000000000000000000000000001"
		const subtractedValueBs79vM4 = BigInt("1830")
		const spenderG9ZbPz = accounts[0]
		const ownerQJO5AUR = accounts[4]
		const valuetdGvYG1 = BigInt("2000")
		const tor3KjcdV = accounts[2]
		const fromD1OAXfX = "0x0000000000000000000000000000000000000001"
		const nullGW1VrAO = await contractVVt1eis.increaseAllowance.call(spenderLvG8JZE, addedValueZpvhzbg, {from: accounts[5]});
		const nullhUoA3Xq = await contractVVt1eis.transferFrom.call(fromrsa5Fy7, toS72I60, valueYMoq1G, {from: accounts[3]});
		const nullgl3Y9jP = await contractVVt1eis.decreaseAllowance.call(spenderG9ZbPz, subtractedValueBs79vM4, {from: accounts[2]});
		const nulliCK4twh = await contractVVt1eis.totalSupply.call({from: accounts[2]});
		const nullGT87UAt = await contractVVt1eis.balanceOf.call(ownerQJO5AUR, {from: accounts[4]});
		const nulluzJhRkw = await contractVVt1eis.transferFrom.call(fromD1OAXfX, tor3KjcdV, valuetdGvYG1, {from: accounts[2]});

		assert.equal(nullGW1VrAO, true)
		await expect(contractVVt1eis.transferFrom.call(fromrsa5Fy7, toS72I60, valueYMoq1G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracthvVLCp4 = await ERC20.new({from: accounts[3]});
		const spenderWBtxGim = accounts[1]
		const ownerMHKo1ot = accounts[1]
		const addedValue9ygdjp = BigInt("404")
		const spendergxxj41S = accounts[2]
		const valuem19zMXw = BigInt("1752")
		const spendergEJMcLo = accounts[1]
		const ownerAfKfQzq = accounts[3]
		const valuedRsyIk = BigInt("1644")
		const spenderbbBTzGV = accounts[5]
		const nullZ8cYLUx = await contracthvVLCp4.allowance.call(ownerMHKo1ot, spenderWBtxGim, {from: "0x0000000000000000000000000000000000000001"});
		const nullTpPDVvl = await contracthvVLCp4.increaseAllowance.call(spendergxxj41S, addedValue9ygdjp, {from: accounts[4]});
		const nullTAYYcdP = await contracthvVLCp4.approve.call(spendergEJMcLo, valuem19zMXw, {from: "0x0000000000000000000000000000000000000001"});
		const null26yDYR = await contracthvVLCp4.balanceOf.call(ownerAfKfQzq, {from: "0x0000000000000000000000000000000000000001"});
		const nullocNZz8n = await contracthvVLCp4.approve.call(spenderbbBTzGV, valuedRsyIk, {from: accounts[2]});

		assert.equal(null26yDYR, 0)
		assert.equal(nullTAYYcdP, true)
		assert.equal(nullTpPDVvl, true)
		assert.equal(nullZ8cYLUx, 0)
		assert.equal(nullocNZz8n, true)
	});

	it('test for ERC20', async () => {
		const contractkKvrFFM = await ERC20.new({from: accounts[1]});
		const subtractedValuezhPH4EY = BigInt("1895")
		const spenderlNHSauN = accounts[5]
		const valueKniW76C = BigInt("98")
		const spenderwY4dnh4 = "0x0000000000000000000000000000000000000001"
		const subtractedValuekP9k8SV = BigInt("980")
		const spenderbUFaNut = accounts[1]
		const valuedQrfBh = BigInt("1538")
		const tomqOU63 = accounts[0]
		const frommAHwVb = accounts[4]
		const nulljvJvh0r = await contractkKvrFFM.decreaseAllowance.call(spenderlNHSauN, subtractedValuezhPH4EY, {from: accounts[3]});
		const nullSkh062 = await contractkKvrFFM.approve.call(spenderwY4dnh4, valueKniW76C, {from: accounts[0]});
		const nullwKcWYzO = await contractkKvrFFM.decreaseAllowance.call(spenderbUFaNut, subtractedValuekP9k8SV, {from: accounts[0]});
		const nullUZpe70L = await contractkKvrFFM.transferFrom.call(frommAHwVb, tomqOU63, valuedQrfBh, {from: accounts[0]});

		await expect(contractkKvrFFM.decreaseAllowance.call(spenderlNHSauN, subtractedValuezhPH4EY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractNY2bZfX = await ERC20.new({from: accounts[4]});
		const spenderjpF0VpP = accounts[1]
		const ownerGn5uSZU = accounts[1]
		const spenderkymXq8 = accounts[2]
		const ownerJludYX = accounts[3]
		const nullsccahWW = await contractNY2bZfX.allowance.call(ownerGn5uSZU, spenderjpF0VpP, {from: accounts[1]});
		const nulldRyjBaE = await contractNY2bZfX.allowance.call(ownerJludYX, spenderkymXq8, {from: accounts[5]});
		const nullvTYvTrD = await contractNY2bZfX.totalSupply.call({from: accounts[2]});

		assert.equal(nulldRyjBaE, 0)
		assert.equal(nullsccahWW, 0)
		assert.equal(nullvTYvTrD, 0)
	});

	it('test for ERC20', async () => {
		const contractTsYRLS1 = await ERC20.new({from: accounts[3]});
		const valuezBP3zjV = BigInt("273")
		const spenderIeBui4D = accounts[4]
		const ownerpp1OkAc = accounts[3]
		const owneraQTGJq9 = accounts[1]
		const valuey02uh7k = BigInt("1479")
		const tol1cWZT3 = "0x0000000000000000000000000000000000000001"
		const nullWsqnyD5 = await contractTsYRLS1.approve.call(spenderIeBui4D, valuezBP3zjV, {from: accounts[2]});
		const nullHyTxvWI = await contractTsYRLS1.balanceOf.call(ownerpp1OkAc, {from: accounts[0]});
		const nullKk9hAef = await contractTsYRLS1.balanceOf.call(owneraQTGJq9, {from: "0x0000000000000000000000000000000000000001"});
		const nullhBCUlSk = await contractTsYRLS1.transfer.call(tol1cWZT3, valuey02uh7k, {from: accounts[4]});

		assert.equal(nullHyTxvWI, 0)
		assert.equal(nullKk9hAef, 0)
		assert.equal(nullWsqnyD5, true)
		await expect(contractTsYRLS1.transfer.call(tol1cWZT3, valuey02uh7k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contract7syoR8 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderuMBHyb5 = accounts[1]
		const ownerBVYj1gE = accounts[1]
		const valueNKewhz9 = BigInt("981")
		const tocg6PIHL = accounts[2]
		const fromahiLQbM = accounts[1]
		const nullXQdH8eC = await contract7syoR8.allowance.call(ownerBVYj1gE, spenderuMBHyb5, {from: "0x0000000000000000000000000000000000000001"});
		const nullTpjc38y = await contract7syoR8.transferFrom.call(fromahiLQbM, tocg6PIHL, valueNKewhz9, {from: accounts[2]});
	});
})