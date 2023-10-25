const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringwGm8eqN = "LcnrOgLd8u"
		const stringGa8fnbi = "Rf8QLzzOJE8iBB2TSF7YRWlANLSMCpB0CGw6kEjXXrdLOn754"
		const uintoe6Wps = BigInt("86")
		const XenoFelixqZkX8ig = await XenoFelix.new(stringwGm8eqN, stringGa8fnbi, uintoe6Wps, {from: accounts[1]});
		const uintv1PuL6z = BigInt("557")
		const addresslxWKk9a = accounts[3]
		const addressM3RpliP = accounts[5]
		const uint5AsdmM = BigInt("1555")
		const uintf4XViGr = BigInt("777")
		const addressgOjmh5F = accounts[1]
		const boolzqer7PP = await XenoFelixqZkX8ig.transferFrom.call(addressM3RpliP, addresslxWKk9a, uintv1PuL6z, {from: "0x0000000000000000000000000000000000000001"});
		const boolQZoIuKV = await XenoFelixqZkX8ig.transferWithLock.call(addressgOjmh5F, uintf4XViGr, uint5AsdmM, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixCn3LuzC = await XenoFelix.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRJp4dn5 = accounts[1]
		const addresst8YqFqo = accounts[2]
		const boolDt64fGD = await XenoFelixCn3LuzC.acceptOwnership.call({from: accounts[1]});
		const addressnMbYHQa = await XenoFelixCn3LuzC.removePauser.call(addressRJp4dn5, {from: accounts[2]});
		const bool93zC6V = await XenoFelixCn3LuzC.freezeAccount.call(addresst8YqFqo, {from: accounts[0]});
		await XenoFelixCn3LuzC.onlyNewOwner.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringxuByD41 = "YP2BkBRvxaZ6X1eg5kmVVBUTBUsqKiWraBhABvLXyqOZF5XODtWSXvTUtr62JFfe"
		const stringq4ilD2m = "4TvGyDfQfePOYYycg2z3Uwc1Jpt9DX4Q7d6HqLffYLMVGqptVbCjq6IC37nM"
		const uintiCj6bkf = BigInt("210")
		const XenoFelixZDTYwrH = await XenoFelix.new(stringxuByD41, stringq4ilD2m, uintiCj6bkf, {from: accounts[3]});
		const uintkhjonZW = BigInt("1566")
		const addressud6go6 = accounts[3]
		const uintUwjRwvo = BigInt("897")
		const addressQaPgaid = accounts[4]
		const addressXk3YRxB = accounts[0]
		const addresstyDJ0Kj = accounts[4]
		const boolJf8d0wI = await XenoFelixZDTYwrH.transfer.call(addressud6go6, uintkhjonZW, {from: accounts[2]});
		const booldALUkK8 = await XenoFelixZDTYwrH.transferFrom.call(addressXk3YRxB, addressQaPgaid, uintUwjRwvo, {from: accounts[2]});
		const uint256ZMQLT5H = await XenoFelixZDTYwrH.balanceOf.call(addresstyDJ0Kj, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringzuByq29 = "rY0s6SmkPnCuA3Ld5slpTC70YBCSKVJvrGdIDHuhOnmgs9Z"
		const stringaupMjCe = "6Ttwx7QB63eHvdvr7cUiGAoqNFrBOT8psjTL59vqSOrqH"
		const uintN2tA34 = BigInt("12")
		const uintjgc4sEP = BigInt("244")
		const XenoFelixJP8lGl = await XenoFelix.new(stringzuByq29, stringaupMjCe, uintN2tA34, uintjgc4sEP, {from: accounts[1]});
		const addressj2XjshM = accounts[1]
		const uintSt6TNel = BigInt("1289")
		const addressuCbTFQ0 = accounts[4]
		const boolTXvcXa9 = await XenoFelixJP8lGl.freezeAccount.call(addressj2XjshM, {from: accounts[3]});
		await XenoFelixJP8lGl.whenNotPaused.call({from: accounts[4]});
		await XenoFelixJP8lGl.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressfSkWzHd = await XenoFelixJP8lGl.burnFrom.call(addressuCbTFQ0, uintSt6TNel, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixJP8lGl.unpause.call({from: accounts[1]});

		await expect(XenoFelixJP8lGl.freezeAccount.call(addressj2XjshM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const string1zPfi3 = "LMdLcBGIcMS1t1xPQ53iR"
		const stringLHIfiu3 = "6pvJAivW5Xg68jE5xdEVinRToHUpLs4RN3p4OEYMwMu436bhdjmgLCMsPTFqI5g7e5y"
		const uintTulRR9z = BigInt("682")
		const uintphxtBNq = BigInt("64")
		const XenoFelixC0loSo9 = await XenoFelix.new(string1zPfi3, stringLHIfiu3, uintTulRR9z, uintphxtBNq, {from: accounts[0]});
		const uintRTC85XQ = BigInt("1726")
		const addressAPJtNp2 = accounts[1]
		const addressQMj4EZS = accounts[4]
		const addressINUmwvL = accounts[2]
		const uintk3ofzWD = BigInt("1365")
		const addresszRSJewq = accounts[0]
		const addressTstcJ7d = await XenoFelixC0loSo9.burnFrom.call(addressAPJtNp2, uintRTC85XQ, {from: accounts[1]});
		await XenoFelixC0loSo9.renouncePauser.call({from: accounts[1]});
		const addressEzIdqg = await XenoFelixC0loSo9.addPauser.call(addressQMj4EZS, {from: accounts[2]});
		const addressBtBmpKm = await XenoFelixC0loSo9.addPauser.call(addressINUmwvL, {from: accounts[1]});
		const boollbo8fli = await XenoFelixC0loSo9.unlock.call(addresszRSJewq, uintk3ofzWD, {from: accounts[3]});

		await expect(XenoFelixC0loSo9.burnFrom.call(addressAPJtNp2, uintRTC85XQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringCUaKvFl = "4LEEKUOGqxJst5pgynXwhV6PMZVz9sC7hI7I7CUGyGPASw6xKosf"
		const stringvaCi4vw = "Auw2fifNQu5OfTdPEvm6eltPwffoOBCzACNFwLXiBbdiolE9wSh8seE8btNIrqdIOvMqOHjAStpBYarAhrkBGjdeF"
		const uint9jCRhe = BigInt("221")
		const XenoFelixOBqbJ3H = await XenoFelix.new(stringCUaKvFl, stringvaCi4vw, uint9jCRhe, {from: accounts[4]});
		const addressx5nW17E = accounts[4]
		const uintjmoKTOt = BigInt("717")
		const addressZtUEmE2 = accounts[3]
		const uintAeyy6vw = BigInt("1542")
		await XenoFelixOBqbJ3H.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressa3mGGuA = await XenoFelixOBqbJ3H.notFrozen.call(addressx5nW17E, {from: accounts[4]});
		await XenoFelixOBqbJ3H.pause.call({from: accounts[4]});
		const addressbH4UoRI = await XenoFelixOBqbJ3H.burnFrom.call(addressZtUEmE2, uintjmoKTOt, {from: accounts[2]});
		const uint256yK4ebbO = await XenoFelixOBqbJ3H.burn.call(uintAeyy6vw, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringyQ6MrBk = "F67M1tP"
		const stringdqnC5T9 = "0fcGQvUwsvaS51QIsqprJngU603PVVOHcSLGSXVQz1NOUw1XU"
		const uintyiLyv9 = BigInt("322")
		const uintfpQOXl = BigInt("108")
		const XenoFelixTQRBIC9 = await XenoFelix.new(stringyQ6MrBk, stringdqnC5T9, uintyiLyv9, uintfpQOXl, {from: accounts[3]});
		const uintnAeFtoi = BigInt("641")
		const addressIhjyBXT = accounts[0]
		const addresspeT7mbV = accounts[4]
		const addressvImaTIO = accounts[3]
		const uintqskTMYQ = BigInt("838")
		const addresszGaR4x = accounts[1]
		const addressNOEcUKq = accounts[5]
		const booldCum2Y9 = await XenoFelixTQRBIC9.decreaseAllowance.call(addressIhjyBXT, uintnAeFtoi, {from: accounts[5]});
		const addressCvrYur = await XenoFelixTQRBIC9.transferOwnership.call(addresspeT7mbV, {from: accounts[0]});
		const uint256hZtR5p4 = await XenoFelixTQRBIC9.balanceOf.call(addressvImaTIO, {from: accounts[2]});
		const boolpNsI97E = await XenoFelixTQRBIC9.transferFrom.call(addressNOEcUKq, addresszGaR4x, uintqskTMYQ, {from: accounts[1]});

		await expect(XenoFelixTQRBIC9.decreaseAllowance.call(addressIhjyBXT, uintnAeFtoi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringDzYLguQ = "2NPnP1cjAyAy"
		const stringtULDvZ = "O7kzAIXmXOt6CJnonF6XggGFyimdYELEjqRU5n"
		const uintFGMnLy = BigInt("40")
		const XenoFelixlQ08022 = await XenoFelix.new(stringDzYLguQ, stringtULDvZ, uintFGMnLy, {from: accounts[5]});
		const uintwTlLPGw = BigInt("1369")
		const addresscdIcDTR = accounts[0]
		const addresshL9DuZH = accounts[4]
		const addresssDLNji4 = accounts[0]
		const addressVImL7v = accounts[0]
		const boolk3lSj8P = await XenoFelixlQ08022.transferFrom.call(addresshL9DuZH, addresscdIcDTR, uintwTlLPGw, {from: accounts[0]});
		const addressQELg5O5 = await XenoFelixlQ08022.removePauser.call(addresssDLNji4, {from: accounts[0]});
		const addresszAUPSBG = await XenoFelixlQ08022.notFrozen.call(addressVImL7v, {from: accounts[2]});
		const uint256PYQZzTf = await XenoFelixlQ08022.totalSupply.call({from: accounts[3]});
		const boolvaZCSZ6 = await XenoFelixlQ08022.paused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringzuByq29 = "rY0s6SmkPnCuA3Ld5slpTC70YBCSKVJvrGdIDHuhOnmgs9Z"
		const stringaupMjCe = "6Ttwx7QB63eHvdvr7cUiGAoqNFrBOT8psjTL59vqSOrqH"
		const uintUKCSUo = BigInt("12")
		const uinta52QSOB = BigInt("244")
		const XenoFelixJP8lGl = await XenoFelix.new(stringzuByq29, stringaupMjCe, uintUKCSUo, uinta52QSOB, {from: accounts[1]});
		const uintQ6ZyC2x = BigInt("616")
		const addressSaeRShB = accounts[1]
		const addressJQnY9lD = accounts[3]
		const addressqEyHUg7 = accounts[1]
		const boolwIvENG7 = await XenoFelixJP8lGl.transferFrom.call(addressJQnY9lD, addressSaeRShB, uintQ6ZyC2x, {from: accounts[1]});
		const boolTXvcXa9 = await XenoFelixJP8lGl.freezeAccount.call(addressqEyHUg7, {from: accounts[3]});
		await XenoFelixJP8lGl.whenNotPaused.call({from: accounts[4]});
		await XenoFelixJP8lGl.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixJP8lGl.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixJP8lGl.unpause.call({from: accounts[1]});

		await expect(XenoFelixJP8lGl.transferFrom.call(addressJQnY9lD, addressSaeRShB, uintQ6ZyC2x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintaI8JKzG = BigInt("153")
		const uintfbGGdCT = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintaI8JKzG, uintfbGGdCT, {from: accounts[1]});
		const addresssxJro05 = accounts[4]
		const uintxAbscTl = BigInt("307")
		const addressjWZwgvc = accounts[0]
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addresssxJro05, {from: accounts[3]});
		await XenoFelixIunrsZ4.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressjWZwgvc, uintxAbscTl, {from: accounts[3]});
		const stringV9NDSJw = await XenoFelixIunrsZ4.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBe23eLZ, false)
		await expect(XenoFelixIunrsZ4.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringzuByq29 = "rY0s6SmkPnCuA3Ld5slpTC70YBCSKVJvrGdIDHuhOnmgs9Z"
		const stringaupMjCe = "6Ttwx7QB63eHvdvr7cUiGAoqNFrBOT8psjTL59vqSOrqH"
		const uintLFHSWks = BigInt("12")
		const uintolAfzeO = BigInt("244")
		const XenoFelixJP8lGl = await XenoFelix.new(stringzuByq29, stringaupMjCe, uintLFHSWks, uintolAfzeO, {from: accounts[1]});
		const addresshXSot5U = accounts[4]
		const addressyjOw7A8 = accounts[2]
		const uintuin1FOl = BigInt("616")
		const addressjK1IEhF = accounts[1]
		const addressGJ6sVu4 = accounts[3]
		const addressSKePyFk = accounts[2]
		const addressOzoXS7a = await XenoFelixJP8lGl.removePauser.call(addresshXSot5U, {from: accounts[1]});
		const uint256Xb6AyQq = await XenoFelixJP8lGl.balanceOf.call(addressyjOw7A8, {from: accounts[1]});
		const boolwIvENG7 = await XenoFelixJP8lGl.transferFrom.call(addressGJ6sVu4, addressjK1IEhF, uintuin1FOl, {from: accounts[1]});
		const boolTXvcXa9 = await XenoFelixJP8lGl.freezeAccount.call(addressSKePyFk, {from: accounts[3]});
		await XenoFelixJP8lGl.whenNotPaused.call({from: accounts[4]});
		await XenoFelixJP8lGl.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixJP8lGl.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixJP8lGl.unpause.call({from: accounts[1]});

		await expect(XenoFelixJP8lGl.removePauser.call(addresshXSot5U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintI24Qt6 = BigInt("153")
		const uintF3S0fwc = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintI24Qt6, uintF3S0fwc, {from: accounts[1]});
		const addressOMV0qxJ = accounts[4]
		const addressV01HL8U = accounts[4]
		const uintU4D5WOq = BigInt("307")
		const addresszDQhnkU = accounts[0]
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressOMV0qxJ, {from: accounts[3]});
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addressV01HL8U, {from: accounts[4]});
		await XenoFelixIunrsZ4.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addresszDQhnkU, uintU4D5WOq, {from: accounts[3]});
		const stringV9NDSJw = await XenoFelixIunrsZ4.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBe23eLZ, false)
		assert.equal(uint256LnQqoaV, BigInt("0"))
		await expect(XenoFelixIunrsZ4.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpjyyofV = "J6amFbSv44F4"
		const stringm4ol6lt = "wbqgknNukwNKuIJLncP2no3cJkcZDmzluzJ8znaLGXq6yk5xvF0NlSc7rPx7ZxwUUThEu7xYo"
		const uintDSv4OAx = BigInt("34")
		const XenoFelixvnDI27 = await XenoFelix.new(stringpjyyofV, stringm4ol6lt, uintDSv4OAx, {from: "0x0000000000000000000000000000000000000001"});
		const addressAgEmGG2 = accounts[2]
		const uint8R7NoLF6 = await XenoFelixvnDI27.decimals.call({from: accounts[0]});
		await XenoFelixvnDI27.whenNotPaused.call({from: accounts[2]});
		const boolaQFg1r = await XenoFelixvnDI27.isOwner.call(addressAgEmGG2, {from: accounts[2]});
		const stringmckKpPA = await XenoFelixvnDI27.symbol.call({from: accounts[5]});
		const boolAsP6p8k = await XenoFelixvnDI27.paused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintACEzkDp = BigInt("153")
		const uintv8zc4Gw = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintACEzkDp, uintv8zc4Gw, {from: accounts[1]});
		const addressB7NH8XK = accounts[4]
		const addresssatmK4i = accounts[4]
		const uintRjzJGWf = BigInt("307")
		const addressw7ViiFL = accounts[1]
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressB7NH8XK, {from: accounts[3]});
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addresssatmK4i, {from: accounts[4]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressw7ViiFL, uintRjzJGWf, {from: accounts[3]});
		const stringV9NDSJw = await XenoFelixIunrsZ4.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBe23eLZ, false)
		assert.equal(uint256LnQqoaV, BigInt("0"))
		await expect(XenoFelixIunrsZ4.transfer.call(addressw7ViiFL, uintRjzJGWf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoOiDw6m = "x4cwmfgzBiYcZNCogtUw4sVcaUxxlG1382lDpLrLFS"
		const stringqN5q23n = "HhqXKDJUGYC"
		const uintb46QBzP = BigInt("235")
		const XenoFelixscIogpF = await XenoFelix.new(stringoOiDw6m, stringqN5q23n, uintb46QBzP, {from: accounts[0]});
		const uintSpFNdUw = BigInt("58")
		const addresscU6vyPU = accounts[1]
		const uintOAXmsta = BigInt("617")
		const addressYHZkQA = accounts[3]
		const address083lNV = accounts[2]
		const uintqYFBwTm = BigInt("1043")
		const addressnT1hM21 = accounts[5]
		const boolTQYsis = await XenoFelixscIogpF.transfer.call(addresscU6vyPU, uintSpFNdUw, {from: accounts[3]});
		const boolRinSEks = await XenoFelixscIogpF.unlock.call(addressYHZkQA, uintOAXmsta, {from: accounts[4]});
		const boolTlfGnUk = await XenoFelixscIogpF.freezeAccount.call(address083lNV, {from: accounts[1]});
		const boolpiPfjx = await XenoFelixscIogpF.increaseAllowance.call(addressnT1hM21, uintqYFBwTm, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintMT3udrc = BigInt("153")
		const uintNXBOtNy = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintMT3udrc, uintNXBOtNy, {from: accounts[1]});
		const addressU2lemWv = accounts[5]
		const addressVZbLHps = accounts[4]
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressU2lemWv, {from: accounts[3]});
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addressVZbLHps, {from: accounts[4]});
		const stringV9NDSJw = await XenoFelixIunrsZ4.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBe23eLZ, false)
		assert.equal(stringV9NDSJw, "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg")
		assert.equal(uint256LnQqoaV, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintswqmUSG = BigInt("153")
		const uintmLlB0ua = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintswqmUSG, uintmLlB0ua, {from: accounts[1]});
		const uintsU6sgAc = BigInt("1714")
		const uintuoiuolF = BigInt("260")
		const addresslfjpoGo = accounts[2]
		const addressuyGm8Kp = accounts[4]
		const addressSPmUf1K = accounts[4]
		const uintq5d3UOj = BigInt("307")
		const addressynzRByU = accounts[0]
		const uintR7X4kIL = BigInt("164")
		const addresseF35GZ = accounts[1]
		const addresspXPADN = accounts[2]
		const uintPVhnOOc = BigInt("1026")
		const boolOHwVuUq = await XenoFelixIunrsZ4.transferWithLock.call(addresslfjpoGo, uintuoiuolF, uintsU6sgAc, {from: accounts[1]});
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressuyGm8Kp, {from: accounts[3]});
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addressSPmUf1K, {from: accounts[4]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressynzRByU, uintq5d3UOj, {from: accounts[3]});
		const stringV9NDSJw = await XenoFelixIunrsZ4.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTdX6AdO = await XenoFelixIunrsZ4.transferFrom.call(addresspXPADN, addresseF35GZ, uintR7X4kIL, {from: accounts[3]});
		await XenoFelixIunrsZ4.pause.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixIunrsZ4.unpause.call({from: accounts[1]});
		const uint256cloOHsC = await XenoFelixIunrsZ4.burn.call(uintPVhnOOc, {from: accounts[4]});
		await XenoFelixIunrsZ4.pause.call({from: accounts[1]});

		assert.equal(boolBe23eLZ, false)
		assert.equal(boolOHwVuUq, true)
		assert.equal(uint256LnQqoaV, BigInt("0"))
		await expect(XenoFelixIunrsZ4.transfer.call(addressynzRByU, uintq5d3UOj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintu2w4Tsn = BigInt("153")
		const uintX16JptG = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintu2w4Tsn, uintX16JptG, {from: accounts[1]});
		const addressfC8SAwu = accounts[5]
		const addressP0VAC78 = accounts[4]
		const addressohfX860 = accounts[5]
		const uintaerxZhL = BigInt("307")
		const addressnonBqoC = accounts[1]
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressfC8SAwu, {from: accounts[3]});
		await XenoFelixIunrsZ4.pause.call({from: accounts[1]});
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addressP0VAC78, {from: accounts[4]});
		const addressSxELGnY = await XenoFelixIunrsZ4.removePauser.call(addressohfX860, {from: accounts[4]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressnonBqoC, uintaerxZhL, {from: accounts[3]});

		assert.equal(boolBe23eLZ, false)
		await expect(XenoFelixIunrsZ4.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKAqbIjv = "GusOsmnU2CQB7zxV7D3aFYS9h9VFzn92dYJojtuNLkFxYQTaJg4gmP5ccxtm0CWHzpnhW3pn3yzqvH8"
		const stringHhqHkQW = "KhlMUzpGxlPPvMvTyrEyGrPsGHCxs76LDQVMQ4rroutdzWfgc"
		const uintjeMjvuH = BigInt("129")
		const uintPt2SHPg = BigInt("140")
		const XenoFelixjeUTGx1 = await XenoFelix.new(stringKAqbIjv, stringHhqHkQW, uintjeMjvuH, uintPt2SHPg, {from: accounts[2]});
		const addressl9IO1as = accounts[3]
		const addresskaDYJP = accounts[1]
		const addressOsibBas = accounts[4]
		const uintiQz53Tr = BigInt("483")
		const addresslmr84gx = accounts[2]
		const addressG7OD5Nb = accounts[2]
		const uint256yPOsx2M = await XenoFelixjeUTGx1.allowance.call(addresskaDYJP, addressl9IO1as, {from: accounts[1]});
		const boolxTX2mOF = await XenoFelixjeUTGx1.isPauser.call(addressOsibBas, {from: "0x0000000000000000000000000000000000000001"});
		const boolzItVuND = await XenoFelixjeUTGx1.transferFrom.call(addressG7OD5Nb, addresslmr84gx, uintiQz53Tr, {from: accounts[2]});

		assert.equal(boolxTX2mOF, false)
		assert.equal(uint256yPOsx2M, BigInt("0"))
		await expect(XenoFelixjeUTGx1.transferFrom.call(addressG7OD5Nb, addresslmr84gx, uintiQz53Tr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKAqbIjv = "GusOsmnU2CQB7zxV7D3aFYS9h9VFzn92dYJojtuNLkFxYQTaJg4gmP5ccxtm0CWHzpnhW3pn3yzqvH8"
		const stringHhqHkQW = "KhlMUzpGxlPPvMvTyrEyGrPsGHCxs76LDQVMQ4rroutdzWfgc"
		const uintxKogK1 = BigInt("129")
		const uintx9lZVw2 = BigInt("140")
		const XenoFelixjeUTGx1 = await XenoFelix.new(stringKAqbIjv, stringHhqHkQW, uintxKogK1, uintx9lZVw2, {from: accounts[2]});
		const addressn7TzE9E = accounts[2]
		const addressqZGM4fH = accounts[4]
		const address8eYbJY = accounts[3]
		const addressRmzUS9B = accounts[1]
		const addressBxFTDsH = accounts[4]
		const uintRY8eg1t = BigInt("483")
		const addresse8J6g11 = accounts[2]
		const addressxCQHuab = accounts[2]
		const uint256r66ipos = await XenoFelixjeUTGx1.allowance.call(addressqZGM4fH, addressn7TzE9E, {from: accounts[4]});
		const uint256yPOsx2M = await XenoFelixjeUTGx1.allowance.call(addressRmzUS9B, address8eYbJY, {from: accounts[1]});
		const boolxTX2mOF = await XenoFelixjeUTGx1.isPauser.call(addressBxFTDsH, {from: "0x0000000000000000000000000000000000000001"});
		const stringCzGIwDR = await XenoFelixjeUTGx1.symbol.call({from: accounts[5]});
		const boolzItVuND = await XenoFelixjeUTGx1.transferFrom.call(addressxCQHuab, addresse8J6g11, uintRY8eg1t, {from: accounts[2]});

		assert.equal(boolxTX2mOF, false)
		assert.equal(stringCzGIwDR, "KhlMUzpGxlPPvMvTyrEyGrPsGHCxs76LDQVMQ4rroutdzWfgc")
		assert.equal(uint256r66ipos, BigInt("0"))
		assert.equal(uint256yPOsx2M, BigInt("0"))
		await expect(XenoFelixjeUTGx1.transferFrom.call(addressxCQHuab, addresse8J6g11, uintRY8eg1t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringM0h0A6 = "Pv6DGpbIJT87LPRSscuLfYMdHaGxcC9GYlXwtrFMY5kBsGJUC4aV4rEe"
		const stringk1qLUwU = "il8B79lMJAVll1IROIcfaBkevA43d4VJUScaM7staXShebprQpkAQwlrdnwHUWWIFO1f"
		const uintl1j9KXE = BigInt("84")
		const XenoFelixhPlF2V = await XenoFelix.new(stringM0h0A6, stringk1qLUwU, uintl1j9KXE, {from: accounts[2]});
		const uintsT2Aq5 = BigInt("1976")
		const addressOGnbNYy = accounts[2]
		const addressXX2g8Ym = accounts[0]
		const uintI2RU8x = BigInt("892")
		const addressmPdkIm = accounts[1]
		const addressETf39OJ = accounts[2]
		const boolEmUEL8j = await XenoFelixhPlF2V.transfer.call(addressOGnbNYy, uintsT2Aq5, {from: accounts[4]});
		const addressDkWRdCv = await XenoFelixhPlF2V.notFrozen.call(addressXX2g8Ym, {from: accounts[0]});
		const boolzwBdDOs = await XenoFelixhPlF2V.transferFrom.call(addressETf39OJ, addressmPdkIm, uintI2RU8x, {from: accounts[0]});
		const stringf6jfwy = await XenoFelixhPlF2V.symbol.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringzuByq29 = "rY0s6SmkPnCuA3Ld5slpTC70YBCSKVJvrGdIDHuhOnmgs9Z"
		const stringaupMjCe = "6Ttwx7QB63eHvdvr7cUiGAoqNFrBOT8psjTL59vqSOrqH"
		const uintUJoOVoq = BigInt("12")
		const uinttoQvQg0 = BigInt("244")
		const XenoFelixJP8lGl = await XenoFelix.new(stringzuByq29, stringaupMjCe, uintUJoOVoq, uinttoQvQg0, {from: accounts[1]});
		const addressfXgHcq4 = accounts[1]
		const addressfFqix5d = accounts[1]
		const addressRHNUHKY = accounts[3]
		const uint5wdzcl = BigInt("1851")
		const addresswMCMSrJ = accounts[4]
		const uintufkZAnX = BigInt("1845")
		const addressfTH2Pkk = accounts[2]
		const addressBmDSj90 = accounts[4]
		const addressalOYNWP = accounts[4]
		const addressFsZPX7H = accounts[5]
		const boolzFXwp70 = await XenoFelixJP8lGl.isOwner.call(addressfXgHcq4, {from: accounts[1]});
		const boolTXvcXa9 = await XenoFelixJP8lGl.freezeAccount.call(addressfFqix5d, {from: accounts[3]});
		const addresstyEDJql = await XenoFelixJP8lGl.notFrozen.call(addressRHNUHKY, {from: accounts[2]});
		const boolvSETXr = await XenoFelixJP8lGl.transfer.call(addresswMCMSrJ, uint5wdzcl, {from: accounts[3]});
		await XenoFelixJP8lGl.whenNotPaused.call({from: accounts[4]});
		await XenoFelixJP8lGl.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixJP8lGl.whenPaused.call({from: accounts[2]});
		const boolMIOwiJ = await XenoFelixJP8lGl.transfer.call(addressfTH2Pkk, uintufkZAnX, {from: accounts[5]});
		await XenoFelixJP8lGl.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256b2VEL7S = await XenoFelixJP8lGl.balanceOf.call(addressBmDSj90, {from: accounts[0]});
		await XenoFelixJP8lGl.onlyNewOwner.call({from: accounts[3]});
		const boolk4tzV0E = await XenoFelixJP8lGl.isPauser.call(addressalOYNWP, {from: accounts[0]});
		const uint256C12SfKj = await XenoFelixJP8lGl.balanceOf.call(addressFsZPX7H, {from: accounts[2]});
		await XenoFelixJP8lGl.unpause.call({from: accounts[1]});

		assert.equal(boolzFXwp70, true)
		await expect(XenoFelixJP8lGl.freezeAccount.call(addressfFqix5d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKAqbIjv = "GusOsmnU2CQB7zxV7D3aFYS9h9VFzn92dYJojtuNLkFxYQTaJg4gmP5ccxtm0CWHzpnhW3pn3yzqvH8"
		const stringHhqHkQW = "KhlMUzpGxlPPvMvTyrEyGrPsGHCxs76LDQVMQ4rroutdzWfgc"
		const uinthJ2mWwb = BigInt("129")
		const uintwGWMq2m = BigInt("140")
		const XenoFelixjeUTGx1 = await XenoFelix.new(stringKAqbIjv, stringHhqHkQW, uinthJ2mWwb, uintwGWMq2m, {from: accounts[2]});
		const uintfj40yZj = BigInt("1638")
		const addressIiF99VG = accounts[0]
		const uintKTm5cs = BigInt("483")
		const addressO5LYryq = accounts[2]
		const addressz8Ki3E3 = accounts[2]
		const boolBAvcSzy = await XenoFelixjeUTGx1.approve.call(addressIiF99VG, uintfj40yZj, {from: accounts[0]});
		const boolzItVuND = await XenoFelixjeUTGx1.transferFrom.call(addressz8Ki3E3, addressO5LYryq, uintKTm5cs, {from: accounts[2]});
		await XenoFelixjeUTGx1.whenPaused.call({from: accounts[2]});

		assert.equal(boolBAvcSzy, true)
		await expect(XenoFelixjeUTGx1.transferFrom.call(addressz8Ki3E3, addressO5LYryq, uintKTm5cs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintYwAlLzZ = BigInt("153")
		const uintQ4BvUkb = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintYwAlLzZ, uintQ4BvUkb, {from: accounts[1]});
		const addressGNqTRSP = accounts[4]
		const addressaEv0yTI = accounts[4]
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressGNqTRSP, {from: accounts[3]});
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addressaEv0yTI, {from: accounts[4]});
		const stringRPZHhXs = await XenoFelixIunrsZ4.name.call({from: accounts[0]});
		const uint8VdQR3vf = await XenoFelixIunrsZ4.decimals.call({from: accounts[0]});

		assert.equal(boolBe23eLZ, false)
		assert.equal(stringRPZHhXs, "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg")
		assert.equal(uint256LnQqoaV, BigInt("0"))
		assert.equal(uint8VdQR3vf, BigInt("18"))
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uinthCTg2mj = BigInt("153")
		const uintRg98jbk = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uinthCTg2mj, uintRg98jbk, {from: accounts[1]});
		const addressS1LLhU = accounts[5]
		const uintQmRR1Ej = BigInt("320")
		const addresswYdihZ = accounts[1]
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressS1LLhU, {from: accounts[3]});
		await XenoFelixIunrsZ4.renouncePauser.call({from: accounts[4]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addresswYdihZ, uintQmRR1Ej, {from: accounts[3]});

		assert.equal(boolBe23eLZ, false)
		await expect(XenoFelixIunrsZ4.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintF5lphxq = BigInt("153")
		const uintLRPCItD = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintF5lphxq, uintLRPCItD, {from: accounts[1]});
		const uintX4B09xp = BigInt("1037")
		const uintyAIZfWF = BigInt("614")
		const addressdRRXTiQ = accounts[1]
		const addressH5ihvq = accounts[5]
		const addresseA0yVxx = accounts[2]
		const uintn2NUPPy = BigInt("529")
		const addressEY0lI0V = accounts[4]
		const addressrExNnSt = "0x0000000000000000000000000000000000000001"
		const addresslOSsyAO = accounts[4]
		const uintPUmzKf4 = BigInt("320")
		const addressnwbaL3s = accounts[1]
		const boolMSErTiO = await XenoFelixIunrsZ4.transferWithLock.call(addressdRRXTiQ, uintyAIZfWF, uintX4B09xp, {from: accounts[1]});
		const boolBe23eLZ = await XenoFelixIunrsZ4.isOwner.call(addressH5ihvq, {from: accounts[3]});
		const boolkCTylqv = await XenoFelixIunrsZ4.unfreezeAccount.call(addresseA0yVxx, {from: accounts[1]});
		const booliuIqvjC = await XenoFelixIunrsZ4.transferFrom.call(addressrExNnSt, addressEY0lI0V, uintn2NUPPy, {from: accounts[0]});
		await XenoFelixIunrsZ4.renouncePauser.call({from: accounts[4]});
		const boolb61YE7c = await XenoFelixIunrsZ4.isPauser.call(addresslOSsyAO, {from: accounts[3]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressnwbaL3s, uintPUmzKf4, {from: accounts[3]});

		assert.equal(boolBe23eLZ, false)
		assert.equal(boolMSErTiO, true)
		await expect(XenoFelixIunrsZ4.unfreezeAccount.call(addresseA0yVxx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintMJMNBee = BigInt("153")
		const uintAglrx5r = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintMJMNBee, uintAglrx5r, {from: accounts[1]});
		const uintBB00vS = BigInt("941")
		const uintHH1MOG = BigInt("189")
		const addressXE5JQZz = accounts[2]
		const addressndKp1a7 = accounts[3]
		const addressTjVnBD3 = accounts[2]
		const uintbLoG6dT = BigInt("628")
		const addressE8MiCF = accounts[1]
		const uintdKzXZt7 = BigInt("320")
		const addresseG9xpgc = accounts[2]
		const boolhQk5joH = await XenoFelixIunrsZ4.lock.call(addressXE5JQZz, uintHH1MOG, uintBB00vS, {from: accounts[1]});
		const addressbw4RUxI = await XenoFelixIunrsZ4.notFrozenAndTransaction.call(addressTjVnBD3, addressndKp1a7, {from: accounts[1]});
		const boolyFjQUKs = await XenoFelixIunrsZ4.transfer.call(addressE8MiCF, uintbLoG6dT, {from: accounts[0]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addresseG9xpgc, uintdKzXZt7, {from: accounts[3]});

		await expect(XenoFelixIunrsZ4.lock.call(addressXE5JQZz, uintHH1MOG, uintBB00vS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintYFaNeih = BigInt("153")
		const uintRdjK6OM = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintYFaNeih, uintRdjK6OM, {from: accounts[1]});
		const uintzFxQ42q = BigInt("1058")
		const addressDvIkHPH = accounts[1]
		const uintHH9a3vi = BigInt("941")
		const uintgkBgkcS = BigInt("189")
		const addressrQwxIPT = accounts[2]
		const addressMbtFM3r = accounts[3]
		const addressSOLcdp = accounts[2]
		const uintcAION7a = BigInt("628")
		const addresso5WFuNG = accounts[1]
		const uintQDubyFz = BigInt("320")
		const addressgUkWWoV = accounts[2]
		const boolPCv4wL = await XenoFelixIunrsZ4.increaseAllowance.call(addressDvIkHPH, uintzFxQ42q, {from: accounts[0]});
		const boolhQk5joH = await XenoFelixIunrsZ4.lock.call(addressrQwxIPT, uintgkBgkcS, uintHH9a3vi, {from: accounts[1]});
		const addressbw4RUxI = await XenoFelixIunrsZ4.notFrozenAndTransaction.call(addressSOLcdp, addressMbtFM3r, {from: accounts[1]});
		const boolyFjQUKs = await XenoFelixIunrsZ4.transfer.call(addresso5WFuNG, uintcAION7a, {from: accounts[0]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressgUkWWoV, uintQDubyFz, {from: accounts[3]});

		assert.equal(boolPCv4wL, true)
		await expect(XenoFelixIunrsZ4.lock.call(addressrQwxIPT, uintgkBgkcS, uintHH9a3vi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintoKRMhh3 = BigInt("153")
		const uintTXvb0AE = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintoKRMhh3, uintTXvb0AE, {from: accounts[1]});
		const addressFOpqKnu = accounts[2]
		const addressc4DPSL9 = accounts[5]
		const uintpivyJMJ = BigInt("307")
		const addressSWMficP = accounts[1]
		const addressjGiB1Mp = await XenoFelixIunrsZ4.addPauser.call(addressFOpqKnu, {from: accounts[1]});
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addressc4DPSL9, {from: accounts[4]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressSWMficP, uintpivyJMJ, {from: accounts[3]});

		assert.equal(uint256LnQqoaV, BigInt("0"))
		await expect(XenoFelixIunrsZ4.transfer.call(addressSWMficP, uintpivyJMJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintFCOS6ix = BigInt("153")
		const uintBTNUt7N = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintFCOS6ix, uintBTNUt7N, {from: accounts[1]});
		const addresso5UOXbX = accounts[4]
		const uinthQUz8Og = BigInt("396")
		const addressGdBUW86 = accounts[3]
		const uintC75cx6w = BigInt("307")
		const addressO4EThqC = accounts[2]
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addresso5UOXbX, {from: accounts[4]});
		const boolumzc8zQ = await XenoFelixIunrsZ4.burnOwner.call(addressGdBUW86, uinthQUz8Og, {from: accounts[1]});
		await XenoFelixIunrsZ4.pause.call({from: accounts[2]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressO4EThqC, uintC75cx6w, {from: accounts[3]});

		assert.equal(uint256LnQqoaV, BigInt("0"))
		await expect(XenoFelixIunrsZ4.burnOwner.call(addressGdBUW86, uinthQUz8Og, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintBWJZeVD = BigInt("153")
		const uintp6PqRQ8 = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintBWJZeVD, uintp6PqRQ8, {from: accounts[1]});
		const uintYeWWCDq = BigInt("886")
		const uint256ixJRrp4 = await XenoFelixIunrsZ4.burn.call(uintYeWWCDq, {from: accounts[5]});

		await expect(XenoFelixIunrsZ4.burn.call(uintYeWWCDq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnOapgBp = "Kbp1D3Qguyvghz1LsBvlHbh62xVuAgkYEyuOhve5SjkRQ83exPiCmtj56kRWewlsg"
		const stringCTMDLfg = "NeFrFiYygTbOFOODNHXyRzj5oB5oPVtI93q7WVeqwgq1AV53yR9EHKDHIUfeZgSFcTcdw2Olto58XD"
		const uintea0ERXy = BigInt("153")
		const uintj3IdU0v = BigInt("18")
		const XenoFelixIunrsZ4 = await XenoFelix.new(stringnOapgBp, stringCTMDLfg, uintea0ERXy, uintj3IdU0v, {from: accounts[1]});
		const addressKU1OQFO = accounts[5]
		const addressbKDLoxB = accounts[3]
		const uintnsRidhY = BigInt("307")
		const addressiTyuWFc = accounts[1]
		const uint256LnQqoaV = await XenoFelixIunrsZ4.balanceOf.call(addressKU1OQFO, {from: accounts[4]});
		const uint256OUwmTvB = await XenoFelixIunrsZ4.balanceOf.call(addressbKDLoxB, {from: accounts[2]});
		const uint256lA2ZIMI = await XenoFelixIunrsZ4.totalSupply.call({from: accounts[5]});
		const bool5aIqMS = await XenoFelixIunrsZ4.transfer.call(addressiTyuWFc, uintnsRidhY, {from: accounts[3]});

		assert.equal(uint256LnQqoaV, BigInt("0"))
		assert.equal(uint256OUwmTvB, BigInt("0"))
		assert.equal(uint256lA2ZIMI, BigInt("153000000000000000000"))
		await expect(XenoFelixIunrsZ4.transfer.call(addressiTyuWFc, uintnsRidhY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKAqbIjv = "GusOsmnU2CQB7zxV7D3aFYS9h9VFzn92dYJojtuNLkFxYQTaJg4gmP5ccxtm0CWHzpnhW3pn3yzqvH8"
		const stringHhqHkQW = "KhlMUzpGxlPPvMvTyrEyGrPsGHCxs76LDQVMQ4rroutdzWfgc"
		const uintfiwM6cW = BigInt("129")
		const uintXsfX81b = BigInt("140")
		const XenoFelixjeUTGx1 = await XenoFelix.new(stringKAqbIjv, stringHhqHkQW, uintfiwM6cW, uintXsfX81b, {from: accounts[2]});
		const uintvGfWSI9 = BigInt("483")
		const addressudrtGLO = accounts[2]
		const addressGXAUrwV = accounts[3]
		const boolGZSpEs = await XenoFelixjeUTGx1.paused.call({from: accounts[2]});
		const uint8Jyl0qe1 = await XenoFelixjeUTGx1.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolzItVuND = await XenoFelixjeUTGx1.transferFrom.call(addressGXAUrwV, addressudrtGLO, uintvGfWSI9, {from: accounts[2]});

		assert.equal(boolGZSpEs, false)
		assert.equal(uint8Jyl0qe1, BigInt("140"))
		await expect(XenoFelixjeUTGx1.transferFrom.call(addressGXAUrwV, addressudrtGLO, uintvGfWSI9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})