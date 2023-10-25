const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractxOooB93 = await HTDD_contract.new({from: accounts[2]});
		const uintl6tXI6G = BigInt("1995")
		const addressNNZEfFh = "0x0000000000000000000000000000000000000001"
		const uintDRlCYRW = BigInt("996")
		const addresscMwz6tR = accounts[1]
		const uintMUgNOfI = BigInt("1351")
		const addressQ4lcmyY = accounts[0]
		const uint7DvifL = BigInt("511")
		const addressLja5w2 = accounts[3]
		const boolkSEN7j = await HTDD_contractxOooB93.approve.call(addressNNZEfFh, uintl6tXI6G, {from: accounts[1]});
//		const boolXlFyifC = await HTDD_contractxOooB93.transfer.call(addresscMwz6tR, uintDRlCYRW, {from: accounts[0]});
//		const boolM2HBxJ3 = await HTDD_contractxOooB93.transfer.call(addressQ4lcmyY, uintMUgNOfI, {from: accounts[5]});
//		const boolqd3NSq = await HTDD_contractxOooB93.transfer.call(addressLja5w2, uint7DvifL, {from: accounts[0]});

		assert.equal(boolkSEN7j, true)
		await expect(HTDD_contractxOooB93.transfer.call(addresscMwz6tR, uintDRlCYRW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractqixtXKg = await HTDD_contract.new({from: accounts[1]});
		const uint7sYhvi = BigInt("1628")
		const addressnlRW2go = accounts[3]
		const addressU90uLQA = accounts[2]
		const uintnlsQyXG = BigInt("373")
		const addressQbZZTup = accounts[2]
		const addressmytobeF = accounts[3]
		const addresspaTwHaT = accounts[0]
		const uinto1w9is8 = BigInt("1134")
		const addressyuxU9HJ = accounts[3]
//		const boolhjOnwhT = await HTDD_contractqixtXKg.transferFrom.call(addressU90uLQA, addressnlRW2go, uint7sYhvi, {from: accounts[1]});
//		const boolwa7aEZ = await HTDD_contractqixtXKg.approve.call(addressQbZZTup, uintnlsQyXG, {from: accounts[3]});
//		const uint256eD8WaQR = await HTDD_contractqixtXKg.allowance.call(addresspaTwHaT, addressmytobeF, {from: accounts[1]});
//		const booldsnIJqb = await HTDD_contractqixtXKg.approve.call(addressyuxU9HJ, uinto1w9is8, {from: accounts[1]});

		await expect(HTDD_contractqixtXKg.transferFrom.call(addressU90uLQA, addressnlRW2go, uint7sYhvi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractdBSNb1O = await HTDD_contract.new({from: accounts[1]});
		const addressf7uxkmq = accounts[5]
		const addressbQCwaEZ = accounts[0]
		const uintAtWUlml = BigInt("616")
		const addressOM1VyM = accounts[2]
		const addressGK4I2Db = accounts[2]
		const uint256aTEfdYx = await HTDD_contractdBSNb1O.allowance.call(addressbQCwaEZ, addressf7uxkmq, {from: accounts[3]});
//		const boolB83WC9B = await HTDD_contractdBSNb1O.transferFrom.call(addressGK4I2Db, addressOM1VyM, uintAtWUlml, {from: accounts[4]});

		assert.equal(uint256aTEfdYx, BigInt("0"))
		await expect(HTDD_contractdBSNb1O.transferFrom.call(addressGK4I2Db, addressOM1VyM, uintAtWUlml, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractGKdOZa = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVNQimnD = BigInt("663")
		const addressgcd9h6o = accounts[4]
		const addresscnI1STD = accounts[0]
		const uintalN44Q5 = BigInt("1327")
		const addresspNGObsO = accounts[3]
		const uintwKecRi1 = BigInt("291")
		const addressjoMXUoB = accounts[3]
		const uintP6m67d = BigInt("1390")
		const addressaBCPtM = accounts[4]
		const addressHfbC6xF = accounts[5]
		const uintQs01Dur = BigInt("1569")
		const addresssPdCSX1 = accounts[3]
		const uintthBLRG8 = BigInt("354")
		const addressroHEZPn = accounts[2]
		const addresste6eDTv = accounts[1]
		const boolh6R0tHT = await HTDD_contractGKdOZa.transferFrom.call(addresscnI1STD, addressgcd9h6o, uintVNQimnD, {from: accounts[3]});
		const boolhKztAHU = await HTDD_contractGKdOZa.approve.call(addresspNGObsO, uintalN44Q5, {from: accounts[1]});
		const bool1EcCuF = await HTDD_contractGKdOZa.approve.call(addressjoMXUoB, uintwKecRi1, {from: accounts[0]});
		const boolNp0lreZ = await HTDD_contractGKdOZa.transferFrom.call(addressHfbC6xF, addressaBCPtM, uintP6m67d, {from: accounts[0]});
		const boolnJUoWPR = await HTDD_contractGKdOZa.approve.call(addresssPdCSX1, uintQs01Dur, {from: accounts[0]});
		const boolpTGrSe = await HTDD_contractGKdOZa.transferFrom.call(addresste6eDTv, addressroHEZPn, uintthBLRG8, {from: accounts[3]});
	});
})