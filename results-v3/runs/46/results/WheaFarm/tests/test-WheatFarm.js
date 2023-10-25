const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringJpfrHSY = "OafCFNaDkFYnoDNvo"
		const stringyqpX1PG = "Qy9p9Oe9T4cjBtsQNjbmBW8nYh9v9hrvhOlFfmdwJdDAVyXLVr"
		const uintDqWZ1L = BigInt("829")
		const WheatFarm8AjBC6 = await WheatFarm.new(stringJpfrHSY, stringyqpX1PG, uintDqWZ1L, {from: accounts[3]});
		const addresssQCcqth = accounts[1]
		const uintdAHrGFN = BigInt("1467")
		const addressaVInPe = accounts[4]
		const addressPoKuBg = accounts[3]
		const uintce50nzi = BigInt("1378")
		const addressFo8LZqN = accounts[3]
		const addressKbbKJCW = accounts[5]
		const addressHztbyF1 = accounts[0]
		const addressiOU47ly = accounts[4]
		const bool0P9yvd = await WheatFarm8AjBC6.transferownership.call(addresssQCcqth, {from: accounts[1]});
		const boolllMxYQ7 = await WheatFarm8AjBC6.transferFrom.call(addressPoKuBg, addressaVInPe, uintdAHrGFN, {from: accounts[1]});
		const boollYodqVZ = await WheatFarm8AjBC6.transferFrom.call(addressKbbKJCW, addressFo8LZqN, uintce50nzi, {from: accounts[1]});
		const uintIYSZIn = await WheatFarm8AjBC6.allowance.call(addressiOU47ly, addressHztbyF1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarm8AjBC6.transferownership.call(addresssQCcqth, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringzvBLj1S = "fBnQYIz9GDTXugAx7dy1P9iIDCneFYc8Kbqp9g"
		const stringrmuOehc = "f6vyRGB2bkroR8TQwvNTOErsuDq5pkSKqf2MIDcbaipGuiLFvXXdvOFaXUl3MXKzOyBY"
		const uintV88lSiF = BigInt("514")
		const WheatFarmRDQc2bu = await WheatFarm.new(stringzvBLj1S, stringrmuOehc, uintV88lSiF, {from: accounts[3]});
		const addressIboNfM = accounts[3]
		const uintx4NvbBj = BigInt("137")
		const addresslAMvsBg = accounts[2]
		const uintR7fyFqA = BigInt("1459")
		const addressHrbXv4c = accounts[2]
		const addressBJxK0ua = accounts[0]
		const uintNavnPe0 = BigInt("1557")
		const addresszUs2d8 = accounts[0]
		const uintfqIeaBC = await WheatFarmRDQc2bu.totalSupply.call({from: accounts[2]});
		const uintbsYXoUj = await WheatFarmRDQc2bu.balanceOf.call(addressIboNfM, {from: accounts[0]});
		const boolmfm2XTI = await WheatFarmRDQc2bu.transfer.call(addresslAMvsBg, uintx4NvbBj, {from: accounts[4]});
		const boolQCa0JI2 = await WheatFarmRDQc2bu.transferFrom.call(addressBJxK0ua, addressHrbXv4c, uintR7fyFqA, {from: "0x0000000000000000000000000000000000000001"});
		const boolUaiv1JK = await WheatFarmRDQc2bu.decreaseAllowance.call(addresszUs2d8, uintNavnPe0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintbsYXoUj, BigInt("514000000000000000000"))
		assert.equal(uintfqIeaBC, BigInt("514000000000000000000"))
		await expect(WheatFarmRDQc2bu.transfer.call(addresslAMvsBg, uintx4NvbBj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringa3cefw0 = "zdEGZYHqJbLCK8"
		const stringT1P3Jqv = "OntmU6Bj7BFBkmMinxEM5mPQD5dcjCUlf3FvKHATTQk7vR"
		const uintSAT7x6 = BigInt("67")
		const WheatFarmgZ5Zbw = await WheatFarm.new(stringa3cefw0, stringT1P3Jqv, uintSAT7x6, {from: accounts[1]});
		const uintDi7L7x8 = BigInt("519")
		const addressmlGFkeb = accounts[1]
		const uintCsyCuD = BigInt("2041")
		const addressLuTvnqF = accounts[0]
		const addressnXy9ZI0 = accounts[4]
		const uintgDpUbkz = BigInt("1976")
		const address7hijPm = accounts[2]
		const boolWHZayzV = await WheatFarmgZ5Zbw.approveAndCall.call(addressmlGFkeb, uintDi7L7x8, {from: accounts[3]});
		const boolVDmt2g6 = await WheatFarmgZ5Zbw.transferFrom.call(addressnXy9ZI0, addressLuTvnqF, uintCsyCuD, {from: "0x0000000000000000000000000000000000000001"});
		const boolNAyy02M = await WheatFarmgZ5Zbw.decreaseAllowance.call(address7hijPm, uintgDpUbkz, {from: accounts[1]});

		await expect(WheatFarmgZ5Zbw.approveAndCall.call(addressmlGFkeb, uintDi7L7x8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringSVbesIs = "wnreHH2Sr7dPLlF4qFqB6rpSAu8XJSJbMejHs4udTd4zNexlv"
		const stringqUl51G = "SmLotL6qoomyEg7JITAuMXHQDitb4W2o9yldt7L"
		const uintzJxnwIC = BigInt("1155")
		const WheatFarmwOf45dj = await WheatFarm.new(stringSVbesIs, stringqUl51G, uintzJxnwIC, {from: accounts[3]});
		const uintrH61xy6 = BigInt("1398")
		const addressEsNfGs8 = accounts[1]
		const uintrUxcTSf = BigInt("2033")
		const addressyxc2uMD = accounts[4]
		const addressML5cPw2 = accounts[2]
		const uinthFpJQ7h = BigInt("535")
		const addressn0OzcrI = accounts[2]
		const stringFE4zhg9 = await WheatFarmwOf45dj.name.call({from: accounts[0]});
		const boolNoaA8Nk = await WheatFarmwOf45dj.increaseAllowance.call(addressEsNfGs8, uintrH61xy6, {from: accounts[2]});
		const boolvyuCEyr = await WheatFarmwOf45dj.transferFrom.call(addressML5cPw2, addressyxc2uMD, uintrUxcTSf, {from: accounts[5]});
		const boolOsTFKJq = await WheatFarmwOf45dj.increaseAllowance.call(addressn0OzcrI, uinthFpJQ7h, {from: accounts[4]});

		assert.equal(stringFE4zhg9, "wnreHH2Sr7dPLlF4qFqB6rpSAu8XJSJbMejHs4udTd4zNexlv")
		await expect(WheatFarmwOf45dj.increaseAllowance.call(addressEsNfGs8, uintrH61xy6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringtDhRuf6 = "W0XweiRReblGLSTKtsA88hmdQPRi68sk56c53vxF9fu3k6dTf9jKwQ5rWXlwWaQ1KhnM3bBe7cLzEeXaw"
		const stringK9Z6jlS = "xWi2825fAVtIGMCivu4Adc2WvDrCCuLQuigqp8dfFKkbJGz8FSylamuQ3yzM5tGFQ"
		const uintqz3pMS9 = BigInt("1413")
		const WheatFarmMRWRq04 = await WheatFarm.new(stringtDhRuf6, stringK9Z6jlS, uintqz3pMS9, {from: accounts[4]});
		const uintNRJptzT = BigInt("519")
		const addressh0lws3I = accounts[1]
		const uintFhMpqch = BigInt("993")
		const addresso3uPgAf = accounts[0]
		const boolqGR0hl2 = await WheatFarmMRWRq04.approve.call(addressh0lws3I, uintNRJptzT, {from: accounts[4]});
		const uintFBSboCN = await WheatFarmMRWRq04.totalSupply.call({from: accounts[3]});
		const boolEUgNb4N = await WheatFarmMRWRq04.approveAndCall.call(addresso3uPgAf, uintFhMpqch, {from: accounts[1]});

		assert.equal(boolqGR0hl2, true)
		assert.equal(uintFBSboCN, BigInt("1413000000000000000000"))
		await expect(WheatFarmMRWRq04.approveAndCall.call(addresso3uPgAf, uintFhMpqch, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringzvBLj1S = "fBnQYIz9GDTXugAx7dy1P9iIDCneFYc8Kbqp9g"
		const stringrmuOehc = "f6vyRGB2bkroR8TQwvNTOErsuDq5pkSKqf2MIDcbaipGuiLFvXXdvOFaXUl3MXKzOyBY"
		const uinteAPtqky = BigInt("514")
		const WheatFarmRDQc2bu = await WheatFarm.new(stringzvBLj1S, stringrmuOehc, uinteAPtqky, {from: accounts[3]});
		const uintuWM2ko = BigInt("1439")
		const addressVbFCSGj = accounts[0]
		const address2IpGZ1 = accounts[4]
		const uintwjYiWqd = BigInt("137")
		const addressCTitZu8 = accounts[3]
		const uintsl6M9QA = BigInt("1459")
		const addressEJOXHX = accounts[2]
		const addressH6pvFNy = accounts[0]
		const uintfqIeaBC = await WheatFarmRDQc2bu.totalSupply.call({from: accounts[2]});
		const boolbV2ck2r = await WheatFarmRDQc2bu.approve.call(addressVbFCSGj, uintuWM2ko, {from: accounts[1]});
		const uintbsYXoUj = await WheatFarmRDQc2bu.balanceOf.call(address2IpGZ1, {from: accounts[0]});
		const boolmfm2XTI = await WheatFarmRDQc2bu.transfer.call(addressCTitZu8, uintwjYiWqd, {from: accounts[4]});
		const boolQCa0JI2 = await WheatFarmRDQc2bu.transferFrom.call(addressH6pvFNy, addressEJOXHX, uintsl6M9QA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbV2ck2r, true)
		assert.equal(uintbsYXoUj, BigInt("0"))
		assert.equal(uintfqIeaBC, BigInt("514000000000000000000"))
		await expect(WheatFarmRDQc2bu.transfer.call(addressCTitZu8, uintwjYiWqd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringzvBLj1S = "fBnQYIz9GDTXugAx7dy1P9iIDCneFYc8Kbqp9g"
		const stringrmuOehc = "f6vyRGB2bkroR8TQwvNTOErsuDq5pkSKqf2MIDcbaipGuiLFvXXdvOFaXUl3MXKzOyBY"
		const uinto2TRJR = BigInt("514")
		const WheatFarmRDQc2bu = await WheatFarm.new(stringzvBLj1S, stringrmuOehc, uinto2TRJR, {from: accounts[3]});
		const uintzbvvhPf = BigInt("1774")
		const addressiY30iGo = accounts[2]
		const addresswzZXt1 = accounts[4]
		const uintOEwL6OV = BigInt("137")
		const addressNvRIzy = accounts[2]
		const uintGMXUSn8 = BigInt("1459")
		const addressEWClIxn = accounts[2]
		const addressXnMzgSZ = accounts[0]
		const uintfqIeaBC = await WheatFarmRDQc2bu.totalSupply.call({from: accounts[2]});
		const boolTJx5BN2 = await WheatFarmRDQc2bu.approveAndCall.call(addressiY30iGo, uintzbvvhPf, {from: accounts[3]});
		const uintbsYXoUj = await WheatFarmRDQc2bu.balanceOf.call(addresswzZXt1, {from: accounts[0]});
		const boolmfm2XTI = await WheatFarmRDQc2bu.transfer.call(addressNvRIzy, uintOEwL6OV, {from: accounts[4]});
		const boolQCa0JI2 = await WheatFarmRDQc2bu.transferFrom.call(addressXnMzgSZ, addressEWClIxn, uintGMXUSn8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTJx5BN2, true)
		assert.equal(uintbsYXoUj, BigInt("0"))
		assert.equal(uintfqIeaBC, BigInt("514000000000000000000"))
		await expect(WheatFarmRDQc2bu.transfer.call(addressNvRIzy, uintOEwL6OV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringo7qZE2 = "Auj8moKqY8R8Ngzo7lf0SrVIPwlSQzsafCsZskuHRMR79jJ7KpOb1Lb9tDRWPfwxKbfYqZ1TAeAebxvbiPkJIsVjTqkhu"
		const stringby2nSx = "C5t2ez4cndl8UOjsLWUHgPMvC2l521Ooqu7k1NdBqmBbGe6K6mUkMJVGpJCuqMyBXyedRUwaCYqNW"
		const uintGFGNOR7 = BigInt("205")
		const WheatFarmUhYhDWW = await WheatFarm.new(stringo7qZE2, stringby2nSx, uintGFGNOR7, {from: "0x0000000000000000000000000000000000000001"});
		const uintCnJplaq = BigInt("1077")
		const addressJ1b5r7x = accounts[4]
		const uintM5mUkLz = BigInt("1791")
		const addressq8WlJFQ = accounts[2]
		const booldkKXi7P = await WheatFarmUhYhDWW.approve.call(addressJ1b5r7x, uintCnJplaq, {from: accounts[4]});
		const boolwOPWGk = await WheatFarmUhYhDWW.transfer.call(addressq8WlJFQ, uintM5mUkLz, {from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringOrauXwH = "xNvceI8cD0Kwhc1faLxz4Ylg67GgjFGIT7BOeYerWZsaiDizoTTK545"
		const stringJAoz1Ln = "Mz6SiRvtzPxCbGuYITVv5WEl38Qi9C5fM8fyrJH83wyBcCKNmMZVEqotZL8hN"
		const uintZKyGCFy = BigInt("1889")
		const WheatFarmkQRD6L0 = await WheatFarm.new(stringOrauXwH, stringJAoz1Ln, uintZKyGCFy, {from: accounts[4]});
		const uintnHXE8Eo = BigInt("0")
		const addressakPsk5D = accounts[3]
		const addressca6bGx6 = accounts[4]
		const addressUnyiRFp = accounts[0]
		const addressl83CRD6 = "0x0000000000000000000000000000000000000001"
		const boolBkAy10c = await WheatFarmkQRD6L0.transferFrom.call(addressca6bGx6, addressakPsk5D, uintnHXE8Eo, {from: accounts[2]});
		const uintq3o8ejg = await WheatFarmkQRD6L0.allowance.call(addressl83CRD6, addressUnyiRFp, {from: accounts[4]});

		assert.equal(boolBkAy10c, true)
		assert.equal(uintq3o8ejg, BigInt("0"))
	});
})