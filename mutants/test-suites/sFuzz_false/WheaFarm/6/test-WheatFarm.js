const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringezWOdo = "CYnV5uq8URrAIv9edWezl8iFfbCtFvlRgaD3tZQEFEJS8wyxQRCoOs9JQxeKL7ITAxBKPgR"
		const stringMuWazk = "DpE4OWwx3KpN8vntOsxOo7QE3Pap3npKJ6Jo46iVbCSl5Os"
		const uintS9EzWzE = BigInt("182")
		const WheatFarmY5OPR8f = await WheatFarm.new(stringezWOdo, stringMuWazk, uintS9EzWzE, {from: accounts[2]});
		const uinthfNBwcK = BigInt("852")
		const addresshkkFcRX = accounts[2]
		const addressWpLm0Bb = accounts[0]
//		const boolbeyg8W6 = await WheatFarmY5OPR8f.transfer.call(addresshkkFcRX, uinthfNBwcK, {from: accounts[0]});
//		const uint8HOBM4us = await WheatFarmY5OPR8f.decimals.call({from: accounts[2]});
//		const uintO1rlHh = await WheatFarmY5OPR8f.balanceOf.call(addressWpLm0Bb, {from: accounts[0]});

		await expect(WheatFarmY5OPR8f.transfer.call(addresshkkFcRX, uinthfNBwcK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringnQ8X6X = "FvzPWcbwWDkJ2"
		const stringeoc2TSV = "utyg7rHzfyX9JVlgvkY7f4632MBlhIqFQlDc36P3EPGsTJ7Ndy6a7bpAJXYlCJblkYmSCe35"
		const uintPQ8l1Aw = BigInt("1603")
		const WheatFarmLGQ6y28 = await WheatFarm.new(stringnQ8X6X, stringeoc2TSV, uintPQ8l1Aw, {from: accounts[5]});
		const uintnKGDpeJ = BigInt("38")
		const addressyLNtFnA = accounts[0]
		const addressRMSmPDp = accounts[3]
		const stringDtXExnu = await WheatFarmLGQ6y28.symbol.call({from: accounts[1]});
//		const bool2Z2l1G = await WheatFarmLGQ6y28.transferFrom.call(addressRMSmPDp, addressyLNtFnA, uintnKGDpeJ, {from: accounts[3]});

		assert.equal(stringDtXExnu, "utyg7rHzfyX9JVlgvkY7f4632MBlhIqFQlDc36P3EPGsTJ7Ndy6a7bpAJXYlCJblkYmSCe35")
		await expect(WheatFarmLGQ6y28.transferFrom.call(addressRMSmPDp, addressyLNtFnA, uintnKGDpeJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCUx5zIW = "FqGuIVLlmbJ9pegm"
		const stringaTYt73m = "VXAE2wqOcQTMo95N5L6AAfOb75cYPDmouDzr0mulgCVFysA4"
		const uintcExFy2d = BigInt("1769")
		const WheatFarm5dg7N3 = await WheatFarm.new(stringCUx5zIW, stringaTYt73m, uintcExFy2d, {from: accounts[1]});
		const addressuXuh6aL = "0x0000000000000000000000000000000000000001"
		const addressCPhppqa = accounts[3]
		const stringR7hxnbd = await WheatFarm5dg7N3.symbol.call({from: accounts[0]});
//		const booleQoUY67 = await WheatFarm5dg7N3.transferownership.call(addressuXuh6aL, {from: accounts[0]});
//		const uintgqTFgpZ = await WheatFarm5dg7N3.balanceOf.call(addressCPhppqa, {from: accounts[2]});

		assert.equal(stringR7hxnbd, "VXAE2wqOcQTMo95N5L6AAfOb75cYPDmouDzr0mulgCVFysA4")
		await expect(WheatFarm5dg7N3.transferownership.call(addressuXuh6aL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringKO7Ifav = "gIUpoTI4"
		const stringMuzVqH2 = "PWcjK7WT24xcsU59xTfygKl3Ivdz9GPu6IdvM4nJPamm65OE1kWdwOl"
		const uintHtlZPGt = BigInt("188")
		const WheatFarmVHk3WbX = await WheatFarm.new(stringKO7Ifav, stringMuzVqH2, uintHtlZPGt, {from: accounts[3]});
		const uintOxu7RIN = BigInt("126")
		const addressyTwYCKR = accounts[3]
		const uintfMpoD4R = BigInt("1918")
		const addressK1nz1Xs = accounts[2]
		const uintL09xC9s = BigInt("449")
		const addressQgqiCKR = accounts[5]
		const addressbCOfyHl = "0x0000000000000000000000000000000000000001"
		const bool4y5Mnp = await WheatFarmVHk3WbX.approve.call(addressyTwYCKR, uintOxu7RIN, {from: accounts[1]});
		const uint8qZIoqhP = await WheatFarmVHk3WbX.decimals.call({from: accounts[5]});
//		const boolbL0KG9n = await WheatFarmVHk3WbX.decreaseAllowance.call(addressK1nz1Xs, uintfMpoD4R, {from: accounts[5]});
//		const boollT6MSR = await WheatFarmVHk3WbX.transferFrom.call(addressbCOfyHl, addressQgqiCKR, uintL09xC9s, {from: accounts[2]});

		assert.equal(bool4y5Mnp, true)
		assert.equal(uint8qZIoqhP, BigInt("18"))
		await expect(WheatFarmVHk3WbX.decreaseAllowance.call(addressK1nz1Xs, uintfMpoD4R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrH7X96U = "F38RbhigcqMyRdyqi2PNZKRimEDDcRpzeDtQtfThlCgifxP3ySJoCXGkmd7QEMtMQnf6bHFS9NBCuoB94Qx"
		const stringnuPPkY3 = "RD"
		const uintFx0mrW = BigInt("130")
		const WheatFarmCLBY3DX = await WheatFarm.new(stringrH7X96U, stringnuPPkY3, uintFx0mrW, {from: accounts[1]});
		const uintBf7XhBn = BigInt("1850")
		const addresswwb6PTW = accounts[4]
		const addressq1ac7p5 = accounts[2]
		const uint8AU2mU = BigInt("744")
		const addresslESu1Zt = accounts[2]
//		const boolDTyituY = await WheatFarmCLBY3DX.approveAndCall.call(addresswwb6PTW, uintBf7XhBn, {from: accounts[3]});
//		const uintTEXatq = await WheatFarmCLBY3DX.balanceOf.call(addressq1ac7p5, {from: accounts[2]});
//		const stringnEp4o7S = await WheatFarmCLBY3DX.symbol.call({from: accounts[3]});
//		const bool5bS2iI = await WheatFarmCLBY3DX.approve.call(addresslESu1Zt, uint8AU2mU, {from: accounts[3]});

		await expect(WheatFarmCLBY3DX.approveAndCall.call(addresswwb6PTW, uintBf7XhBn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringwFySxus = "jpME8xVbbWR79MiZDIoRDv7RCwkZwoMNfcCWalPzKFrbiSXH49tOBzUkWGDJSXdNuyaGtykrRs43KDGUWrW9p3ic"
		const stringi1AGQKQ = "pYsakAAQQOu2RVORfOtBAxOnNSgoDJk4fiVAx9Op9jaHvCBDZMEb80r3C8ynR8XypWbtgwlfBvgalBJi33FAEsTNCq"
		const uintDorgss7 = BigInt("1862")
		const WheatFarmkfhPsTp = await WheatFarm.new(stringwFySxus, stringi1AGQKQ, uintDorgss7, {from: "0x0000000000000000000000000000000000000001"});
		const uinthPjEV5i = BigInt("858")
		const addressWNZH6K = "0x0000000000000000000000000000000000000001"
		const addressDHjox5Y = accounts[1]
		const addressDDn2Q6W = accounts[0]
		const uintW3SsFNQ = BigInt("1333")
		const addresszqgx5MV = accounts[3]
		const uint3EHsbq = BigInt("96")
		const addressfMpQYbz = accounts[4]
		const uintoy8JmYh = BigInt("475")
		const addressazMNGJL = accounts[0]
		const booluQkhPST = await WheatFarmkfhPsTp.increaseAllowance.call(addressWNZH6K, uinthPjEV5i, {from: accounts[3]});
		const uintL9Aj6ot = await WheatFarmkfhPsTp.allowance.call(addressDDn2Q6W, addressDHjox5Y, {from: accounts[3]});
		const boolB9mFySa = await WheatFarmkfhPsTp.increaseAllowance.call(addresszqgx5MV, uintW3SsFNQ, {from: accounts[5]});
		const booliCQhiyo = await WheatFarmkfhPsTp.decreaseAllowance.call(addressfMpQYbz, uint3EHsbq, {from: accounts[2]});
		const boolsMiK2Cy = await WheatFarmkfhPsTp.approve.call(addressazMNGJL, uintoy8JmYh, {from: accounts[1]});
		const string3YRJ0R = await WheatFarmkfhPsTp.symbol.call({from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringnQ8X6X = "FvzPWcbwWDkJ2"
		const stringeoc2TSV = "utyg7rHzfyX9JVlgvkY7f4632MBlhIqFQlDc36P3EPGsTJ7Ndy6a7bpAJXYlCJblkYmSCe35"
		const uintnczSQo = BigInt("1603")
		const WheatFarmLGQ6y28 = await WheatFarm.new(stringnQ8X6X, stringeoc2TSV, uintnczSQo, {from: accounts[5]});
		const uintc47GuZD = BigInt("0")
		const addressqJDhXCJ = accounts[1]
		const addressRIyuch = accounts[5]
		const addresszR2xmNY = accounts[3]
		const boolaRwzQy7 = await WheatFarmLGQ6y28.transfer.call(addressqJDhXCJ, uintc47GuZD, {from: accounts[4]});
		const uintppP9QEy = await WheatFarmLGQ6y28.balanceOf.call(addressRIyuch, {from: accounts[0]});
		const uintEQ06hnT = await WheatFarmLGQ6y28.balanceOf.call(addresszR2xmNY, {from: accounts[2]});

		assert.equal(boolaRwzQy7, true)
		assert.equal(uintEQ06hnT, BigInt("0"))
		assert.equal(uintppP9QEy, BigInt("1603000000000000000000"))
	});
})