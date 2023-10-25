const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractkrJlKjb = await HTDD_contract.new({from: accounts[0]});
		const uintNJSOds = BigInt("1350")
		const addressmF2aVWc = accounts[1]
		const uintUW7ssDL = BigInt("1607")
		const addressIaGgHJI = accounts[4]
		const uintUQrHJTN = BigInt("1936")
		const addressasi3Lgl = accounts[4]
		const addressQasqGcG = accounts[0]
		const uintbau5gnB = BigInt("393")
		const addresszasukSJ = accounts[5]
		const boolFyLPHGG = await HTDD_contractkrJlKjb.transfer.call(addressmF2aVWc, uintNJSOds, {from: accounts[1]});
		const booln0Gy73 = await HTDD_contractkrJlKjb.approve.call(addressIaGgHJI, uintUW7ssDL, {from: accounts[3]});
		const boolibqKylY = await HTDD_contractkrJlKjb.transferFrom.call(addressQasqGcG, addressasi3Lgl, uintUQrHJTN, {from: accounts[2]});
		const boolIUbQnmL = await HTDD_contractkrJlKjb.transfer.call(addresszasukSJ, uintbau5gnB, {from: accounts[1]});

		await expect(HTDD_contractkrJlKjb.transfer.call(addressmF2aVWc, uintNJSOds, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractqPirNw = await HTDD_contract.new({from: accounts[4]});
		const uintsyfUwXC = BigInt("1015")
		const addressMlkm0n = accounts[4]
		const uintbZMpJW = BigInt("995")
		const addressgkZ80WE = accounts[5]
		const addresscQ94Wxt = accounts[4]
		const uintg8w21BO = BigInt("1365")
		const addressqVTiDBS = accounts[2]
		const uintg078dSr = BigInt("102")
		const addressGUAntw2 = accounts[1]
		const uintoSBaqT = BigInt("1455")
		const addressbru0tY7 = accounts[4]
		const booln4pbd6v = await HTDD_contractqPirNw.approve.call(addressMlkm0n, uintsyfUwXC, {from: "0x0000000000000000000000000000000000000001"});
		const boolJl14BxK = await HTDD_contractqPirNw.transferFrom.call(addresscQ94Wxt, addressgkZ80WE, uintbZMpJW, {from: accounts[4]});
		const boolr6kIB3K = await HTDD_contractqPirNw.approve.call(addressqVTiDBS, uintg8w21BO, {from: accounts[1]});
		const boolrnUIjcI = await HTDD_contractqPirNw.approve.call(addressGUAntw2, uintg078dSr, {from: accounts[3]});
		const boolDeyrdDS = await HTDD_contractqPirNw.approve.call(addressbru0tY7, uintoSBaqT, {from: accounts[2]});

		assert.equal(booln4pbd6v, true)
		await expect(HTDD_contractqPirNw.transferFrom.call(addresscQ94Wxt, addressgkZ80WE, uintbZMpJW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractj0ySg0 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxUwGY1 = BigInt("256")
		const addressdjBiJfZ = accounts[0]
		const uintkJCET59 = BigInt("1135")
		const addressQwmehck = accounts[2]
		const uinty45sfSB = BigInt("1496")
		const addressoOmnJco = accounts[1]
		const addressUITvqyZ = accounts[3]
		const boolybrOaQK = await HTDD_contractj0ySg0.approve.call(addressdjBiJfZ, uintxUwGY1, {from: accounts[5]});
		const booleQmMi5E = await HTDD_contractj0ySg0.transfer.call(addressQwmehck, uintkJCET59, {from: accounts[1]});
		const boolhVa0bSC = await HTDD_contractj0ySg0.transferFrom.call(addressUITvqyZ, addressoOmnJco, uinty45sfSB, {from: accounts[5]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractGJwCRM1 = await HTDD_contract.new({from: accounts[1]});
		const uintI7Kkta = BigInt("594")
		const addresszxaOLa2 = accounts[6]
		const addressEjnstP = accounts[5]
		const addresss1Svui8 = accounts[4]
		const uintLuORg4b = BigInt("695")
		const addressrbAerTY = accounts[2]
		const addressUrnHi5M = accounts[4]
		const bool51P7PG = await HTDD_contractGJwCRM1.transfer.call(addresszxaOLa2, uintI7Kkta, {from: accounts[1]});
		const uint256omQOHc5 = await HTDD_contractGJwCRM1.allowance.call(addresss1Svui8, addressEjnstP, {from: accounts[1]});
		const booliBk0mHt = await HTDD_contractGJwCRM1.transferFrom.call(addressUrnHi5M, addressrbAerTY, uintLuORg4b, {from: accounts[1]});

		assert.equal(bool51P7PG, true)
		assert.equal(uint256omQOHc5, BigInt("0"))
		await expect(HTDD_contractGJwCRM1.transferFrom.call(addressUrnHi5M, addressrbAerTY, uintLuORg4b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})