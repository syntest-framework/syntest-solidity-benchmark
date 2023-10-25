const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractA9DpDmB = await HTDD_contract.new({from: accounts[0]});
		const uintzjHgvjD = BigInt("1888")
		const address7m81x1 = accounts[3]
		const uintZwUUyDr = BigInt("644")
		const addressKLCqdqc = accounts[3]
		const addressjcpB1Oc = accounts[4]
		const uintsx48o5N = BigInt("245")
		const addressTRx07II = accounts[2]
		const boolGLFp11 = await HTDD_contractA9DpDmB.approve.call(address7m81x1, uintzjHgvjD, {from: accounts[3]});
//		const booltq12Oo = await HTDD_contractA9DpDmB.transferFrom.call(addressjcpB1Oc, addressKLCqdqc, uintZwUUyDr, {from: accounts[1]});
//		const boolRbW06v7 = await HTDD_contractA9DpDmB.transfer.call(addressTRx07II, uintsx48o5N, {from: accounts[2]});

		assert.equal(boolGLFp11, true)
		await expect(HTDD_contractA9DpDmB.transferFrom.call(addressjcpB1Oc, addressKLCqdqc, uintZwUUyDr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractacFx5Ie = await HTDD_contract.new({from: accounts[3]});
		const addressvE9MyWH = accounts[2]
		const addressQ6Dxqj5 = accounts[2]
		const uintCaT2vBt = BigInt("988")
		const addressEbd41yk = accounts[1]
		const addressYoYIrdL = accounts[2]
		const addressGFkqeKE = "0x0000000000000000000000000000000000000001"
		const uintDJfq60s = BigInt("214")
		const addressvfU3DVu = accounts[0]
		const addressRIw947D = accounts[3]
		const uintHtKSjZE = BigInt("482")
		const addressh5T8os = accounts[2]
		const uintlJfS3vp = BigInt("611")
		const addressRwqkGSJ = accounts[5]
		const addresseBBJiJc = accounts[1]
		const uint256D16U1Tv = await HTDD_contractacFx5Ie.allowance.call(addressQ6Dxqj5, addressvE9MyWH, {from: accounts[3]});
		const boolKbQdRTP = await HTDD_contractacFx5Ie.approve.call(addressEbd41yk, uintCaT2vBt, {from: accounts[1]});
		const uint256WeT1KVR = await HTDD_contractacFx5Ie.allowance.call(addressGFkqeKE, addressYoYIrdL, {from: accounts[0]});
//		const boolkuEzYCg = await HTDD_contractacFx5Ie.transferFrom.call(addressRIw947D, addressvfU3DVu, uintDJfq60s, {from: accounts[5]});
//		const boolarJ5tV9 = await HTDD_contractacFx5Ie.approve.call(addressh5T8os, uintHtKSjZE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolOrSwjFY = await HTDD_contractacFx5Ie.transferFrom.call(addresseBBJiJc, addressRwqkGSJ, uintlJfS3vp, {from: accounts[4]});

		assert.equal(boolKbQdRTP, true)
		assert.equal(uint256D16U1Tv, BigInt("0"))
		assert.equal(uint256WeT1KVR, BigInt("0"))
		await expect(HTDD_contractacFx5Ie.transferFrom.call(addressRIw947D, addressvfU3DVu, uintDJfq60s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractJ93HHbS = await HTDD_contract.new({from: accounts[0]});
		const addressNoBKYr6 = accounts[1]
		const addressJ0sK3M7 = accounts[0]
		const uintFRaUDCE = BigInt("982")
		const addressw8Zmfk2 = accounts[3]
		const uintL9lR6Z3 = BigInt("165")
		const addresssxfiXK2 = accounts[4]
		const uint256nd7tTP9 = await HTDD_contractJ93HHbS.allowance.call(addressJ0sK3M7, addressNoBKYr6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolp9S5BXF = await HTDD_contractJ93HHbS.transfer.call(addressw8Zmfk2, uintFRaUDCE, {from: accounts[2]});
//		const bool0zvToA = await HTDD_contractJ93HHbS.approve.call(addresssxfiXK2, uintL9lR6Z3, {from: accounts[0]});

		assert.equal(uint256nd7tTP9, BigInt("0"))
		await expect(HTDD_contractJ93HHbS.transfer.call(addressw8Zmfk2, uintFRaUDCE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracthJxVP6J = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqw2nh6 = BigInt("1805")
		const addressJwoEmxm = accounts[0]
		const uintiWmhDdJ = BigInt("1324")
		const addressCAVh1m1 = accounts[3]
		const boolMCXIyKF = await HTDD_contracthJxVP6J.approve.call(addressJwoEmxm, uintqw2nh6, {from: accounts[1]});
		const booltm8uqO2 = await HTDD_contracthJxVP6J.approve.call(addressCAVh1m1, uintiWmhDdJ, {from: accounts[4]});
	});
})