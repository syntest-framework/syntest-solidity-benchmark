const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozfuo9xPQ = await Cryptoz.new({from: accounts[0]});
		const uintqygPOAv = BigInt("465")
		const uintmnbkPov = BigInt("690")
		const uintXs4wyfs = BigInt("484")
		const uinto8EVRgm = BigInt("106")
		const uintJsZbybk = BigInt("203")
		const uintnnBT2et = BigInt("244")
		const stringaqMPwhF = "2dxcX"
		const stringkAPPZQN = "w6GylcMDFr1J5eD7mb6HLu1NgA9lDVh2jTImL88CGknARj6fS4EsNP9ZYct"
		const uintrSWv2G8 = BigInt("95")
		const uintkZ9584E = BigInt("813")
		const addressXUbPf1M = accounts[4]
		const uintLyDQW61 = BigInt("1618")
		const boolGU07w5y = await Cryptozfuo9xPQ.loadNewCardType.call(uintrSWv2G8, stringkAPPZQN, stringaqMPwhF, uintnnBT2et, uintJsZbybk, uinto8EVRgm, uintXs4wyfs, uintmnbkPov, uintqygPOAv, {from: accounts[0]});
		const uint32VQR0xZc = await Cryptozfuo9xPQ.isValidCard.call(uintkZ9584E, {from: accounts[2]});
		await Cryptozfuo9xPQ.getBonusBoosters.call({from: accounts[4]});
		const uintnCDe2Zw = await Cryptozfuo9xPQ.getTimeToDailyBonus.call(addressXUbPf1M, {from: accounts[0]});
		const uint32rfaeSMK = await Cryptozfuo9xPQ.isValidCard.call(uintLyDQW61, {from: accounts[0]});

		assert.equal(boolGU07w5y, true)
		await expect(Cryptozfuo9xPQ.isValidCard.call(uintkZ9584E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozRnkLjQS = await Cryptoz.new({from: accounts[2]});
		const uintgQl65gE = BigInt("605")
		const uintH7t91F3 = BigInt("1111")
		const uintokQvTAU = BigInt("795")
		const addressVIH5vrY = accounts[3]
		const uintNWRFalW = BigInt("1375")
		const addresskLuGzE9 = accounts[2]
		const addressWsByMH = accounts[5]
		await CryptozRnkLjQS.getOwnedCard.call(uintgQl65gE, {from: accounts[2]});
		const uint32OhLE89X = await CryptozRnkLjQS.isValidCard.call(uintH7t91F3, {from: accounts[0]});
		await CryptozRnkLjQS.withdraw.call({from: accounts[2]});
		await CryptozRnkLjQS.getOwnedCard.call(uintokQvTAU, {from: accounts[1]});
		const uint256arraysQIXzTE = await CryptozRnkLjQS.tokensOfOwner.call(addressVIH5vrY, {from: accounts[1]});
		const addressWyljEjN = await CryptozRnkLjQS.transferFrom.call(addressWsByMH, addresskLuGzE9, uintNWRFalW, {from: accounts[0]});

		await expect(CryptozRnkLjQS.getOwnedCard.call(uintgQl65gE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozV5gZU26 = await Cryptoz.new({from: accounts[2]});
		const uintgccm5aZ = BigInt("1791")
		const uint256V7LWPdr = await CryptozV5gZU26.tokenByIndex.call(uintgccm5aZ, {from: accounts[2]});
		await CryptozV5gZU26.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozV5gZU26.withdraw.call({from: accounts[0]});

		await expect(CryptozV5gZU26.tokenByIndex.call(uintgccm5aZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJMH9A = await Cryptoz.new({from: accounts[0]});
		const addresselpyFVZ = accounts[2]
		const uintIRXtjYq = BigInt("702")
		const addressZCfwg2v = accounts[3]
		const addresskUDfIqk = await CryptozYJMH9A.initialize.call(addresselpyFVZ, {from: accounts[0]});
		const uint256s3rTPnQ = await CryptozYJMH9A.tokenOfOwnerByIndex.call(addressZCfwg2v, uintIRXtjYq, {from: accounts[1]});
		await CryptozYJMH9A.f.call({from: accounts[5]});

		await expect(CryptozYJMH9A.tokenOfOwnerByIndex.call(addressZCfwg2v, uintIRXtjYq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozukE5wvG = await Cryptoz.new({from: accounts[3]});
		const uintOYjtpeg = BigInt("1611")
		const uintzTrt2N0 = BigInt("1445")
		const addressdjGhZkh = accounts[2]
		const addresst2qXKKi = accounts[2]
		const uintQXgFIDJ = BigInt("404")
		const addressfkIgkRK = accounts[1]
		const uintsXPN5D = BigInt("1466")
		const stringd0y0P5O = await CryptozukE5wvG.tokenURI.call(uintOYjtpeg, {from: accounts[1]});
		const addressq4Ja74C = await CryptozukE5wvG.transferFrom.call(addresst2qXKKi, addressdjGhZkh, uintzTrt2N0, {from: accounts[4]});
		const uint256HNmSxBQ = await CryptozukE5wvG.tokenOfOwnerByIndex.call(addressfkIgkRK, uintQXgFIDJ, {from: accounts[3]});
		await CryptozukE5wvG.getTokensByRarity.call({from: accounts[3]});
		await CryptozukE5wvG.buyBoosterCardAndOpen.call({from: accounts[5]});
		const boolpVjr5zA = await CryptozukE5wvG.buyBoosterCard.call(uintsXPN5D, {from: accounts[1]});

		assert.equal(stringd0y0P5O, "https://cryptoz.cards/data/1611")
		await expect(CryptozukE5wvG.transferFrom.call(addresst2qXKKi, addressdjGhZkh, uintzTrt2N0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpQ2zwqY = await Cryptoz.new({from: accounts[3]});
		const uintB1AFZcC = BigInt("1320")
		const address4K8Pad = accounts[4]
		const uintl6ycxZ7 = BigInt("431")
		const uintXsORzix = BigInt("1749")
		const addresslK0cIAM = accounts[2]
		await CryptozpQ2zwqY.getTokensByRarity.call({from: accounts[0]});
		const uint256axWdYXo = await CryptozpQ2zwqY.tokenOfOwnerByIndex.call(address4K8Pad, uintB1AFZcC, {from: accounts[4]});
		const uint256HP9vqWv = await CryptozpQ2zwqY.tokenByIndex.call(uintl6ycxZ7, {from: accounts[1]});
		const uint256l0uiOt6 = await CryptozpQ2zwqY.tokenOfOwnerByIndex.call(addresslK0cIAM, uintXsORzix, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozpQ2zwqY.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozfuo9xPQ = await Cryptoz.new({from: accounts[0]});
		const uinthAaNgnd = BigInt("129")
		const uinth6bjVG8 = BigInt("1014")
		const uintwZqvV5u = BigInt("809")
		const uintH0mZ4xW = BigInt("157")
		const uintHVakGEz = BigInt("62")
		const uintGkzsGbL = BigInt("126")
		const stringZ3LCScB = "kQoa92VFf"
		const stringRzrdet5 = "Gep7u2n8rRR8et4kIGQrN4MI3v6AA6AiOahvCZwzEhPBTJuFlcrtDLIAuqJU6ZgUgK75HwcOfLlA"
		const uintwAtCwy7 = BigInt("50")
		const uintDfQsgOI = BigInt("465")
		const uintOpfgaNm = BigInt("690")
		const uintPb4HOMJ = BigInt("484")
		const uintSQ7HwSf = BigInt("106")
		const uintI0PTeL = BigInt("203")
		const uintwr3AVYi = BigInt("244")
		const stringaqMPwhF = "2dxcX"
		const stringkAPPZQN = "w6GylcMDFr1J5eD7mb6HLu1NgA9lDVh2jTImL88CGknARj6fS4EsNP9ZYct"
		const uintZ0w1G2R = BigInt("95")
		const uintPtYtRMh = BigInt("809")
		const addressqEW2RIi = accounts[4]
		const uintAvzQAQI = BigInt("1618")
		const boolA5U17sE = await Cryptozfuo9xPQ.loadNewCardType.call(uintwAtCwy7, stringRzrdet5, stringZ3LCScB, uintGkzsGbL, uintHVakGEz, uintH0mZ4xW, uintwZqvV5u, uinth6bjVG8, uinthAaNgnd, {from: accounts[2]});
		const boolGU07w5y = await Cryptozfuo9xPQ.loadNewCardType.call(uintZ0w1G2R, stringkAPPZQN, stringaqMPwhF, uintwr3AVYi, uintI0PTeL, uintSQ7HwSf, uintPb4HOMJ, uintOpfgaNm, uintDfQsgOI, {from: accounts[0]});
		const uint32VQR0xZc = await Cryptozfuo9xPQ.isValidCard.call(uintPtYtRMh, {from: accounts[2]});
		await Cryptozfuo9xPQ.getBonusBoosters.call({from: accounts[4]});
		const uintnCDe2Zw = await Cryptozfuo9xPQ.getTimeToDailyBonus.call(addressqEW2RIi, {from: accounts[0]});
		const uint32rfaeSMK = await Cryptozfuo9xPQ.isValidCard.call(uintAvzQAQI, {from: accounts[0]});
		await Cryptozfuo9xPQ.getTokensByRarity.call({from: accounts[4]});

		await expect(Cryptozfuo9xPQ.loadNewCardType.call(uintwAtCwy7, stringRzrdet5, stringZ3LCScB, uintGkzsGbL, uintHVakGEz, uintH0mZ4xW, uintwZqvV5u, uinth6bjVG8, uinthAaNgnd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozfuo9xPQ = await Cryptoz.new({from: accounts[0]});
		const uintE4YrHN = BigInt("465")
		const uintz3AfIzm = BigInt("690")
		const uintO3ndNOT = BigInt("484")
		const uintAoFHX61 = BigInt("106")
		const uintkUDCCU1 = BigInt("203")
		const uintySMRViE = BigInt("244")
		const stringaqMPwhF = "2dxcX"
		const stringkAPPZQN = "w6GylcMDFr1J5eD7mb6HLu1NgA9lDVh2jTImL88CGknARj6fS4EsNP9ZYct"
		const uintfINLYAe = BigInt("95")
		const uintT3XCIH = BigInt("813")
		const addressNuiEABf = accounts[4]
		const uintzPCGMOg = BigInt("1618")
		await Cryptozfuo9xPQ.getTokensByRarity.call({from: accounts[3]});
		const boolGU07w5y = await Cryptozfuo9xPQ.loadNewCardType.call(uintfINLYAe, stringkAPPZQN, stringaqMPwhF, uintySMRViE, uintkUDCCU1, uintAoFHX61, uintO3ndNOT, uintz3AfIzm, uintE4YrHN, {from: accounts[0]});
		const stringxb8DIFR = await Cryptozfuo9xPQ.symbol.call({from: accounts[4]});
		const uint32VQR0xZc = await Cryptozfuo9xPQ.isValidCard.call(uintT3XCIH, {from: accounts[2]});
		await Cryptozfuo9xPQ.getBonusBoosters.call({from: accounts[4]});
		const uintnCDe2Zw = await Cryptozfuo9xPQ.getTimeToDailyBonus.call(addressNuiEABf, {from: accounts[0]});
		const uint32rfaeSMK = await Cryptozfuo9xPQ.isValidCard.call(uintzPCGMOg, {from: accounts[0]});
		await Cryptozfuo9xPQ.f.call({from: accounts[2]});

		await expect(Cryptozfuo9xPQ.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEGK63D = await Cryptoz.new({from: accounts[2]});
		const uintCjSzkb = BigInt("1099")
		const uintcXNHhcK = BigInt("1200")
		const uintg2kj2qu = BigInt("1680")
		const uintpzGp1v3 = BigInt("16")
		const uinttMVwXAv = BigInt("233")
		const uintFaKCEA9 = BigInt("204")
		const stringw8G6twv = ""
		const stringXJkZoh1 = "DUyClDLWjpNx4tPSp6"
		const uintwxS01Rb = BigInt("171")
		const addressaYQS4uw = accounts[5]
		await CryptozEGK63D.f.call({from: accounts[0]});
		const boolCSWkcHm = await CryptozEGK63D.loadNewCardType.call(uintwxS01Rb, stringXJkZoh1, stringw8G6twv, uintFaKCEA9, uinttMVwXAv, uintpzGp1v3, uintg2kj2qu, uintcXNHhcK, uintCjSzkb, {from: accounts[4]});
		const uint256arrayDL1ThJZ = await CryptozEGK63D.tokensOfOwner.call(addressaYQS4uw, {from: accounts[3]});

		await expect(CryptozEGK63D.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozfuo9xPQ = await Cryptoz.new({from: accounts[0]});
		const uintT8vmbps = BigInt("465")
		const uintsue72Wr = BigInt("690")
		const uintE4qAjbQ = BigInt("484")
		const uintDrMtCUv = BigInt("106")
		const uintijvr1x = BigInt("203")
		const uintzIDCfC6 = BigInt("244")
		const stringaqMPwhF = "2dxcX"
		const stringkAPPZQN = "w6GylcMDFr1J5eD7mb6HLu1NgA9lDVh2jTImL88CGknARj6fS4EsNP9ZYct"
		const uintO5eh4fl = BigInt("95")
		const uintKD0Qp2Y = BigInt("791")
		const uintH7sS2Iy = BigInt("1889")
		const addressh5bXSzx = accounts[1]
		const uintC44ruQF = BigInt("230")
		const addressxTpodnJ = accounts[4]
		const uintwUFhVs = BigInt("1618")
		await Cryptozfuo9xPQ.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGU07w5y = await Cryptozfuo9xPQ.loadNewCardType.call(uintO5eh4fl, stringkAPPZQN, stringaqMPwhF, uintzIDCfC6, uintijvr1x, uintDrMtCUv, uintE4qAjbQ, uintsue72Wr, uintT8vmbps, {from: accounts[0]});
		const uint32VQR0xZc = await Cryptozfuo9xPQ.isValidCard.call(uintKD0Qp2Y, {from: accounts[2]});
		const uint32JDzw1rm = await Cryptozfuo9xPQ.isValidCard.call(uintH7sS2Iy, {from: accounts[2]});
		await Cryptozfuo9xPQ.getBonusBoosters.call({from: accounts[4]});
		const uint256arrayKG6ZNxp = await Cryptozfuo9xPQ.tokensOfOwner.call(addressh5bXSzx, {from: accounts[4]});
		const boolav46m2M = await Cryptozfuo9xPQ.buyCard.call(uintC44ruQF, {from: accounts[0]});
		const uintnCDe2Zw = await Cryptozfuo9xPQ.getTimeToDailyBonus.call(addressxTpodnJ, {from: accounts[0]});
		const uint32rfaeSMK = await Cryptozfuo9xPQ.isValidCard.call(uintwUFhVs, {from: accounts[0]});

		await expect(Cryptozfuo9xPQ.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeYfm6hw = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskLR7HJN = accounts[1]
		const uintPhJNJOy = BigInt("37")
		const uintoJ3IcR5 = BigInt("1762")
		const uintAbG9gU = BigInt("405")
		const uintqBUfNbR = BigInt("1523")
		const uintqhnCznW = BigInt("189")
		const uintRTHNcmQ = BigInt("791")
		const uintGwDwaVB = BigInt("217")
		const uintEEAZp9l = BigInt("1030")
		const uintGskE6wm = BigInt("29")
		const uintwz7XmND = BigInt("969")
		const uintJlMX5HX = BigInt("159")
		const addressxfrY0m3 = await CryptozeYfm6hw.initialize.call(addresskLR7HJN, {from: "0x0000000000000000000000000000000000000001"});
		const boolbUxgvwC = await CryptozeYfm6hw.addTocardType.call(uintqhnCznW, uintqBUfNbR, uintAbG9gU, uintoJ3IcR5, uintPhJNJOy, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozeYfm6hw.getTokensByRarity.call({from: accounts[3]});
		const boolniDKNab = await CryptozeYfm6hw.buyCard.call(uintRTHNcmQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolt8JgsNq = await CryptozeYfm6hw.addTocardType.call(uintJlMX5HX, uintwz7XmND, uintGskE6wm, uintEEAZp9l, uintGwDwaVB, {from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozV5gZU26 = await Cryptoz.new({from: accounts[2]});
		const uintd6NTuz4 = BigInt("566")
		const addressNHGzAMe = accounts[3]
		const addressZsF5eIJ = accounts[1]
		const boolNXtx54w = await CryptozV5gZU26.openBoosterCard.call(uintd6NTuz4, {from: accounts[2]});
		const uinthncRH6q = await CryptozV5gZU26.getTimeToDailyBonus.call(addressNHGzAMe, {from: accounts[3]});
		await CryptozV5gZU26.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozV5gZU26.f.call({from: accounts[3]});
		const addressOvBxqQp = await CryptozV5gZU26.linkMySponsor.call(addressZsF5eIJ, {from: accounts[0]});
		await CryptozV5gZU26.withdraw.call({from: accounts[0]});

		await expect(CryptozV5gZU26.openBoosterCard.call(uintd6NTuz4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozAcJvJc = await Cryptoz.new({from: accounts[3]});
		const addressJ98rdh9 = accounts[0]
		const addressAT71sK7 = accounts[5]
		const uintvEupxW = BigInt("1046")
		const addressDKr2HdM = accounts[1]
		const addressPhaqP34 = accounts[3]
		const uintPvrjocm = await CryptozAcJvJc.getTimeToDailyBonus.call(addressJ98rdh9, {from: accounts[4]});
		const uint256arrayEUrnD4w = await CryptozAcJvJc.tokensOfOwner.call(addressAT71sK7, {from: accounts[0]});
		await CryptozAcJvJc.buyBoosterCardAndOpen.call({from: accounts[3]});
		const addressfTv8noW = await CryptozAcJvJc.transferFrom.call(addressPhaqP34, addressDKr2HdM, uintvEupxW, {from: accounts[4]});
		await CryptozAcJvJc.getBonusBoosters.call({from: accounts[1]});

		assert.equal(uint256arrayEUrnD4w, BigInt(""))
		assert.equal(uintPvrjocm, BigInt("1630204359"))
		await expect(CryptozAcJvJc.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTXY2kEE = await Cryptoz.new({from: accounts[3]});
		const uintmaOggcK = BigInt("1605")
		const addresszwRz2qB = accounts[4]
		const uint256V1LbLdA = await CryptozTXY2kEE.sacrifice.call(uintmaOggcK, {from: accounts[1]});
		const uint256arraycwuGjdh = await CryptozTXY2kEE.tokensOfOwner.call(addresszwRz2qB, {from: accounts[3]});
		await CryptozTXY2kEE.getBonusBoosters.call({from: accounts[0]});

		await expect(CryptozTXY2kEE.sacrifice.call(uintmaOggcK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTXY2kEE = await Cryptoz.new({from: accounts[3]});
		const addresszoGbDoL = accounts[4]
		const uintcQbPI4i = BigInt("1605")
		const addressPgoFpsX = accounts[4]
		const addressuVZt7RP = await CryptozTXY2kEE.linkMySponsor.call(addresszoGbDoL, {from: accounts[3]});
		const uint256V1LbLdA = await CryptozTXY2kEE.sacrifice.call(uintcQbPI4i, {from: accounts[1]});
		const uint256arraycwuGjdh = await CryptozTXY2kEE.tokensOfOwner.call(addressPgoFpsX, {from: accounts[3]});

		await expect(CryptozTXY2kEE.linkMySponsor.call(addresszoGbDoL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIle0REM = await Cryptoz.new({from: accounts[4]});
		const uintQx4iNjD = BigInt("1944")
		const uintyjPPLry = BigInt("204")
		const uintu9Wt85R = BigInt("924")
		const uintglGlDS0 = BigInt("1516")
		const uintCNHlfIG = BigInt("1630")
		const uintEdVsP8R = BigInt("1440")
		const uintkakjDJI = BigInt("1140")
		const boolvQ8vUfe = await CryptozIle0REM.buyBoosterCard.call(uintQx4iNjD, {from: accounts[2]});
		const boolnXexkcX = await CryptozIle0REM.addTocardType.call(uintEdVsP8R, uintCNHlfIG, uintglGlDS0, uintu9Wt85R, uintyjPPLry, {from: accounts[3]});
		const uint3262KPUN = await CryptozIle0REM.isValidCard.call(uintkakjDJI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozIle0REM.buyBoosterCard.call(uintQx4iNjD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozriYyvhY = await Cryptoz.new({from: accounts[4]});
		const addressnvXpJjc = accounts[0]
		const uintFbnOz9G = BigInt("688")
		const uint256arrays63bxEy = await CryptozriYyvhY.tokensOfOwner.call(addressnvXpJjc, {from: accounts[4]});
		const stringycOTPJO = await CryptozriYyvhY.name.call({from: accounts[2]});
		const boolc73lsEu = await CryptozriYyvhY.buyCard.call(uintFbnOz9G, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozriYyvhY.getBonusBoosters.call({from: accounts[3]});

		assert.equal(stringycOTPJO, "Cryptoz Cards")
		assert.equal(uint256arrays63bxEy, BigInt(""))
		await expect(CryptozriYyvhY.buyCard.call(uintFbnOz9G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozV5gZU26 = await Cryptoz.new({from: accounts[2]});
		const uintPm4ZBBf = BigInt("534")
		const addresspCbm0II = accounts[1]
		const addressGMjXgba = accounts[0]
		await CryptozV5gZU26.withdraw.call({from: accounts[2]});
		const boolNXtx54w = await CryptozV5gZU26.openBoosterCard.call(uintPm4ZBBf, {from: accounts[2]});
		const addressOvBxqQp = await CryptozV5gZU26.linkMySponsor.call(addresspCbm0II, {from: accounts[0]});
		const addressguBZXfp = await CryptozV5gZU26.initialize.call(addressGMjXgba, {from: accounts[3]});

		await expect(CryptozV5gZU26.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozukE5wvG = await Cryptoz.new({from: accounts[3]});
		const uintZU3EuYK = BigInt("95")
		const uintvwP2BxM = BigInt("1782")
		const uintp3kfGEJ = BigInt("261")
		const uintfaPBLw5 = BigInt("1118")
		const uintfQlNMFZ = BigInt("1079")
		const uintduySfYk = BigInt("1286")
		const addressZl5fDP0 = accounts[0]
		const addressYbvk4Hw = accounts[3]
		const uintBEKUcsw = BigInt("1611")
		const uintKdd418Y = BigInt("1445")
		const addressnpyztR4 = accounts[3]
		const addresscDjCsdU = accounts[2]
		const boolfEtOLMI = await CryptozukE5wvG.addTocardType.call(uintfQlNMFZ, uintfaPBLw5, uintp3kfGEJ, uintvwP2BxM, uintZU3EuYK, {from: accounts[3]});
		const addresshXEU720 = await CryptozukE5wvG.transferFrom.call(addressYbvk4Hw, addressZl5fDP0, uintduySfYk, {from: accounts[0]});
		const stringd0y0P5O = await CryptozukE5wvG.tokenURI.call(uintBEKUcsw, {from: accounts[1]});
		const addressq4Ja74C = await CryptozukE5wvG.transferFrom.call(addresscDjCsdU, addressnpyztR4, uintKdd418Y, {from: accounts[4]});

		await expect(CryptozukE5wvG.addTocardType.call(uintfQlNMFZ, uintfaPBLw5, uintp3kfGEJ, uintvwP2BxM, uintZU3EuYK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})