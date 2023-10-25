const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3wiIoqF0 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcEDqqXx = BigInt("5")
		const addressbyIdwBd = accounts[0]
		const addressNq5SA7Y = accounts[1]
		const addressfsaQqBi = accounts[0]
		const addresse2SQxo2 = accounts[3]
		const booldYklIGA = await Core_Fi_V3wiIoqF0.transferFrom.call(addressNq5SA7Y, addressbyIdwBd, uintcEDqqXx, {from: accounts[3]});
		const uint256CMSlEIc = await Core_Fi_V3wiIoqF0.balanceOf.call(addressfsaQqBi, {from: accounts[1]});
		const uint256s8qimxW = await Core_Fi_V3wiIoqF0.balanceOf.call(addresse2SQxo2, {from: accounts[3]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3VUPYcV = await Core_Fi_V3.new({from: accounts[2]});
		const uintEsHciHS = BigInt("748")
		const addressKHD6MxF = accounts[2]
		const addressHHo6FLO = accounts[0]
		const addressD69IIlL = "0x0000000000000000000000000000000000000001"
		const addressKk2HxEt = accounts[0]
		const addressvISHH8H = accounts[1]
		const addressyeWSYG = accounts[1]
		const addressDDimRMK = accounts[0]
		const boolVEW19mH = await Core_Fi_V3VUPYcV.transferFrom.call(addressHHo6FLO, addressKHD6MxF, uintEsHciHS, {from: accounts[0]});
		const uintmqslTy9 = await Core_Fi_V3VUPYcV.allowance.call(addressKk2HxEt, addressD69IIlL, {from: accounts[4]});
		const uint256rrdyHx = await Core_Fi_V3VUPYcV.balanceOf.call(addressvISHH8H, {from: accounts[4]});
		const uintsJCBzWh = await Core_Fi_V3VUPYcV.allowance.call(addressDDimRMK, addressyeWSYG, {from: accounts[4]});

		assert.equal(boolVEW19mH, false)
		assert.equal(uint256rrdyHx, BigInt("0"))
		assert.equal(uintmqslTy9, BigInt("0"))
		assert.equal(uintsJCBzWh, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3DMn5emY = await Core_Fi_V3.new({from: accounts[4]});
		const uintiC71gF = BigInt("1657")
		const addressmsE1TC8 = accounts[0]
		const addressoTZbIWj = accounts[4]
		const uintFsjQYzB = BigInt("1805")
		const addressY9UBum2 = accounts[0]
		const addressRzhHOLg = accounts[5]
		const addressJ0ZLefh = accounts[2]
		const uinte0Z643m = BigInt("939")
		const address9JAYRm = accounts[1]
		const addressDFcnETy = accounts[0]
		const uintHgPWpJJ = BigInt("1368")
		const addressdiNH8WQ = accounts[0]
		const boolS85XQuL = await Core_Fi_V3DMn5emY.transferFrom.call(addressoTZbIWj, addressmsE1TC8, uintiC71gF, {from: "0x0000000000000000000000000000000000000001"});
		const boolE7SGWbm = await Core_Fi_V3DMn5emY.transfer.call(addressY9UBum2, uintFsjQYzB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256clqLdI8 = await Core_Fi_V3DMn5emY.totalSupply.call({from: accounts[5]});
		const uintsbukC5W = await Core_Fi_V3DMn5emY.allowance.call(addressJ0ZLefh, addressRzhHOLg, {from: accounts[1]});
		const boolDfu2qaN = await Core_Fi_V3DMn5emY.transferFrom.call(addressDFcnETy, address9JAYRm, uinte0Z643m, {from: accounts[4]});
		const booloTLW4V0 = await Core_Fi_V3DMn5emY.transfer.call(addressdiNH8WQ, uintHgPWpJJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDfu2qaN, false)
		assert.equal(boolE7SGWbm, false)
		assert.equal(boolS85XQuL, false)
		assert.equal(booloTLW4V0, false)
		assert.equal(uint256clqLdI8, BigInt("84000000000000000000000"))
		assert.equal(uintsbukC5W, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3z7BCdCw = await Core_Fi_V3.new({from: accounts[2]});
		const uintLDuJ5EZ = BigInt("1264")
		const addressUghwU7o = accounts[2]
		const uintl3uTA36 = BigInt("77")
		const addressDX1JWYX = "0x0000000000000000000000000000000000000001"
		const addressnGq9AMF = accounts[4]
		const addressSRM1S2P = accounts[2]
		const uintRiqp1l2 = BigInt("370")
		const addressksjX9J = accounts[1]
		const boolh1uklTM = await Core_Fi_V3z7BCdCw.approve.call(addressUghwU7o, uintLDuJ5EZ, {from: accounts[4]});
		const boolGYcRd7m = await Core_Fi_V3z7BCdCw.transfer.call(addressDX1JWYX, uintl3uTA36, {from: accounts[3]});
		const uintzeJSqYi = await Core_Fi_V3z7BCdCw.allowance.call(addressSRM1S2P, addressnGq9AMF, {from: accounts[4]});
		const uint256C5tBU7G = await Core_Fi_V3z7BCdCw.totalSupply.call({from: accounts[5]});
		const booleZ644ZL = await Core_Fi_V3z7BCdCw.approve.call(addressksjX9J, uintRiqp1l2, {from: accounts[1]});

		assert.equal(boolGYcRd7m, false)
		assert.equal(booleZ644ZL, true)
		assert.equal(boolh1uklTM, true)
		assert.equal(uint256C5tBU7G, BigInt("84000000000000000000000"))
		assert.equal(uintzeJSqYi, BigInt("0"))
	});
})