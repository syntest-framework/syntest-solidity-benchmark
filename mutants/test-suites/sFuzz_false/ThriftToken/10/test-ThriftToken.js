const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenoieicsV = await ThriftToken.new({from: accounts[0]});
		const addressYJgpGiq = "0x0000000000000000000000000000000000000001"
		const addressk0yLXIx = accounts[2]
		const addressTElC6cw = accounts[0]
		const address0vmdIi = accounts[5]
		const addresseUeqCcC = accounts[4]
		const uint256eEQqZr = await ThriftTokenoieicsV.allowance.call(addressk0yLXIx, addressYJgpGiq, {from: accounts[2]});
//		const addressyRPlGrZ = await ThriftTokenoieicsV.transferOwnership.call(addressTElC6cw, {from: accounts[0]});
//		const uint256TEnaJ9 = await ThriftTokenoieicsV.allowance.call(addresseUeqCcC, address0vmdIi, {from: accounts[1]});

		assert.equal(uint256eEQqZr, BigInt("0"))
		await expect(ThriftTokenoieicsV.transferOwnership.call(addressTElC6cw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenNS7Qspl = await ThriftToken.new({from: accounts[4]});
		const uintPz81FMm = BigInt("653")
		const addresshwOsiuD = accounts[2]
		const uintVafyWCb = BigInt("1219")
		const addresstOVn6lT = "0x0000000000000000000000000000000000000001"
		const uintwUyeNsj = BigInt("271")
		const addressxKadzeS = accounts[4]
		const boolW8yPp4D = await ThriftTokenNS7Qspl.increaseApproval.call(addresshwOsiuD, uintPz81FMm, {from: accounts[0]});
		const boolnMA0aFA = await ThriftTokenNS7Qspl.increaseApproval.call(addresstOVn6lT, uintVafyWCb, {from: accounts[2]});
//		const booly93OWM = await ThriftTokenNS7Qspl.transfer.call(addressxKadzeS, uintwUyeNsj, {from: accounts[1]});

		assert.equal(boolW8yPp4D, true)
		assert.equal(boolnMA0aFA, true)
		await expect(ThriftTokenNS7Qspl.transfer.call(addressxKadzeS, uintwUyeNsj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenjj3kkA = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwd8qWIN = BigInt("623")
		const addressHCb5wTl = accounts[5]
		const uintY4LpBHP = BigInt("1713")
		const addressfjqs1Jo = accounts[2]
		const uintVrZDMqh = BigInt("1051")
		const addressze5soaN = accounts[3]
		const addresssVQoSl7 = accounts[1]
		const addressJFRD4lL = accounts[0]
		const boolVmVXR3f = await ThriftTokenjj3kkA.increaseApproval.call(addressHCb5wTl, uintwd8qWIN, {from: accounts[3]});
		const boolBWU7kWj = await ThriftTokenjj3kkA.decreaseApproval.call(addressfjqs1Jo, uintY4LpBHP, {from: accounts[1]});
		const boolq4ffRxO = await ThriftTokenjj3kkA.approve.call(addressze5soaN, uintVrZDMqh, {from: accounts[1]});
		const uint256tLiSdA5 = await ThriftTokenjj3kkA.allowance.call(addressJFRD4lL, addresssVQoSl7, {from: accounts[3]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenRUvJZ6A = await ThriftToken.new({from: accounts[2]});
		const uintk97IxU = BigInt("1313")
		const addressRhovtHU = accounts[5]
		const uintjfsZWKQ = BigInt("1295")
		const addressVekIs3n = accounts[4]
		const uintkV9S4TL = BigInt("877")
		const addressHzxIIxa = accounts[2]
		const uintw34XVTN = BigInt("1263")
		const addressbCPdzfi = accounts[1]
		const boolUUrp6LY = await ThriftTokenRUvJZ6A.decreaseApproval.call(addressRhovtHU, uintk97IxU, {from: accounts[4]});
		const boolJRFyraz = await ThriftTokenRUvJZ6A.increaseApproval.call(addressVekIs3n, uintjfsZWKQ, {from: accounts[0]});
		const boolrJKO7K8 = await ThriftTokenRUvJZ6A.decreaseApproval.call(addressHzxIIxa, uintkV9S4TL, {from: accounts[1]});
		const boolV9XCRkI = await ThriftTokenRUvJZ6A.increaseApproval.call(addressbCPdzfi, uintw34XVTN, {from: accounts[4]});

		assert.equal(boolJRFyraz, true)
		assert.equal(boolUUrp6LY, true)
		assert.equal(boolV9XCRkI, true)
		assert.equal(boolrJKO7K8, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokencsFYsQS = await ThriftToken.new({from: accounts[4]});
		const uintg0ozU5X = BigInt("1455")
		const addressfR6hYZo = accounts[5]
		const addresspbBgr9o = accounts[4]
//		const boolqBtgLVR = await ThriftTokencsFYsQS.approve.call(addressfR6hYZo, uintg0ozU5X, {from: accounts[5]});
//		const uint256GZbw09 = await ThriftTokencsFYsQS.balanceOf.call(addresspbBgr9o, {from: accounts[1]});

		await expect(ThriftTokencsFYsQS.approve.call(addressfR6hYZo, uintg0ozU5X, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenrPWKvOK = await ThriftToken.new({from: accounts[4]});
		const uintfbbvMh6 = BigInt("1887")
		const addressZk1j611 = accounts[3]
		const addresso42KXUf = accounts[4]
		const addressAkOOHjh = accounts[2]
		const addressbsvmN2m = accounts[3]
		const uintZ8fJyLb = BigInt("31")
		const addressWI0ONYJ = accounts[4]
		const addressDxsh0OW = accounts[1]
//		const boolsZI0cFl = await ThriftTokenrPWKvOK.transferFrom.call(addresso42KXUf, addressZk1j611, uintfbbvMh6, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256A6lf3N8 = await ThriftTokenrPWKvOK.allowance.call(addressbsvmN2m, addressAkOOHjh, {from: accounts[4]});
//		const booluDafZV8 = await ThriftTokenrPWKvOK.transferFrom.call(addressDxsh0OW, addressWI0ONYJ, uintZ8fJyLb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ThriftTokenrPWKvOK.transferFrom.call(addresso42KXUf, addressZk1j611, uintfbbvMh6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})