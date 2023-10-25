const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3WDF4J4g = await Core_Fi_V3.new({from: accounts[0]});
		const addressWmUGRwm = accounts[4]
		const address4M8P3y = accounts[1]
		const addressWvR2tHf = accounts[3]
		const uint256KjuiBFj = await Core_Fi_V3WDF4J4g.balanceOf.call(addressWmUGRwm, {from: accounts[0]});
		const uint256sY6pPGh = await Core_Fi_V3WDF4J4g.balanceOf.call(address4M8P3y, {from: accounts[4]});
		const uint256SjsYbPo = await Core_Fi_V3WDF4J4g.balanceOf.call(addressWvR2tHf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KjuiBFj, BigInt("0"))
		assert.equal(uint256SjsYbPo, BigInt("0"))
		assert.equal(uint256sY6pPGh, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3YYDKqAT = await Core_Fi_V3.new({from: accounts[2]});
		const addressMbP7agg = "0x0000000000000000000000000000000000000001"
		const addressNKqDINQ = accounts[4]
		const addressoUgdcfB = accounts[0]
		const addressPhUKzR = accounts[5]
		const addressHAka84E = accounts[1]
		const addressebQD9nZ = accounts[3]
		const uintFaBQalG = BigInt("577")
		const addressSmIECEv = accounts[2]
		const addressp6MMd1i = accounts[3]
		const addressBEDJFs2 = "0x0000000000000000000000000000000000000001"
		const uintFvkqoY4 = await Core_Fi_V3YYDKqAT.allowance.call(addressNKqDINQ, addressMbP7agg, {from: accounts[2]});
		const uint256vDuz6wh = await Core_Fi_V3YYDKqAT.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintCTRjPw = await Core_Fi_V3YYDKqAT.allowance.call(addressPhUKzR, addressoUgdcfB, {from: accounts[2]});
		const uintZuT8XhD = await Core_Fi_V3YYDKqAT.allowance.call(addressebQD9nZ, addressHAka84E, {from: accounts[0]});
		const boolZSt6sMM = await Core_Fi_V3YYDKqAT.transfer.call(addressSmIECEv, uintFaBQalG, {from: accounts[0]});
		const uintPNGEmF = await Core_Fi_V3YYDKqAT.allowance.call(addressBEDJFs2, addressp6MMd1i, {from: accounts[0]});

		assert.equal(boolZSt6sMM, false)
		assert.equal(uint256vDuz6wh, BigInt("84000000000000000000000"))
		assert.equal(uintCTRjPw, BigInt("0"))
		assert.equal(uintFvkqoY4, BigInt("0"))
		assert.equal(uintPNGEmF, BigInt("0"))
		assert.equal(uintZuT8XhD, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3eY1Gmjv = await Core_Fi_V3.new({from: accounts[4]});
		const addressdo4Ml4t = accounts[5]
		const addresse3JrWck = accounts[4]
		const uintU70jymt = BigInt("1577")
		const addresszUA3A8 = "0x0000000000000000000000000000000000000001"
		const uintiw7Pewm = await Core_Fi_V3eY1Gmjv.allowance.call(addresse3JrWck, addressdo4Ml4t, {from: accounts[0]});
		const uint256uWVvSC = await Core_Fi_V3eY1Gmjv.totalSupply.call({from: accounts[4]});
		const boolqO03AAg = await Core_Fi_V3eY1Gmjv.approve.call(addresszUA3A8, uintU70jymt, {from: accounts[0]});

		assert.equal(boolqO03AAg, true)
		assert.equal(uint256uWVvSC, BigInt("84000000000000000000000"))
		assert.equal(uintiw7Pewm, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3SbCpntP = await Core_Fi_V3.new({from: accounts[4]});
		const uintE1nqba2 = BigInt("598")
		const addressYwCyqje = accounts[0]
		const addresseuG7r56 = accounts[3]
		const uintfPG3Go4 = BigInt("476")
		const addresslthuEh = accounts[3]
		const uintTgz4i4r = BigInt("1711")
		const addressV3h5Kdw = accounts[3]
		const addressKjLwKWJ = accounts[2]
		const addressntq7mIH = accounts[2]
		const boolBxyXA7S = await Core_Fi_V3SbCpntP.transferFrom.call(addresseuG7r56, addressYwCyqje, uintE1nqba2, {from: accounts[4]});
		const boolqKj2ohb = await Core_Fi_V3SbCpntP.transfer.call(addresslthuEh, uintfPG3Go4, {from: accounts[4]});
		const boollYq7NVN = await Core_Fi_V3SbCpntP.transferFrom.call(addressKjLwKWJ, addressV3h5Kdw, uintTgz4i4r, {from: accounts[3]});
		const uint256zvtnX0 = await Core_Fi_V3SbCpntP.balanceOf.call(addressntq7mIH, {from: accounts[2]});

		assert.equal(boolBxyXA7S, false)
		assert.equal(boollYq7NVN, false)
		assert.equal(boolqKj2ohb, true)
		assert.equal(uint256zvtnX0, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Bdy2W29 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxW2K5uH = BigInt("1955")
		const addressuVeT9uR = "0x0000000000000000000000000000000000000001"
		const addressqfLmgSA = accounts[0]
		const addressXshnUqQ = accounts[4]
		const uintjl2XgB9 = BigInt("897")
		const addressrrUvtR2 = accounts[4]
		const addressOfJBjB8 = accounts[3]
		const uintqXqWlD = BigInt("742")
		const addressfLaw92 = accounts[1]
		const addressdStl7XI = accounts[2]
		const booliTvHbpY = await Core_Fi_V3Bdy2W29.transfer.call(addressuVeT9uR, uintxW2K5uH, {from: accounts[3]});
		const uint256B8hZyeX = await Core_Fi_V3Bdy2W29.balanceOf.call(addressqfLmgSA, {from: accounts[0]});
		const uint256xhHAZU4 = await Core_Fi_V3Bdy2W29.balanceOf.call(addressXshnUqQ, {from: accounts[1]});
		const boolnUqPXrK = await Core_Fi_V3Bdy2W29.transferFrom.call(addressOfJBjB8, addressrrUvtR2, uintjl2XgB9, {from: accounts[4]});
		const boolSoEG2gF = await Core_Fi_V3Bdy2W29.transfer.call(addressfLaw92, uintqXqWlD, {from: accounts[1]});
		const uint256JpuCYJP = await Core_Fi_V3Bdy2W29.balanceOf.call(addressdStl7XI, {from: accounts[3]});
	});
})