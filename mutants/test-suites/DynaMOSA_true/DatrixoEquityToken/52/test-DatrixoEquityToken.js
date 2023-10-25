const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressZhurNIO = accounts[4]
		const uintKf7CMjs = BigInt("1677")
		const DatrixoEquityTokenFKYhaS = await DatrixoEquityToken.new(addressZhurNIO, uintKf7CMjs, {from: accounts[4]});
		const uintUWMp4ss = BigInt("865")
		const uintqN73Okj = BigInt("1497")
		const addresscsGAfaC = accounts[1]
		const addressAPhAVLj = accounts[3]
		const uint7w0fre = BigInt("1151")
		const addressENF3anz = accounts[4]
		const uintTyfYDLy = await DatrixoEquityTokenFKYhaS.setStart.call(uintUWMp4ss, {from: accounts[4]});
//		const boolLtXLHGK = await DatrixoEquityTokenFKYhaS.transferFrom.call(addressAPhAVLj, addresscsGAfaC, uintqN73Okj, {from: accounts[4]});
//		const addressarrayyQSTkKm = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
//		await DatrixoEquityTokenFKYhaS.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolGkK9lgj = await DatrixoEquityTokenFKYhaS.transfer.call(addressENF3anz, uint7w0fre, {from: accounts[2]});

		await expect(DatrixoEquityTokenFKYhaS.transferFrom.call(addressAPhAVLj, addresscsGAfaC, uintqN73Okj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnfmPUOP = accounts[0]
		const uintQ3tgcb = BigInt("856")
		const DatrixoEquityTokenWOu4xUB = await DatrixoEquityToken.new(addressnfmPUOP, uintQ3tgcb, {from: "0x0000000000000000000000000000000000000001"});
		const uintGIrKoF1 = BigInt("488")
		const uintQtwABgN = BigInt("1614")
		const addressZmTC93A = accounts[3]
		const addressVTcYzpZ = accounts[0]
		const addressbkDzzU1 = "0x0000000000000000000000000000000000000001"
		await DatrixoEquityTokenWOu4xUB.afterStartTime.call({from: accounts[4]});
		await DatrixoEquityTokenWOu4xUB.afterStartTime.call({from: accounts[4]});
		const uinteUbppQp = await DatrixoEquityTokenWOu4xUB.setStart.call(uintGIrKoF1, {from: accounts[2]});
		const boolrwmVKWU = await DatrixoEquityTokenWOu4xUB.transferFrom.call(addressVTcYzpZ, addressZmTC93A, uintQtwABgN, {from: accounts[4]});
		const boolDVwJj8 = await DatrixoEquityTokenWOu4xUB.removeShareholder.call(addressbkDzzU1, {from: accounts[0]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressJndC4C = accounts[0]
		const uintnNHGtLY = BigInt("534")
		const DatrixoEquityTokenDffgFpS = await DatrixoEquityToken.new(addressJndC4C, uintnNHGtLY, {from: accounts[0]});
//		await DatrixoEquityTokenDffgFpS.afterStartTime.call({from: accounts[1]});
//		await DatrixoEquityTokenDffgFpS.onlyOwner.call({from: accounts[3]});
//		const addressarrayfyrRmks = await DatrixoEquityTokenDffgFpS.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokenDffgFpS.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressH7fTEC4 = accounts[4]
		const uintCxUGiJ3 = BigInt("324")
		const DatrixoEquityTokenXaHU9y = await DatrixoEquityToken.new(addressH7fTEC4, uintCxUGiJ3, {from: accounts[3]});
		const uintk2GcCEE = BigInt("901")
		const addressarrayqYemQc = await DatrixoEquityTokenXaHU9y.getShareholdersArray.call({from: accounts[1]});
		const addressarrayLLoYUxu = await DatrixoEquityTokenXaHU9y.getShareholdersArray.call({from: accounts[5]});
		const addressarrayt1y011S = await DatrixoEquityTokenXaHU9y.getShareholdersArray.call({from: accounts[3]});
//		const uintJPQGmA = await DatrixoEquityTokenXaHU9y.setStart.call(uintk2GcCEE, {from: accounts[0]});

		assert.equal(addressarrayLLoYUxu, )
		assert.equal(addressarrayqYemQc, )
		assert.equal(addressarrayt1y011S, )
		await expect(DatrixoEquityTokenXaHU9y.setStart.call(uintk2GcCEE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqbaAkbK = accounts[4]
		const uintqkdxQcu = BigInt("1677")
		const DatrixoEquityTokenFKYhaS = await DatrixoEquityToken.new(addressqbaAkbK, uintqkdxQcu, {from: accounts[4]});
		const uintKIoZpzB = BigInt("865")
		const uinttSp3EM4 = BigInt("1497")
		const addressQux4KTL = accounts[1]
		const addressdeZoSV = accounts[4]
		const uintQjQ5TcG = BigInt("259")
		const uintSRAy3Xq = BigInt("1151")
		const addressafMUNi = accounts[4]
		const uintTyfYDLy = await DatrixoEquityTokenFKYhaS.setStart.call(uintKIoZpzB, {from: accounts[4]});
		const boolLtXLHGK = await DatrixoEquityTokenFKYhaS.transferFrom.call(addressdeZoSV, addressQux4KTL, uinttSp3EM4, {from: accounts[4]});
		const addressarrayyQSTkKm = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
//		const uintfpVbVgH = await DatrixoEquityTokenFKYhaS.setStart.call(uintQjQ5TcG, {from: accounts[2]});
//		const addressarrayM4TiuEz = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
//		await DatrixoEquityTokenFKYhaS.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolGkK9lgj = await DatrixoEquityTokenFKYhaS.transfer.call(addressafMUNi, uintSRAy3Xq, {from: accounts[2]});

		assert.equal(addressarrayyQSTkKm, )
		assert.equal(boolLtXLHGK, true)
		await expect(DatrixoEquityTokenFKYhaS.setStart.call(uintQjQ5TcG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressChV9pZD = accounts[4]
		const uintJtTApfB = BigInt("1677")
		const DatrixoEquityTokenFKYhaS = await DatrixoEquityToken.new(addressChV9pZD, uintJtTApfB, {from: accounts[4]});
		const uinta26vsHm = BigInt("1497")
		const addressNvCK2Hc = accounts[1]
		const addresslctMqlC = accounts[4]
		const addressd7JTB4e = accounts[3]
		const uintiHrzdt2 = BigInt("259")
		const uintqb1K5fB = BigInt("2010")
		const addressqkEkdBg = accounts[3]
		const uintZ6cbze = BigInt("1151")
		const addressGEvFIg = accounts[4]
		const boolLtXLHGK = await DatrixoEquityTokenFKYhaS.transferFrom.call(addresslctMqlC, addressNvCK2Hc, uinta26vsHm, {from: accounts[4]});
//		const boolaGNZ9uh = await DatrixoEquityTokenFKYhaS.removeShareholder.call(addressd7JTB4e, {from: accounts[4]});
//		const addressarrayyQSTkKm = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
//		const uintfpVbVgH = await DatrixoEquityTokenFKYhaS.setStart.call(uintiHrzdt2, {from: accounts[2]});
//		const boolIAyG9UZ = await DatrixoEquityTokenFKYhaS.transfer.call(addressqkEkdBg, uintqb1K5fB, {from: accounts[0]});
//		const addressarrayM4TiuEz = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
//		await DatrixoEquityTokenFKYhaS.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolGkK9lgj = await DatrixoEquityTokenFKYhaS.transfer.call(addressGEvFIg, uintZ6cbze, {from: accounts[2]});

		assert.equal(boolLtXLHGK, true)
		await expect(DatrixoEquityTokenFKYhaS.removeShareholder.call(addressd7JTB4e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressKRh4DK = accounts[4]
		const uintKeX1vuL = BigInt("1677")
		const DatrixoEquityTokenFKYhaS = await DatrixoEquityToken.new(addressKRh4DK, uintKeX1vuL, {from: accounts[4]});
		const uintyVGwzc = BigInt("865")
		const uintyDJCiAU = BigInt("991")
		const uintf9bu3Vs = BigInt("1497")
		const addresskn0ZkJw = accounts[2]
		const addressAji5yf7 = accounts[4]
		const uintNidSxLq = BigInt("747")
		const addressKopTKxg = accounts[1]
		const uinttvnW1qa = BigInt("1151")
		const addressPMlDQwB = accounts[4]
		const uintTyfYDLy = await DatrixoEquityTokenFKYhaS.setStart.call(uintyVGwzc, {from: accounts[4]});
		const uintTe2nIua = await DatrixoEquityTokenFKYhaS.setStart.call(uintyDJCiAU, {from: accounts[4]});
		const boolLtXLHGK = await DatrixoEquityTokenFKYhaS.transferFrom.call(addressAji5yf7, addresskn0ZkJw, uintf9bu3Vs, {from: accounts[4]});
		const addressarrayMW4yCP5 = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
		const addressarrayyQSTkKm = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
		const boola9mNC4S = await DatrixoEquityTokenFKYhaS.transfer.call(addressKopTKxg, uintNidSxLq, {from: accounts[4]});
//		const boolGkK9lgj = await DatrixoEquityTokenFKYhaS.transfer.call(addressPMlDQwB, uinttvnW1qa, {from: accounts[2]});

		assert.equal(addressarrayMW4yCP5, )
		assert.equal(addressarrayyQSTkKm, )
		assert.equal(boolLtXLHGK, true)
		assert.equal(boola9mNC4S, true)
		await expect(DatrixoEquityTokenFKYhaS.transfer.call(addressPMlDQwB, uinttvnW1qa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressxw06mR = accounts[4]
		const uintLTYohqe = BigInt("1677")
		const DatrixoEquityTokenFKYhaS = await DatrixoEquityToken.new(addressxw06mR, uintLTYohqe, {from: accounts[4]});
		const uintsS4t4a6 = BigInt("1497")
		const addressTJAJHyu = accounts[1]
		const addressZ8dIFem = accounts[4]
		const uintSHUbJRQ = BigInt("1358")
		const addressXER9JV9 = accounts[4]
		const addressaxCHDn = accounts[3]
		const uinttFvPIXC = BigInt("509")
		const addressNZmnBIX = accounts[2]
		const uintwdzXLSx = BigInt("1250")
		const addressaf27oSW = accounts[0]
		const uintrnsz2rR = BigInt("212")
		const uintp7ywXKd = BigInt("2047")
		const addressJQmysD = accounts[3]
		const uintDXLLUc4 = BigInt("385")
		const addressmGeseX7 = accounts[2]
		const addressp8dldE2 = accounts[4]
		const uinttySC1UY = BigInt("1151")
		const addressM0MoDWu = accounts[4]
		const boolLtXLHGK = await DatrixoEquityTokenFKYhaS.transferFrom.call(addressZ8dIFem, addressTJAJHyu, uintsS4t4a6, {from: accounts[4]});
//		const boolTw3F7Br = await DatrixoEquityTokenFKYhaS.transfer.call(addressXER9JV9, uintSHUbJRQ, {from: accounts[4]});
//		const boolaGNZ9uh = await DatrixoEquityTokenFKYhaS.removeShareholder.call(addressaxCHDn, {from: accounts[4]});
//		const boolHLMPKHe = await DatrixoEquityTokenFKYhaS.transfer.call(addressNZmnBIX, uinttFvPIXC, {from: accounts[1]});
//		const booljGhuAd7 = await DatrixoEquityTokenFKYhaS.transfer.call(addressaf27oSW, uintwdzXLSx, {from: accounts[4]});
//		const addressarrayyQSTkKm = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
//		const uintfpVbVgH = await DatrixoEquityTokenFKYhaS.setStart.call(uintrnsz2rR, {from: accounts[2]});
//		const boolIAyG9UZ = await DatrixoEquityTokenFKYhaS.transfer.call(addressJQmysD, uintp7ywXKd, {from: accounts[0]});
//		const addressarrayM4TiuEz = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[0]});
//		await DatrixoEquityTokenFKYhaS.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressarrayM1gAyt6 = await DatrixoEquityTokenFKYhaS.getShareholdersArray.call({from: accounts[3]});
//		const boolDEs5ALP = await DatrixoEquityTokenFKYhaS.transferFrom.call(addressp8dldE2, addressmGeseX7, uintDXLLUc4, {from: accounts[1]});
//		await DatrixoEquityTokenFKYhaS.afterStartTime.call({from: accounts[2]});
//		const boolGkK9lgj = await DatrixoEquityTokenFKYhaS.transfer.call(addressM0MoDWu, uinttySC1UY, {from: accounts[2]});

		assert.equal(boolLtXLHGK, true)
		await expect(DatrixoEquityTokenFKYhaS.transfer.call(addressXER9JV9, uintSHUbJRQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqqdafU = accounts[2]
		const uintrP8PUE = BigInt("948")
		const DatrixoEquityTokenDweYRd = await DatrixoEquityToken.new(addressqqdafU, uintrP8PUE, {from: accounts[4]});
		const uintthfpu2 = BigInt("194")
		const uintRj6vQMi = BigInt("1384")
		const addressZZOapQR = accounts[1]
		const uintDYCIYt0 = BigInt("1405")
		const addressI52J1yk = accounts[1]
		const addressnkhCc63 = accounts[2]
		const uintgIw4FvD = BigInt("1296")
		const uinte7axRWr = BigInt("1259")
		const addressKZUe6iy = accounts[4]
		const uintHnMYMn4 = await DatrixoEquityTokenDweYRd.setStart.call(uintthfpu2, {from: accounts[2]});
//		const uintMi3yiSc = await DatrixoEquityTokenDweYRd.setStart.call(uintRj6vQMi, {from: accounts[2]});
//		const boolHjguB4y = await DatrixoEquityTokenDweYRd.removeShareholder.call(addressZZOapQR, {from: accounts[2]});
//		await DatrixoEquityTokenDweYRd.afterStartTime.call({from: accounts[5]});
//		const boolO9QKxjn = await DatrixoEquityTokenDweYRd.transferFrom.call(addressnkhCc63, addressI52J1yk, uintDYCIYt0, {from: accounts[3]});
//		const uinti4VXft = await DatrixoEquityTokenDweYRd.setStart.call(uintgIw4FvD, {from: accounts[1]});
//		const booln5ixHt = await DatrixoEquityTokenDweYRd.transfer.call(addressKZUe6iy, uinte7axRWr, {from: accounts[0]});

		await expect(DatrixoEquityTokenDweYRd.setStart.call(uintRj6vQMi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})