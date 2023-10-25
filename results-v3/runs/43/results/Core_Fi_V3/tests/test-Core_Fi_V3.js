const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3NteqTY9 = await Core_Fi_V3.new({from: accounts[0]});
		const addressv1Uo996 = accounts[3]
		const uintalDaF6V = BigInt("925")
		const addressiZhHkiR = accounts[2]
		const uint256ThTu2R = await Core_Fi_V3NteqTY9.balanceOf.call(addressv1Uo996, {from: accounts[0]});
		const boolPgKdsqV = await Core_Fi_V3NteqTY9.approve.call(addressiZhHkiR, uintalDaF6V, {from: accounts[3]});

		assert.equal(boolPgKdsqV, true)
		assert.equal(uint256ThTu2R, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3nFiYk7u = await Core_Fi_V3.new({from: accounts[3]});
		const uintbYpHNeR = BigInt("165")
		const addressNjCZ00g = accounts[1]
		const addressEMVgFyH = accounts[3]
		const booldesZXZ1 = await Core_Fi_V3nFiYk7u.transfer.call(addressNjCZ00g, uintbYpHNeR, {from: accounts[3]});
		const uint256mwu8PV = await Core_Fi_V3nFiYk7u.balanceOf.call(addressEMVgFyH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldesZXZ1, true)
		assert.equal(uint256mwu8PV, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3qmMsxkV = await Core_Fi_V3.new({from: accounts[1]});
		const addressZQWG0m = accounts[3]
		const addressRVFVhY9 = accounts[4]
		const uintOUv5bXr = BigInt("594")
		const addressEdkyco2 = accounts[3]
		const uintHmqEGv8 = BigInt("1302")
		const addressLOBZa9I = "0x0000000000000000000000000000000000000001"
		const addresssOUetvR = accounts[3]
		const addressLKazRll = accounts[2]
		const uintdm8eYx6 = await Core_Fi_V3qmMsxkV.allowance.call(addressRVFVhY9, addressZQWG0m, {from: accounts[2]});
		const boolW07oSL6 = await Core_Fi_V3qmMsxkV.transfer.call(addressEdkyco2, uintOUv5bXr, {from: accounts[1]});
		const booljlZRhnq = await Core_Fi_V3qmMsxkV.transfer.call(addressLOBZa9I, uintHmqEGv8, {from: accounts[1]});
		const uint256MxXkYp5 = await Core_Fi_V3qmMsxkV.totalSupply.call({from: accounts[5]});
		const uintTER2hGU = await Core_Fi_V3qmMsxkV.allowance.call(addressLKazRll, addresssOUetvR, {from: accounts[3]});

		assert.equal(boolW07oSL6, true)
		assert.equal(booljlZRhnq, true)
		assert.equal(uint256MxXkYp5, BigInt("84000000000000000000000"))
		assert.equal(uintTER2hGU, BigInt("0"))
		assert.equal(uintdm8eYx6, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3dV2jxjx = await Core_Fi_V3.new({from: accounts[1]});
		const uintvaa5CEf = BigInt("1527")
		const addressdEanr17 = accounts[3]
		const uintDkg83Iz = BigInt("582")
		const addressqyYKhkI = accounts[2]
		const uintGJnltVp = BigInt("1370")
		const addressCOlsfz = accounts[1]
		const addressqWFh2EU = accounts[2]
		const uintCDnSqUK = BigInt("461")
		const addressLFdZx88 = accounts[5]
		const addressXDDuOKl = accounts[2]
		const boolsZ1brBS = await Core_Fi_V3dV2jxjx.approve.call(addressdEanr17, uintvaa5CEf, {from: accounts[1]});
		const boolkvxkJ5q = await Core_Fi_V3dV2jxjx.approve.call(addressqyYKhkI, uintDkg83Iz, {from: accounts[3]});
		const booluRwuKw = await Core_Fi_V3dV2jxjx.transferFrom.call(addressqWFh2EU, addressCOlsfz, uintGJnltVp, {from: "0x0000000000000000000000000000000000000001"});
		const boolPBGOKFT = await Core_Fi_V3dV2jxjx.transferFrom.call(addressXDDuOKl, addressLFdZx88, uintCDnSqUK, {from: accounts[2]});

		assert.equal(boolPBGOKFT, false)
		assert.equal(boolkvxkJ5q, true)
		assert.equal(boolsZ1brBS, true)
		assert.equal(booluRwuKw, false)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3sDkGnHP = await Core_Fi_V3.new({from: accounts[3]});
		const addressFuHLe7h = accounts[0]
		const addressmz9O9H2 = accounts[1]
		const uintzMnDVP1 = BigInt("1864")
		const addressfd23TJG = accounts[3]
		const addressEWRLBzl = accounts[2]
		const addressb92HztM = accounts[0]
		const addressdImaN6C = accounts[5]
		const uintbeXCqGk = await Core_Fi_V3sDkGnHP.allowance.call(addressmz9O9H2, addressFuHLe7h, {from: accounts[0]});
		const boolKbv9pqY = await Core_Fi_V3sDkGnHP.transfer.call(addressfd23TJG, uintzMnDVP1, {from: accounts[4]});
		const uintoGTuLLU = await Core_Fi_V3sDkGnHP.allowance.call(addressb92HztM, addressEWRLBzl, {from: accounts[0]});
		const uint256u58U9MA = await Core_Fi_V3sDkGnHP.balanceOf.call(addressdImaN6C, {from: accounts[4]});

		assert.equal(boolKbv9pqY, false)
		assert.equal(uint256u58U9MA, BigInt("0"))
		assert.equal(uintbeXCqGk, BigInt("0"))
		assert.equal(uintoGTuLLU, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3AJLR7eB = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthhqoLn1 = BigInt("240")
		const addressHz8z8o9 = accounts[1]
		const uintiNPWqr = BigInt("1831")
		const addressQKINe1 = accounts[2]
		const addresssazcnX2 = accounts[0]
		const uintQQCMJjx = BigInt("1469")
		const addressjEOGbvX = accounts[2]
		const addressPoRXbkL = accounts[5]
		const uintXIjag8p = BigInt("188")
		const addressyVozdef = accounts[4]
		const addressr2kmcjB = accounts[3]
		const boolfEJjk4 = await Core_Fi_V3AJLR7eB.transfer.call(addressHz8z8o9, uinthhqoLn1, {from: accounts[4]});
		const uint256qSoOp39 = await Core_Fi_V3AJLR7eB.totalSupply.call({from: accounts[3]});
		const boolh9b8yPk = await Core_Fi_V3AJLR7eB.transferFrom.call(addresssazcnX2, addressQKINe1, uintiNPWqr, {from: accounts[5]});
		const boolczxEHyp = await Core_Fi_V3AJLR7eB.transferFrom.call(addressPoRXbkL, addressjEOGbvX, uintQQCMJjx, {from: accounts[3]});
		const boolARgEQYY = await Core_Fi_V3AJLR7eB.transferFrom.call(addressr2kmcjB, addressyVozdef, uintXIjag8p, {from: "0x0000000000000000000000000000000000000001"});
	});
})