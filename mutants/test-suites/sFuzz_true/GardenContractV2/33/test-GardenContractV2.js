const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressT5R6DDZ = accounts[0]
		const addressTdTxNF = accounts[3]
		const addresseBwGWy0 = accounts[0]
		const GardenContractV2T5Z3Eyn = await GardenContractV2.new(addressT5R6DDZ, addressTdTxNF, addresseBwGWy0, {from: accounts[0]});
		const stringScY1Ale = "MBB9Msu1magaO"
		const uintMhTYBs = BigInt("64")
		const uintoDUxOsp = BigInt("123")
		const uintwyMnAxn = BigInt("115")
//		const uint256fg54CFJ = await GardenContractV2T5Z3Eyn.totalGardenSupply.call(stringScY1Ale, {from: accounts[0]});
//		const uint8K8x7R40 = await GardenContractV2T5Z3Eyn.operationBurnMint.call(uintwyMnAxn, uintoDUxOsp, uintMhTYBs, {from: accounts[4]});

		await expect(GardenContractV2T5Z3Eyn.totalGardenSupply.call(stringScY1Ale, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTv6ptOI = accounts[0]
		const addressGleidu = accounts[3]
		const addresswCrc1ug = accounts[3]
		const GardenContractV2WRmP0mi = await GardenContractV2.new(addressTv6ptOI, addressGleidu, addresswCrc1ug, {from: accounts[1]});
		const addressFocQpsU = accounts[2]
		const uintOZy1iX3 = BigInt("231")
		const stringKxfXKp6 = "4F32L8nrAwrrl3BVUjf7i1hobvyr2yy5ct9BvqrbkkSIyge5gL69vkWbWzYmm5chhmQxw"
		const addressvekg4w7 = accounts[2]
		const uintify9scm = BigInt("131")
		const stringpmyoXWq = "yPMvGhmPDEOoRyeVjLG17SQgMQ5S4Mll3u6TTuNH"
		const stringEidrl2 = "hWfTk87cPMK5lD4asD6BsiQvTR0qOOVvyi19RzzCAoJnyFZ8"
		const addressVkox8FL = accounts[1]
		const addressMiifQ9 = accounts[3]
//		const addressxvmRovW = await GardenContractV2WRmP0mi.changeBenefitiary.call(addressFocQpsU, {from: accounts[4]});
//		const uint256nwKaq9P = await GardenContractV2WRmP0mi.growthRemaining.call(addressvekg4w7, stringKxfXKp6, uintOZy1iX3, {from: accounts[0]});
//		const uint256gCfeauT = await GardenContractV2WRmP0mi.timeUntilNextTLP.call(stringpmyoXWq, uintify9scm, {from: accounts[1]});
//		const uint256D97y5sL = await GardenContractV2WRmP0mi.totalTLPGrown.call(stringEidrl2, {from: accounts[0]});
//		const addressGQQ2ig7 = await GardenContractV2WRmP0mi.addTokenOwner.call(addressMiifQ9, addressVkox8FL, {from: accounts[0]});

		await expect(GardenContractV2WRmP0mi.changeBenefitiary.call(addressFocQpsU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoAClzp4 = accounts[2]
		const addressZCC7zIQ = accounts[0]
		const addressXo4aK0 = accounts[1]
		const GardenContractV2g9yPWFR = await GardenContractV2.new(addressoAClzp4, addressZCC7zIQ, addressXo4aK0, {from: accounts[0]});
		const uintlZ9Xjdo = BigInt("248")
		const stringmc1vZRr = "6HjAEx9eNiGkn4neean15IUklUidKqRaXcqe6n14g6qW8mtOI7Q7X82ohQjpe"
		const stringAN2U20L = "EJuWbtfD5LG8TjFCuJgJ7Ceye53VKA0NyG"
		const addresspEBVEl = accounts[0]
		const uintDviW47W = BigInt("1210")
		const uinthgbqOHW = BigInt("226")
		const stringkDFgCiP = "UYdOSteruD2zfD6W1wxtsrUdVmuJ"
//		const stringJaqM9XB = await GardenContractV2g9yPWFR.withdraw.call(stringmc1vZRr, uintlZ9Xjdo, {from: accounts[3]});
//		const uint256bycPMSl = await GardenContractV2g9yPWFR.totalTLPBurnt.call(stringAN2U20L, {from: accounts[0]});
//		const addressijfMZN9 = await GardenContractV2g9yPWFR.changeOwner.call(addresspEBVEl, {from: accounts[0]});
//		const stringDd1suVZ = await GardenContractV2g9yPWFR.decompose.call(stringkDFgCiP, uinthgbqOHW, uintDviW47W, {from: accounts[1]});

		await expect(GardenContractV2g9yPWFR.withdraw.call(stringmc1vZRr, uintlZ9Xjdo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYdjJtOo = accounts[0]
		const addressiGxZX1s = accounts[2]
		const addressTRkSsxH = accounts[3]
		const GardenContractV2OjymEV = await GardenContractV2.new(addressYdjJtOo, addressiGxZX1s, addressTRkSsxH, {from: accounts[4]});
		const uintgbIH8gv = BigInt("42")
		const uintsVnHy51 = BigInt("63")
		const uintQMhOHT4 = BigInt("43")
		const uintNoYurxg = BigInt("243")
		const stringoDtHqmz = "evp1tgUssRMs1JDFfibmv6WopxEHa81vAcC"
		const addressOnfRGli = accounts[1]
		const uint6TXAJS = BigInt("194")
		const stringD3XII4K = "WmwQuhoTwgrD7Dx2nramedJzcsQqxGji7sXtUM2rlUfwAEOIuCIEuhv8PjNxL8W4APMt05umtMFBCzufhTHJS"
		const addressB2WRIe = accounts[0]
		const uintmO2miqt = BigInt("48")
		const stringQ7LOMQl = "z8fsY4StMXeaP1vkvuEc"
		const addressYHjCnJ = "0x0000000000000000000000000000000000000001"
//		const uint8xLzF9r = await GardenContractV2OjymEV.zeroHoldings.call(uintsVnHy51, uintgbIH8gv, {from: accounts[3]});
//		const uint8HZA9dLE = await GardenContractV2OjymEV.setTimeStamp.call(uintNoYurxg, uintQMhOHT4, {from: accounts[1]});
//		const uint256NSs6Z8S = await GardenContractV2OjymEV.balanceOf.call(addressOnfRGli, stringoDtHqmz, {from: accounts[4]});
//		const uint256hIpYvMz = await GardenContractV2OjymEV.growthRemaining.call(addressB2WRIe, stringD3XII4K, uint6TXAJS, {from: accounts[1]});
//		const uint256K8iD9VX = await GardenContractV2OjymEV.timeUntilNextTLP.call(stringQ7LOMQl, uintmO2miqt, {from: accounts[3]});
//		const addressiO9G0w6 = await GardenContractV2OjymEV.renounceTokenOwner.call(addressYHjCnJ, {from: accounts[5]});

		await expect(GardenContractV2OjymEV.zeroHoldings.call(uintsVnHy51, uintgbIH8gv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressr0qjRlS = accounts[5]
		const addressy7vwo52 = accounts[5]
		const addressZZ72bk8 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2UvS8xK8 = await GardenContractV2.new(addressr0qjRlS, addressy7vwo52, addressZZ72bk8, {from: accounts[5]});
		const uintr2MhSSO = BigInt("232")
		const uintjyRiCAV = BigInt("2")
		const stringm8R78EO = "iCU"
		const stringbT9yK6 = "gokSkJojU8XDnzFH6qXRPsGD1X29UsIzXhfBdZQaVITvXGfctbZkDsNQmzklTHFv2Y"
		const stringefbLWgt = "xmFFAJufIiLYRGgaLH8K7QmGB5At82L9"
		const addresse4MGf5x = accounts[4]
//		const uint256l0tGH8U = await GardenContractV2UvS8xK8.getTotalsTLPHarvest.call(uintr2MhSSO, {from: accounts[4]});
//		const stringc6EmIyn = await GardenContractV2UvS8xK8.withdraw.call(stringm8R78EO, uintjyRiCAV, {from: accounts[5]});
//		const uint256L7yTsh = await GardenContractV2UvS8xK8.totalTLPGrowing.call(stringbT9yK6, {from: accounts[2]});
//		const uint256qnIHErd = await GardenContractV2UvS8xK8.balanceOf.call(addresse4MGf5x, stringefbLWgt, {from: accounts[0]});

		await expect(GardenContractV2UvS8xK8.getTotalsTLPHarvest.call(uintr2MhSSO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdSl1En9 = accounts[4]
		const addressIb9fxhy = accounts[3]
		const addressXWJrZpm = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addressdSl1En9, addressIb9fxhy, addressXWJrZpm, {from: accounts[2]});
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqVinHYwMOeQrFeIuYcj3NgPlc3XKKmXvFiNB195hQdSNXDUEhOEtm"
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSNsLqA = accounts[4]
		const addressoT1UKtr = accounts[4]
		const addressgtuZ0I = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addressSNsLqA, addressoT1UKtr, addressgtuZ0I, {from: accounts[3]});
		const stringvFtblTX = "NgyQVndckmvcSFQFVtd1YorM2nQGrDiBTB"
		const addresskSrUeS1 = accounts[2]
		const uintmN94aFH = BigInt("16")
		const stringb2LTrqF = "vqGg2vdWzoeguGQ4AiwuwZLwOLq5w64g1slv7RWhlLuzsuiF8W2afiHDj7Z2pV7aMDKImzPaG2GeEYgf"
//		const uint256ySoipw4 = await GardenContractV2SoAHr4H.balanceOf.call(addresskSrUeS1, stringvFtblTX, {from: accounts[2]});
//		const uint256QW8zHfB = await GardenContractV2SoAHr4H.timeUntilNextTLP.call(stringb2LTrqF, uintmN94aFH, {from: accounts[3]});

		await expect(GardenContractV2SoAHr4H.balanceOf.call(addresskSrUeS1, stringvFtblTX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressaThskw9 = accounts[4]
		const addressiXkKx6 = accounts[3]
		const addressOp8Ndeh = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addressaThskw9, addressiXkKx6, addressOp8Ndeh, {from: accounts[2]});
		const uintAyO0eAX = BigInt("162")
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqVinHYwMOeQrFeIuYcj3NgPlcs3XKKmXvFiNB195hQdSNXDUEhOEtm"
//		const uint256moaBRxj = await GardenContractV2j02oNET.getTotalrTLPHarvest.call(uintAyO0eAX, {from: accounts[3]});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.getTotalrTLPHarvest.call(uintAyO0eAX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOvVyGTg = accounts[4]
		const addressZW9pmcX = accounts[4]
		const addressAMaOH4g = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addressOvVyGTg, addressZW9pmcX, addressAMaOH4g, {from: accounts[3]});
		const stringy7UAGkE = "ux9tBPuDSBqy"
		const uintMkxCe5E = BigInt("79")
		const addressoCFT2Ld = "0x0000000000000000000000000000000000000001"
		const stringvFtblTX = "NyQVndckmvcSFQVtd1YorM2nQGrDiBTB"
		const addressKWqNUEQ = accounts[4]
//		const uint256rHsqlcx = await GardenContractV2SoAHr4H.totalTLPGrown.call(stringy7UAGkE, {from: accounts[2]});
//		const uint256mMTIssL = await GardenContractV2SoAHr4H.getTotalsTLPHarvest.call(uintMkxCe5E, {from: accounts[2]});
//		const addressauWonFs = await GardenContractV2SoAHr4H.changeOwner.call(addressoCFT2Ld, {from: accounts[3]});
//		const uint256ySoipw4 = await GardenContractV2SoAHr4H.balanceOf.call(addressKWqNUEQ, stringvFtblTX, {from: accounts[2]});

		await expect(GardenContractV2SoAHr4H.totalTLPGrown.call(stringy7UAGkE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYcAIhJO = accounts[4]
		const addressUnOZuN7 = accounts[3]
		const addressqVM43I5 = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addressYcAIhJO, addressUnOZuN7, addressqVM43I5, {from: accounts[2]});
		const uintth2tBKy = BigInt("232")
		const stringnC72n3o = "GcHMlWKN1Pu6Lb0gfhgPz5HeAtepBO7oKJF9997h3Wtvrf55HmyVJNpdStg6ayqa"
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqVinHYwMOeQrFeIuYcj3NgPlc3XKKmXvFiNB195hQdSNXDUEhOEtm"
//		const uint256QXnSQGu = await GardenContractV2j02oNET.timeUntilNextTLP.call(stringnC72n3o, uintth2tBKy, {from: accounts[1]});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.timeUntilNextTLP.call(stringnC72n3o, uintth2tBKy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscN5H79q = accounts[4]
		const addressUVHFhSs = accounts[3]
		const addressolGwtpx = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addresscN5H79q, addressUVHFhSs, addressolGwtpx, {from: accounts[2]});
		const stringVGj8fQm = "jKW1fAyNuu2wAEjYqxubQpE48fwG9iCPp7ZwbCDJ9lTLK17F5YyPbY5VE2e"
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqVinHYwMOeQrFeIuYcj3NgPlc3XKKmXvFiNB195hQdSNXDUEhOEWtm"
//		const uint256QXgBuI6 = await GardenContractV2j02oNET.totalTLPGrowing.call(stringVGj8fQm, {from: accounts[1]});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.totalTLPGrowing.call(stringVGj8fQm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoZiW9Cc = accounts[4]
		const addresspmoJCOv = accounts[4]
		const addressuAn6jYC = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addressoZiW9Cc, addresspmoJCOv, addressuAn6jYC, {from: accounts[3]});
		const boolZisoaph = true
		const uintgVkwftH = BigInt("136")
		const stringgYetKC9 = "2J23cRuW79K9ALZWpDla"
		const uintIz7TLAQ = BigInt("1083")
		const stringvFtblTX = "NyQVndckmvcSFQFVtd1YorM2nQGrDiBTB"
		const addresszPrEkFG = accounts[3]
//		const uint256qqUTqGC = await GardenContractV2SoAHr4H.plant.call(uintIz7TLAQ, stringgYetKC9, uintgVkwftH, boolZisoaph, {from: accounts[1]});
//		const uint256ySoipw4 = await GardenContractV2SoAHr4H.balanceOf.call(addresszPrEkFG, stringvFtblTX, {from: accounts[2]});

		await expect(GardenContractV2SoAHr4H.plant.call(uintIz7TLAQ, stringgYetKC9, uintgVkwftH, boolZisoaph, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshqGlA2D = accounts[4]
		const addressyhrMCVa = accounts[3]
		const addressE3zAHb = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addresshqGlA2D, addressyhrMCVa, addressE3zAHb, {from: accounts[2]});
		const uintASZy3C0 = BigInt("2021")
		const uintyaG4m5 = BigInt("35")
		const stringLqCiUQK = "EV8W9o756FVWzcwHOZX2sk"
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XHUUzTmIRVJjuqVinHYwMOeQrFeIuYcj3NgPlc3XKKmXvFiNB195hQdSNXDUEhOEtm"
		const uintvHCEdTZ = BigInt("156")
		const stringYFojTWp = "BbyQJ4Y5i8jFg37kCyRdOf7NBr9yy1Epg9DqqBJ5gcMERzbXVAkl2Gr2uNCuXq65OLxbrvfW"
		const addressXMSbRru = accounts[2]
//		const string5UQyDN = await GardenContractV2j02oNET.decompose.call(stringLqCiUQK, uintyaG4m5, uintASZy3C0, {from: accounts[3]});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});
//		const uint256kcSE1Lj = await GardenContractV2j02oNET.growthRemaining.call(addressXMSbRru, stringYFojTWp, uintvHCEdTZ, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.decompose.call(stringLqCiUQK, uintyaG4m5, uintASZy3C0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJUhPNXk = accounts[4]
		const addressLoNCjnp = accounts[4]
		const addresshHVCFPw = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addressJUhPNXk, addressLoNCjnp, addresshHVCFPw, {from: accounts[3]});
		const uintb0bLzHI = BigInt("143")
		const stringc4T74v = "4rmbWIb65vLmt0e3cwN"
		const addressjokJZ8n = accounts[4]
		const addressohZsHf8 = accounts[1]
		const stringvFtblTX = "NyQVndckmtcSFQFVtd1YorM2nQGrDiBTB"
		const addressRJBixfp = accounts[3]
//		const uint256jX193YE = await GardenContractV2SoAHr4H.growthRemaining.call(addressjokJZ8n, stringc4T74v, uintb0bLzHI, {from: accounts[1]});
//		const addressIFo6kbr = await GardenContractV2SoAHr4H.changeBenefitiary.call(addressohZsHf8, {from: accounts[3]});
//		const uint256ySoipw4 = await GardenContractV2SoAHr4H.balanceOf.call(addressRJBixfp, stringvFtblTX, {from: accounts[2]});

		await expect(GardenContractV2SoAHr4H.growthRemaining.call(addressjokJZ8n, stringc4T74v, uintb0bLzHI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQcbLdOx = accounts[4]
		const addressHuseikT = accounts[4]
		const addresstpQDl9Z = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addressQcbLdOx, addressHuseikT, addresstpQDl9Z, {from: accounts[3]});
		const uintoXl8jr1 = BigInt("169")
		const stringVeZgQ33 = "QgJ7G3GS9DnZPCMCA68uAjN75gZsEx765BgSYsA2tJ2JYKLUmS88WBIOrHJHBndL"
		const stringvFtblTX = "NyQVndckmwcFQFVtd1YorM2nQGrDiBTB"
		const addressycQs6D = accounts[3]
//		const stringZLobzJ9 = await GardenContractV2SoAHr4H.harvest.call(stringVeZgQ33, uintoXl8jr1, {from: accounts[5]});
//		const uint256ySoipw4 = await GardenContractV2SoAHr4H.balanceOf.call(addressycQs6D, stringvFtblTX, {from: accounts[2]});

		await expect(GardenContractV2SoAHr4H.harvest.call(stringVeZgQ33, uintoXl8jr1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssAFS4D = accounts[4]
		const addressexuNzjP = accounts[2]
		const addressx1VGCQB = accounts[3]
		const GardenContractV2FOScOmR = await GardenContractV2.new(addresssAFS4D, addressexuNzjP, addressx1VGCQB, {from: accounts[2]});
		const stringPcxTQwg = "7V77eNGnHFvKtMkhYdycNaJsjPIrmfC0VbUdXWM2cGlE4F7s7qD3SVB7FZbcAv5i16DpM7Rt"
		const addressKcspkVa = accounts[1]
		const uintZPluTo7 = BigInt("120")
		const uintaD30Pv0 = BigInt("39")
//		const uint256cHy4HtH = await GardenContractV2FOScOmR.totalTLPDecomposed.call(stringPcxTQwg, {from: accounts[4]});
//		const addressNz0UM4H = await GardenContractV2FOScOmR.changeBenefitiary.call(addressKcspkVa, {from: accounts[1]});
//		const uint8UdnrrA = await GardenContractV2FOScOmR.zeroHoldings.call(uintaD30Pv0, uintZPluTo7, {from: accounts[1]});

		await expect(GardenContractV2FOScOmR.totalTLPDecomposed.call(stringPcxTQwg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscvOdLfK = accounts[4]
		const addressq5GA6of = accounts[4]
		const addressrbvI36j = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addresscvOdLfK, addressq5GA6of, addressrbvI36j, {from: accounts[3]});
		const uintOZgkqvw = BigInt("0")
		const booliqrjQf5 = false
		const uintSfoIap1 = BigInt("15")
		const stringNIKjND = "qN2EAHILKxzriQCGueP5mhVwnhkpQJOrM"
		const uintyTZC3uK = BigInt("2001")
		const stringROC7PtB = "g2NSTakYLfvRxdqs775rTrQSVkdhUIX04v5Nd"
		const uintZV0Zdgp = BigInt("20")
		const stringRnxXJ3R = "3P1W3cqI2PixobBqBn9YnCBQRHU2Hq6KMb1"
//		const uint256KpFbc3Z = await GardenContractV2SoAHr4H.getTotalrTLPHarvest.call(uintOZgkqvw, {from: accounts[5]});
//		const uint256BBUAAIx = await GardenContractV2SoAHr4H.plant.call(uintyTZC3uK, stringNIKjND, uintSfoIap1, booliqrjQf5, {from: accounts[4]});
//		const uint256UegAEdH = await GardenContractV2SoAHr4H.totalTLPGrowing.call(stringROC7PtB, {from: accounts[3]});
//		const uint256vy0sh5 = await GardenContractV2SoAHr4H.timeUntilNextTLP.call(stringRnxXJ3R, uintZV0Zdgp, {from: accounts[3]});

		await expect(GardenContractV2SoAHr4H.getTotalrTLPHarvest.call(uintOZgkqvw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressz5Ru65W = accounts[4]
		const addressm1a6BQs = accounts[3]
		const addressdhdhIkP = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addressz5Ru65W, addressm1a6BQs, addressdhdhIkP, {from: accounts[2]});
		const stringetXGifH = "QUBCvtbK1HcoQJKGLxTa4zoULf94NiOJhhvFkQbzKFgjhviXHobOHriiBTy8rs9HNrtb4To2Awu2bKR"
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqVinHYwMOeQrFeIuYcj3NgPlc3XKKmXvFiNB195hQdSNXDUEhOEtm"
		const stringAcT3dT = "3JPUXoFPiInws12b6Gp2x8diK1She8O2a"
//		const uint256Gmjgrdj = await GardenContractV2j02oNET.totalTLPBurnt.call(stringetXGifH, {from: accounts[0]});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});
//		const uint256dzCg6A = await GardenContractV2j02oNET.totalTLPDecomposed.call(stringAcT3dT, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.totalTLPBurnt.call(stringetXGifH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressh6f8a1s = accounts[4]
		const address2m445F = accounts[3]
		const addressQXu9hLs = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addressh6f8a1s, address2m445F, addressQXu9hLs, {from: accounts[2]});
		const addresssx5iOuC = "0x0000000000000000000000000000000000000001"
		const addressVTTf1p = accounts[1]
		const uintee7KwPO = BigInt("114")
		const stringq76N98b = "SBZuUH9N7DoKS5f4JBeX5ZHgnRmW4gq9xsW9pCBd6J4VHywZBNL8Nomm7cxUzmNRNtE7oAHuGSXzeHHNdc3iL7mWI6gZHU"
		const addressMI0gKx = accounts[3]
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqVinHYwMOeQrFleIuYcj3NgzPlc3XKKmXvFiNB195hQdSNXDUEhOEtm"
//		const addressG0kUYiV = await GardenContractV2j02oNET.addTokenOwner.call(addressVTTf1p, addresssx5iOuC, {from: accounts[2]});
//		const uint256Gh4DB9E = await GardenContractV2j02oNET.timeUntilNextTLP.call(stringq76N98b, uintee7KwPO, {from: accounts[4]});
//		const addressTLeFHNA = await GardenContractV2j02oNET.renounceTokenOwner.call(addressMI0gKx, {from: "0x0000000000000000000000000000000000000001"});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.addTokenOwner.call(addressVTTf1p, addresssx5iOuC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspwaQ4VF = accounts[4]
		const addressjOhuSlZ = accounts[4]
		const addressN9gNhmL = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addresspwaQ4VF, addressjOhuSlZ, addressN9gNhmL, {from: accounts[3]});
		const uintbX1zkLR = BigInt("217")
		const stringlONAn0n = "fxnuki96WeY8EGx8OqIoMT4yaKyhuOqYj4eX9i4UqIVx1hU88MWYkaILAbVp5OZpWTEHzDT"
		const stringvFtblTX = "NyQVndckmvcSFQFVtd1YorM2nQGrDiBTB"
		const addressZKTPC4m = accounts[3]
//		await GardenContractV2SoAHr4H.totalBedSupply.call(stringlONAn0n, uintbX1zkLR, {from: accounts[1]});
//		const uint256ySoipw4 = await GardenContractV2SoAHr4H.balanceOf.call(addressZKTPC4m, stringvFtblTX, {from: accounts[2]});

		await expect(GardenContractV2SoAHr4H.totalBedSupply.call(stringlONAn0n, uintbX1zkLR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXOIF2jA = accounts[4]
		const addresseUvrDkF = accounts[3]
		const addressC4ERrVe = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addressXOIF2jA, addresseUvrDkF, addressC4ERrVe, {from: accounts[2]});
		const uintqbRVBJd = BigInt("232")
		const stringHTc3fnN = "xY7ZCiQXt99AU69vN2Pxmp5J4LlHzGpSa5puoN94ujt6nGsSDAfE"
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqVinHYwMOeQrFleIuYcj3NgPlc3uKKmXvFiNB195hQdSNXDUEhOEtm"
//		const stringrllzzcW = await GardenContractV2j02oNET.claimDecompose.call(stringHTc3fnN, uintqbRVBJd, {from: "0x0000000000000000000000000000000000000001"});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.claimDecompose.call(stringHTc3fnN, uintqbRVBJd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYi2INNE = accounts[4]
		const addresspdmZHyf = accounts[4]
		const addresshf1tC28 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2SoAHr4H = await GardenContractV2.new(addressYi2INNE, addresspdmZHyf, addresshf1tC28, {from: accounts[3]});
		const addressDUiNXIK = accounts[4]
		const stringvFtblTX = "NyQVndckmvcSFQFVtd1YorM2nQGrDiBTB"
		const addressjq0asqI = accounts[5]
		const addressRCIXhMB = await GardenContractV2SoAHr4H.changeOwner.call(addressDUiNXIK, {from: accounts[3]});
//		const uint256ySoipw4 = await GardenContractV2SoAHr4H.balanceOf.call(addressjq0asqI, stringvFtblTX, {from: accounts[2]});

		await expect(GardenContractV2SoAHr4H.balanceOf.call(addressjq0asqI, stringvFtblTX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKmTw4Sy = "0x0000000000000000000000000000000000000001"
		const addressifM1zfe = accounts[3]
		const addresssvtUmMe = accounts[3]
		const GardenContractV2KyGTOt = await GardenContractV2.new(addressKmTw4Sy, addressifM1zfe, addresssvtUmMe, {from: "0x0000000000000000000000000000000000000001"});
		const stringsmD7IJ3 = "22mDUXq3TqpElrjgFGfraU51pybWyldMM5v"
		const addressWF1my0G = accounts[0]
		const uint256dWzgStk = await GardenContractV2KyGTOt.totalTLPBurnt.call(stringsmD7IJ3, {from: accounts[4]});
		const addressu2fhI2H = await GardenContractV2KyGTOt.changeBenefitiary.call(addressWF1my0G, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressMmhl5Oe = accounts[4]
		const addressb8h27sS = accounts[3]
		const addressSFfzYS = accounts[1]
		const GardenContractV2j02oNET = await GardenContractV2.new(addressMmhl5Oe, addressb8h27sS, addressSFfzYS, {from: accounts[2]});
		const addressx8KPte5 = accounts[0]
		const stringOWsODrt = "U4npLISPYIYowbwtKxDgZu2XUUzTmIRVJjuqViDHYwMOeQrFleIuYcj3NgPlc3XKKmXvFi0B195hQdSNXDUEhOEtm"
		const addressVPRdTtt = await GardenContractV2j02oNET.changeBenefitiary.call(addressx8KPte5, {from: accounts[2]});
//		const stringXi0DYbC = await GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]});

		await expect(GardenContractV2j02oNET.harvestAllBeds.call(stringOWsODrt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})