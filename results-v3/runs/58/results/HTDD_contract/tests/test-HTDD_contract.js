const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractV3Szotf = await HTDD_contract.new({from: accounts[2]});
		const uintNbJtyhH = BigInt("561")
		const addresspj5weec = accounts[3]
		const uintQwdvFdQ = BigInt("408")
		const addresstU8zlgl = accounts[0]
		const uint0VAI15 = BigInt("294")
		const addressX5g20V8 = accounts[0]
		const uint3t3q8G = BigInt("115")
		const addressVTsR0fV = accounts[5]
		const boolbrdJQva = await HTDD_contractV3Szotf.approve.call(addresspj5weec, uintNbJtyhH, {from: accounts[4]});
		const boolOgQ9Pj = await HTDD_contractV3Szotf.transfer.call(addresstU8zlgl, uintQwdvFdQ, {from: accounts[1]});
		const boolJDbvByi = await HTDD_contractV3Szotf.transfer.call(addressX5g20V8, uint0VAI15, {from: accounts[4]});
		const boolrQ2MYeD = await HTDD_contractV3Szotf.approve.call(addressVTsR0fV, uint3t3q8G, {from: accounts[2]});

		assert.equal(boolbrdJQva, true)
		await expect(HTDD_contractV3Szotf.transfer.call(addresstU8zlgl, uintQwdvFdQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractaNM66y = await HTDD_contract.new({from: accounts[2]});
		const addressyA51NjI = accounts[4]
		const addressho5EvL7 = accounts[1]
		const uintW0TyqZh = BigInt("1357")
		const addressDy9D9B = accounts[2]
		const uintIbOQ87f = BigInt("149")
		const addressFIsMnN3 = accounts[1]
		const addressOe3YgFl = accounts[4]
		const addressTI9hsm9 = accounts[5]
		const uint256HOrk5YF = await HTDD_contractaNM66y.allowance.call(addressho5EvL7, addressyA51NjI, {from: "0x0000000000000000000000000000000000000001"});
		const boolZ7iY9Te = await HTDD_contractaNM66y.transfer.call(addressDy9D9B, uintW0TyqZh, {from: accounts[0]});
		const boolcqAGEGV = await HTDD_contractaNM66y.transfer.call(addressFIsMnN3, uintIbOQ87f, {from: accounts[1]});
		const uint256huHZkJc = await HTDD_contractaNM66y.allowance.call(addressTI9hsm9, addressOe3YgFl, {from: accounts[5]});

		assert.equal(uint256HOrk5YF, BigInt("0"))
		await expect(HTDD_contractaNM66y.transfer.call(addressDy9D9B, uintW0TyqZh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractpbVX4H1 = await HTDD_contract.new({from: accounts[2]});
		const uintyOsCSCC = BigInt("22")
		const addressWxZ1Hlx = accounts[5]
		const addressIGBc5PD = accounts[1]
		const uintHGkF2jy = BigInt("989")
		const addressQHCVPXR = accounts[4]
		const uintoblBTHk = BigInt("1406")
		const addressxIviUS = accounts[4]
		const uintW2MHor4 = BigInt("622")
		const addressbEbMjoA = accounts[1]
		const boolcpgB0cm = await HTDD_contractpbVX4H1.transferFrom.call(addressIGBc5PD, addressWxZ1Hlx, uintyOsCSCC, {from: "0x0000000000000000000000000000000000000001"});
		const boolRKoVqpE = await HTDD_contractpbVX4H1.approve.call(addressQHCVPXR, uintHGkF2jy, {from: accounts[4]});
		const boolvcGuyh = await HTDD_contractpbVX4H1.approve.call(addressxIviUS, uintoblBTHk, {from: accounts[2]});
		const boolLWvUwvB = await HTDD_contractpbVX4H1.transfer.call(addressbEbMjoA, uintW2MHor4, {from: accounts[1]});

		await expect(HTDD_contractpbVX4H1.transferFrom.call(addressIGBc5PD, addressWxZ1Hlx, uintyOsCSCC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractvAZLTea = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGJXuMEk = BigInt("736")
		const addresszLuyhce = "0x0000000000000000000000000000000000000001"
		const uintyojUfO0 = BigInt("1991")
		const addressPTsN4ja = accounts[4]
		const addressKjpGInY = accounts[3]
		const addressZSUln5 = accounts[0]
		const addressVKFr5U = accounts[0]
		const addresskgbXg8 = accounts[5]
		const addressYb8yozO = "0x0000000000000000000000000000000000000001"
		const boolQDNxRr = await HTDD_contractvAZLTea.transfer.call(addresszLuyhce, uintGJXuMEk, {from: accounts[4]});
		const boolZjqG2vV = await HTDD_contractvAZLTea.transferFrom.call(addressKjpGInY, addressPTsN4ja, uintyojUfO0, {from: accounts[2]});
		const uint256nvQZ7yN = await HTDD_contractvAZLTea.allowance.call(addressVKFr5U, addressZSUln5, {from: accounts[3]});
		const uint256lGDBnQE = await HTDD_contractvAZLTea.allowance.call(addressYb8yozO, addresskgbXg8, {from: accounts[3]});
	});
})