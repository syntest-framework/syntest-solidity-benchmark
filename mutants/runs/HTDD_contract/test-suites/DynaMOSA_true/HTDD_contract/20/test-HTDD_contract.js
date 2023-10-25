const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractIIW0EcC = await HTDD_contract.new({from: accounts[3]});
		const uintlPSN2jB = BigInt("949")
		const addresspQtk2TJ = accounts[2]
		const addressX3AUo1 = accounts[3]
		const uintCndvznZ = BigInt("1816")
		const addressAMY9EQn = accounts[3]
		const addressy3pw46m = accounts[3]
		const uintwVkZFX9 = BigInt("272")
		const addressySgUHzr = accounts[0]
		const booloRoWNKt = await HTDD_contractIIW0EcC.transferFrom.call(addressX3AUo1, addresspQtk2TJ, uintlPSN2jB, {from: accounts[4]});
		const boolrT9U2Ps = await HTDD_contractIIW0EcC.transferFrom.call(addressy3pw46m, addressAMY9EQn, uintCndvznZ, {from: accounts[0]});
		const boolvIBynsm = await HTDD_contractIIW0EcC.approve.call(addressySgUHzr, uintwVkZFX9, {from: accounts[3]});

		await expect(HTDD_contractIIW0EcC.transferFrom.call(addressX3AUo1, addresspQtk2TJ, uintlPSN2jB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractMK79f5f = await HTDD_contract.new({from: accounts[4]});
		const uintYZzTHEc = BigInt("1146")
		const addressk53jHHY = accounts[2]
		const uinttbY3nQn = BigInt("50")
		const addressl0aMb9 = accounts[4]
		const uintQSiZCBt = BigInt("1446")
		const addresszEw0FEY = accounts[5]
		const addressPklr4Ba = accounts[2]
		const addressab5JvhQ = accounts[2]
		const booln0BOBqc = await HTDD_contractMK79f5f.approve.call(addressk53jHHY, uintYZzTHEc, {from: accounts[3]});
		const boolp08KYwj = await HTDD_contractMK79f5f.approve.call(addressl0aMb9, uinttbY3nQn, {from: accounts[4]});
		const boolRLfC700 = await HTDD_contractMK79f5f.approve.call(addresszEw0FEY, uintQSiZCBt, {from: accounts[2]});
		const uint256Nq4WiUn = await HTDD_contractMK79f5f.allowance.call(addressab5JvhQ, addressPklr4Ba, {from: accounts[2]});

		assert.equal(boolRLfC700, true)
		assert.equal(booln0BOBqc, true)
		assert.equal(boolp08KYwj, true)
		assert.equal(uint256Nq4WiUn, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractYKrwxp = await HTDD_contract.new({from: accounts[1]});
		const uintS6Y9RB = BigInt("514")
		const addressE4DRlAw = accounts[3]
		const uintQQqEOd1 = BigInt("1220")
		const addressA5q1FL3 = accounts[2]
		const addressCLbWdcB = accounts[1]
		const uintWOqO4y = BigInt("1413")
		const addressXKzmOCH = accounts[5]
		const addressulrD1HK = "0x0000000000000000000000000000000000000001"
		const uintSYjErj4 = BigInt("437")
		const addressZI62wN = accounts[3]
		const addressIWW9Upr = accounts[0]
		const uintK9OoFqT = BigInt("144")
		const addressL1ZOzqf = accounts[0]
		const addressVxQobS = accounts[0]
		const uintWfGBF3 = BigInt("558")
		const addressI6cuuoa = accounts[1]
		const boolbacYFc6 = await HTDD_contractYKrwxp.transfer.call(addressE4DRlAw, uintS6Y9RB, {from: "0x0000000000000000000000000000000000000001"});
		const boollxTxGCe = await HTDD_contractYKrwxp.transferFrom.call(addressCLbWdcB, addressA5q1FL3, uintQQqEOd1, {from: accounts[3]});
		const boolTzs8IF1 = await HTDD_contractYKrwxp.transferFrom.call(addressulrD1HK, addressXKzmOCH, uintWOqO4y, {from: accounts[4]});
		const boolTfCFoAU = await HTDD_contractYKrwxp.transferFrom.call(addressIWW9Upr, addressZI62wN, uintSYjErj4, {from: accounts[1]});
		const booldOyC4Qq = await HTDD_contractYKrwxp.transferFrom.call(addressVxQobS, addressL1ZOzqf, uintK9OoFqT, {from: accounts[0]});
		const boolIzO8Jwl = await HTDD_contractYKrwxp.approve.call(addressI6cuuoa, uintWfGBF3, {from: accounts[2]});

		await expect(HTDD_contractYKrwxp.transfer.call(addressE4DRlAw, uintS6Y9RB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractLeXUz69 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintccCH6Ci = BigInt("1049")
		const addressKMnOVp = accounts[0]
		const uintrhoFHQb = BigInt("540")
		const addresskI84XXl = accounts[2]
		const uintEw5f3QJ = BigInt("905")
		const addressOW7I3AU = accounts[2]
		const addressRz1DThJ = accounts[1]
		const uintxLQt5Nm = BigInt("1861")
		const addressjbfHVSs = accounts[1]
		const boolWouvydJ = await HTDD_contractLeXUz69.approve.call(addressKMnOVp, uintccCH6Ci, {from: accounts[2]});
		const boolobfrEg6 = await HTDD_contractLeXUz69.transfer.call(addresskI84XXl, uintrhoFHQb, {from: accounts[2]});
		const boolMJRYjDr = await HTDD_contractLeXUz69.transferFrom.call(addressRz1DThJ, addressOW7I3AU, uintEw5f3QJ, {from: accounts[1]});
		const boolX0idJq = await HTDD_contractLeXUz69.approve.call(addressjbfHVSs, uintxLQt5Nm, {from: accounts[2]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractIIW0EcC = await HTDD_contract.new({from: accounts[3]});
		const uintLPSRH3H = BigInt("105")
		const addresskvWMbq = accounts[5]
		const uintPXjgaIp = BigInt("329")
		const addressSNOueLt = accounts[4]
		const addressEK5xfLk = accounts[2]
		const uintJJJGWc = BigInt("949")
		const addressy8JmQvh = accounts[3]
		const addresspgHzaJy = accounts[3]
		const boolhwicDgP = await HTDD_contractIIW0EcC.transfer.call(addresskvWMbq, uintLPSRH3H, {from: accounts[3]});
		const boolCcwGvMy = await HTDD_contractIIW0EcC.transferFrom.call(addressEK5xfLk, addressSNOueLt, uintPXjgaIp, {from: accounts[2]});
		const booloRoWNKt = await HTDD_contractIIW0EcC.transferFrom.call(addresspgHzaJy, addressy8JmQvh, uintJJJGWc, {from: accounts[4]});

		assert.equal(boolhwicDgP, true)
		await expect(HTDD_contractIIW0EcC.transferFrom.call(addressEK5xfLk, addressSNOueLt, uintPXjgaIp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})