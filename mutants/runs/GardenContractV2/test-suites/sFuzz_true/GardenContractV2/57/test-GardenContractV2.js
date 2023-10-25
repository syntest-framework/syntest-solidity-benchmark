const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addresswUvkRid = accounts[3]
		const addressoRPj136 = accounts[0]
		const addressWc5PwE = accounts[4]
		const GardenContractV2ViwNfkW = await GardenContractV2.new(addresswUvkRid, addressoRPj136, addressWc5PwE, {from: accounts[1]});
		const uintXDzyW7S = BigInt("193")
		const stringnKUArbD = "Yv5irPJKnejK3WQn1Asur6Jqs9o7"
		const addressCmGP9B = accounts[0]
		const stringLxo0qgM = "swg7NvSLmMcG9NA8Nq1PY0FH26eVDFDf2Ze7Nt6sQ8caPsxbSz4DE2EuSbbjpogi0p9I4SweCRdceXNY1P1dTpvE"
		const uintseqraiY = BigInt("160")
		const stringpMzaA1 = "V3BBtKSDocYbsS3NCqmH5cQ1K5xbIBTsDXMGHckwuqxj2q6QqXUYVf9Og4CvGaVjMS2YpKLQgEgJ6AOI"
		const uintYMlxp00 = BigInt("124")
		const uintikEvjit = BigInt("162")
		const stringzyEFtfm = "gVJANxT6CUfjdxZuP1XSs2jdreCpXHW24goS5VbmqHPg"
		const uint256MpX0Hx = await GardenContractV2ViwNfkW.growthRemaining.call(addressCmGP9B, stringnKUArbD, uintXDzyW7S, {from: accounts[2]});
		const uint256raKaRIj = await GardenContractV2ViwNfkW.totalGardenSupply.call(stringLxo0qgM, {from: accounts[1]});
		const stringqIqRMoC = await GardenContractV2ViwNfkW.claimDecompose.call(stringpMzaA1, uintseqraiY, {from: accounts[1]});
		const uint8mmsQHBG = await GardenContractV2ViwNfkW.setTimeStamp.call(uintikEvjit, uintYMlxp00, {from: accounts[4]});
		const uint256ehfRV16 = await GardenContractV2ViwNfkW.totalTLPGrown.call(stringzyEFtfm, {from: accounts[3]});

		await expect(GardenContractV2ViwNfkW.growthRemaining.call(addressCmGP9B, stringnKUArbD, uintXDzyW7S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressspEOzb = accounts[2]
		const addressi30rqUg = accounts[2]
		const addressaM6cVhF = accounts[1]
		const GardenContractV2VRAsxp = await GardenContractV2.new(addressspEOzb, addressi30rqUg, addressaM6cVhF, {from: accounts[2]});
		const uintQkalULR = BigInt("37")
		const addresshkjxUZC = accounts[4]
		const addressmLFF2tr = accounts[1]
		const addressa97x1E = accounts[1]
		const stringLsXm0DU = "OQs6Plwwr5vrAcugWSP4naXVWzKlP1HEKpdBjVDpjdITid8IsE6AtNdhbzsFG021FHgS3xylKrQJS"
		const uint256eku5Ho7 = await GardenContractV2VRAsxp.getTotalsTLPHarvest.call(uintQkalULR, {from: "0x0000000000000000000000000000000000000001"});
		const addressHiKdwiB = await GardenContractV2VRAsxp.changeBenefitiary.call(addresshkjxUZC, {from: accounts[1]});
		const addressULf8sWv = await GardenContractV2VRAsxp.addTokenOwner.call(addressa97x1E, addressmLFF2tr, {from: accounts[1]});
		const uint256uPoI9RH = await GardenContractV2VRAsxp.totalTLPGrowing.call(stringLsXm0DU, {from: accounts[1]});

		await expect(GardenContractV2VRAsxp.getTotalsTLPHarvest.call(uintQkalULR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstITVil1 = accounts[0]
		const addressprGcdNI = accounts[2]
		const addressv01KfQs = "0x0000000000000000000000000000000000000001"
		const GardenContractV2VM1xlzp = await GardenContractV2.new(addresstITVil1, addressprGcdNI, addressv01KfQs, {from: accounts[0]});
		const uintTxJbGO8 = BigInt("193")
		const stringYez4Gwy = "zTWxj14"
		const addressM8nH8n4 = accounts[0]
		const addressxVt7o2S = accounts[0]
		const addresslDQ1j0 = accounts[5]
		const uintrejWKD = BigInt("156")
		const stringTRB13FG = "R1eSGagFOBgLoYh2fcBFpbFTJSOR6EIJifBEATWXvHEudX6D3ALh9wujXVrNXYArapUhCp12ftQ50Y1X1hor7n8WdCiPi7CHcnB"
		const stringx39RnS4 = await GardenContractV2VM1xlzp.harvest.call(stringYez4Gwy, uintTxJbGO8, {from: accounts[3]});
		const addressjiNnQ7 = await GardenContractV2VM1xlzp.addTokenOwner.call(addressxVt7o2S, addressM8nH8n4, {from: accounts[1]});
		const addressVJURRng = await GardenContractV2VM1xlzp.renounceTokenOwner.call(addresslDQ1j0, {from: accounts[0]});
		const stringT5W4P4w = await GardenContractV2VM1xlzp.withdraw.call(stringTRB13FG, uintrejWKD, {from: accounts[4]});

		await expect(GardenContractV2VM1xlzp.harvest.call(stringYez4Gwy, uintTxJbGO8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressHfWMMI = accounts[1]
		const addressMclHwxz = accounts[1]
		const addresscy9cJyM = accounts[3]
		const GardenContractV2va46lc9 = await GardenContractV2.new(addressHfWMMI, addressMclHwxz, addresscy9cJyM, {from: accounts[4]});
		const addressTBjasl1 = accounts[3]
		const address9vVyU6 = accounts[0]
		const addressLSp5hhs = accounts[4]
		const uintJLH8aox = BigInt("125")
		const stringBCkdo2X = "iLGI7jnuPpPwCQTMXPLhQJSQpJHCSG7LNaOL4f6osgoQTOMpQQoC6mad6Z"
		const uintPdHE76U = BigInt("201")
		const uintbZ96q3X = BigInt("60")
		const addressVMAb7xF = await GardenContractV2va46lc9.addTokenOwner.call(address9vVyU6, addressTBjasl1, {from: accounts[5]});
		const addressXsjto6H = await GardenContractV2va46lc9.changeOwner.call(addressLSp5hhs, {from: accounts[1]});
		const stringztDpFG = await GardenContractV2va46lc9.claimDecompose.call(stringBCkdo2X, uintJLH8aox, {from: accounts[0]});
		const uint8rWQxgms = await GardenContractV2va46lc9.zeroHoldings.call(uintbZ96q3X, uintPdHE76U, {from: accounts[0]});

		await expect(GardenContractV2va46lc9.addTokenOwner.call(address9vVyU6, addressTBjasl1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressmaxPhuD = accounts[4]
		const addresskiLFr3S = accounts[0]
		const addressI7PZZzE = accounts[0]
		const GardenContractV2RaN5Ic2 = await GardenContractV2.new(addressmaxPhuD, addresskiLFr3S, addressI7PZZzE, {from: accounts[4]});
		const stringWExpGph = "ANUASDSVdU7ClSUNNYmQ3tXI"
		const stringBf00Fsw = "LLkNLAh9HqwgCzcnEuk7NlGEhwkvDifkVPJIoVZFj2leAfdHAqEPQKYE338M7FpBBmuqltwHMzJdIEiFeI73vWK0zaoqads7J"
		const addressjg6dzEE = accounts[5]
		const uintrWhUlWI = BigInt("34")
		const uintdrAz6Wj = BigInt("28")
		const uintEIpn7yn = BigInt("185")
		const stringO1Qg20q = "QIAOJuqreGALWQAgPUpCAOyLKgoibNml3rQ7rXAEJGonLLbPYvpun5CIl8OjXLpnOTnkCS"
		const uint256nz9S0bf = await GardenContractV2RaN5Ic2.totalTLPDecomposed.call(stringWExpGph, {from: accounts[4]});
		const uint256E2S2WBY = await GardenContractV2RaN5Ic2.balanceOf.call(addressjg6dzEE, stringBf00Fsw, {from: "0x0000000000000000000000000000000000000001"});
		const uint8PQhy0r = await GardenContractV2RaN5Ic2.operationBurnMint.call(uintEIpn7yn, uintdrAz6Wj, uintrWhUlWI, {from: accounts[3]});
		const uint256vLKlgb7 = await GardenContractV2RaN5Ic2.totalTLPDecomposed.call(stringO1Qg20q, {from: accounts[0]});

		await expect(GardenContractV2RaN5Ic2.totalTLPDecomposed.call(stringWExpGph, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTvCU1rs = accounts[2]
		const addresssULweA3 = "0x0000000000000000000000000000000000000001"
		const addresswoH4xkg = accounts[4]
		const GardenContractV2DIxa0R = await GardenContractV2.new(addressTvCU1rs, addresssULweA3, addresswoH4xkg, {from: "0x0000000000000000000000000000000000000001"});
		const string8JtBqU = "Qxg7Ikn8u5PJ2VlcCqQyTvh3OIsntigQNX78RtzxheJY6hh4iCrdp6BSwckTRI"
		const stringGbhGQBh = "qFXjYoeiFA5vhg0p1bLL9DSlPaA4zpCfLgG"
		const addressnydv5C = accounts[2]
		const uinteh83aE6 = BigInt("910")
		const uintO1TtrPT = BigInt("186")
		const stringFUQQ4Hg = ""
		const uintcVG5FJX = BigInt("17")
		const stringq85Yjb6 = "WW5ssNJimU2IYxcdc7HTNC7AkBVj7kKLJ4vsiATym7NKuA2KHNDczwsmHAVyD6WyZGHP6bSCVp"
		const uintsjDdT2 = BigInt("171")
		const stringku0WUMU = "Ja2LoI"
		const uint256lsdSDMC = await GardenContractV2DIxa0R.totalTLPGrown.call(string8JtBqU, {from: accounts[4]});
		const uint256TOlMJaw = await GardenContractV2DIxa0R.totalTLPGrowing.call(stringGbhGQBh, {from: accounts[1]});
		const addressOJaQjeU = await GardenContractV2DIxa0R.changeOwner.call(addressnydv5C, {from: accounts[1]});
		const stringau63Oga = await GardenContractV2DIxa0R.decompose.call(stringFUQQ4Hg, uintO1TtrPT, uinteh83aE6, {from: accounts[5]});
		const stringk2rFETR = await GardenContractV2DIxa0R.withdraw.call(stringq85Yjb6, uintcVG5FJX, {from: accounts[1]});
		const stringC8ghzW7 = await GardenContractV2DIxa0R.claimDecompose.call(stringku0WUMU, uintsjDdT2, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressqwG6HCS = accounts[2]
		const addressCBXLGcV = accounts[1]
		const addressZchHWP = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressqwG6HCS, addressCBXLGcV, addressZchHWP, {from: accounts[1]});
		const uintp9PCBeA = BigInt("243")
		const stringDhFeUv1 = "C2OQm65aG4dre1zcHLpEuKCK2NlO"
		const addressNnkHfFV = accounts[3]
		const addresshWAFOnC = accounts[2]
		const addressHwdxqJE = accounts[3]
		const stringLgAToC = await GardenContractV20ZpyTf.withdraw.call(stringDhFeUv1, uintp9PCBeA, {from: accounts[1]});
		const addressisVzrkc = await GardenContractV20ZpyTf.addTokenOwner.call(addresshWAFOnC, addressNnkHfFV, {from: accounts[4]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressHwdxqJE, {from: accounts[0]});

		await expect(GardenContractV20ZpyTf.withdraw.call(stringDhFeUv1, uintp9PCBeA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressd7WEoZk = accounts[2]
		const addressTcc2NSk = accounts[1]
		const addressfK1xNrw = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressd7WEoZk, addressTcc2NSk, addressfK1xNrw, {from: accounts[1]});
		const addressSgHFPA3 = accounts[2]
		const addressjiPPDiT = accounts[3]
		const addresskX1FxqL = accounts[2]
		const stringK0uG4xy = "Bis4cET7fgPhhgpmTHMm64cr8XbsGnntcuMRiy45Iqmpub0YfvQ49ByczEThMyv7ecpAnTU52"
		const uintx8AedS = BigInt("13")
		const uintfTm9bdl = BigInt("35")
		const addresszm6pltt = await GardenContractV20ZpyTf.addTokenOwner.call(addressjiPPDiT, addressSgHFPA3, {from: accounts[1]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addresskX1FxqL, {from: accounts[0]});
		const uint256Yakdej4 = await GardenContractV20ZpyTf.totalTLPDecomposed.call(stringK0uG4xy, {from: accounts[1]});
		const uint8uIX0ITV = await GardenContractV20ZpyTf.setTimeStamp.call(uintfTm9bdl, uintx8AedS, {from: accounts[0]});

		await expect(GardenContractV20ZpyTf.addTokenOwner.call(addressjiPPDiT, addressSgHFPA3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshk99Yjh = accounts[0]
		const addressWYbsITp = accounts[5]
		const addresssvlxgYh = accounts[1]
		const GardenContractV2ACbuB3G = await GardenContractV2.new(addresshk99Yjh, addressWYbsITp, addresssvlxgYh, {from: accounts[1]});
		const stringVQbdUA = "e3JqFfJ"
		const uintIdyaXkM = BigInt("208")
		const uintvndZiaA = BigInt("22")
		const uintmHoMuxa = BigInt("108")
		const stringFa2lkm = "enxIEaDxAURoxqsi0WbP65NV2fRA"
		const boolxWnuHHx = false
		const uintb2joOGW = BigInt("47")
		const stringVw0jFmp = "KATamTffNGFAfz6qCqeVMA94btsu37j5oT4e6TkXgP15E5Pn"
		const uintKNLnk49 = BigInt("1072")
		const uintWlddXWi = BigInt("1676")
		const uintd4byKqG = BigInt("193")
		const uintZ64hhzr = BigInt("164")
		const uint256tHH0A1 = await GardenContractV2ACbuB3G.totalTLPGrowing.call(stringVQbdUA, {from: accounts[2]});
		const uint8IFrn5uu = await GardenContractV2ACbuB3G.zeroHoldings.call(uintvndZiaA, uintIdyaXkM, {from: accounts[2]});
		const uint2560hTnqr = await GardenContractV2ACbuB3G.getTotalrTLPHarvest.call(uintmHoMuxa, {from: accounts[4]});
		const uint256BD4lymq = await GardenContractV2ACbuB3G.totalTLPDecomposed.call(stringFa2lkm, {from: accounts[4]});
		const uint256nBsSNmS = await GardenContractV2ACbuB3G.plant.call(uintKNLnk49, stringVw0jFmp, uintb2joOGW, boolxWnuHHx, {from: accounts[5]});
		const uint8dHgnCYw = await GardenContractV2ACbuB3G.operationBurnMint.call(uintZ64hhzr, uintd4byKqG, uintWlddXWi, {from: accounts[0]});

		await expect(GardenContractV2ACbuB3G.totalTLPGrowing.call(stringVQbdUA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressF4As0m = accounts[2]
		const addressqVAlY24 = accounts[1]
		const addressIegaSb = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressF4As0m, addressqVAlY24, addressIegaSb, {from: accounts[1]});
		const stringrqPM2P = "ypcZsLApdFleWAAX"
		const addressMiJKI7v = accounts[2]
		const uint256VbyD37h = await GardenContractV20ZpyTf.totalTLPGrown.call(stringrqPM2P, {from: accounts[0]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressMiJKI7v, {from: accounts[0]});

		await expect(GardenContractV20ZpyTf.totalTLPGrown.call(stringrqPM2P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressjRU7LPZ = accounts[2]
		const addressyGqShH = accounts[1]
		const addressdqf715e = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressjRU7LPZ, addressyGqShH, addressdqf715e, {from: accounts[1]});
		const uintK8bgqda = BigInt("84")
		const stringYqNIt7h = "WPsGjiA8OsRX3f43M9fdqTX9pGrchhzkR44FUYwsEhj5924cSpSj7nMpTqz4ULwG6UilQjEdsSnw"
		const uintG90DT9e = BigInt("26")
		const stringIelB1mU = "QA3rn9Gy2XmqAXiD1dVCRyCBw2uLlmHOiPovsW2kIYRCpOykuubUJ2"
		const addressB1OF0zo = accounts[3]
		const uint256PwArMkB = await GardenContractV20ZpyTf.timeUntilNextTLP.call(stringYqNIt7h, uintK8bgqda, {from: accounts[1]});
		const stringvWgc89q = await GardenContractV20ZpyTf.harvest.call(stringIelB1mU, uintG90DT9e, {from: accounts[4]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressB1OF0zo, {from: accounts[0]});

		await expect(GardenContractV20ZpyTf.timeUntilNextTLP.call(stringYqNIt7h, uintK8bgqda, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressj3KjVd8 = accounts[2]
		const addressg4hscZR = accounts[1]
		const addressQTXuGbt = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressj3KjVd8, addressg4hscZR, addressQTXuGbt, {from: accounts[1]});
		const stringvaMVnc = "hWMm8LX6eFAk4KRkO1d74qVWCXb6kAdmVpyQtnqtEKga7BMxV55CHwnyMqnFoE2gbxFQFoHZ2YLStFOO5m448aA9p54hTL3Nvw"
		const addressWeZ0z8H = accounts[5]
		const addressJsZbiFE = accounts[2]
		const stringVArAZU9 = "bwt1GeXPzxejg1Bxhz2hpod3wCQBJezbMVSn1ghRjLQj33dAwyralM4uAEQxv95dVZdivsswKgXnrmlkY3"
		const uint256OMbPPMP = await GardenContractV20ZpyTf.balanceOf.call(addressWeZ0z8H, stringvaMVnc, {from: accounts[4]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressJsZbiFE, {from: accounts[0]});
		const stringH8trF2h = await GardenContractV20ZpyTf.harvestAllBeds.call(stringVArAZU9, {from: accounts[3]});

		await expect(GardenContractV20ZpyTf.balanceOf.call(addressWeZ0z8H, stringvaMVnc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxbLzOjh = accounts[2]
		const addressbIlI7q = accounts[1]
		const addresszWUJgY = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressxbLzOjh, addressbIlI7q, addresszWUJgY, {from: accounts[1]});
		const uintH6JjMLg = BigInt("226")
		const stringFULAkY6 = "5Iluae75C8SKxjNbGH7lBk7otyknLuAAUe05lGMgdlvUm"
		const addressHGeQsBI = accounts[2]
		const uintIks77Em = BigInt("152")
		const uintsWv7TKB = BigInt("84")
		const stringK0uG4xy = "Bis4cET7fgPhhgpmTHMm64cr8XbsGnntcuMRiz45Iqmpub0YfvQ4ByczEThMMyv7ecpAnTU52"
		await GardenContractV20ZpyTf.totalBedSupply.call(stringFULAkY6, uintH6JjMLg, {from: accounts[2]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressHGeQsBI, {from: accounts[0]});
		const uint84oXdoN = await GardenContractV20ZpyTf.setTimeStamp.call(uintsWv7TKB, uintIks77Em, {from: accounts[3]});
		const uint256Yakdej4 = await GardenContractV20ZpyTf.totalTLPDecomposed.call(stringK0uG4xy, {from: accounts[1]});

		await expect(GardenContractV20ZpyTf.totalBedSupply.call(stringFULAkY6, uintH6JjMLg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZL4PPD = accounts[2]
		const addresssIfLfeb = accounts[4]
		const addressktTvjYg = accounts[4]
		const GardenContractV2Selc3s = await GardenContractV2.new(addressZL4PPD, addresssIfLfeb, addressktTvjYg, {from: accounts[2]});
		const stringGOE1sze = "yrEm1R4KL7SMVjjWjoEVgh8oFNjXxLRqTJTcLvlM7b7kIOMlQ2u73sBSfNzYv61fC8x1U26IVGi8ZmbucwYEvVxRZu8"
		const uint256D8SNTIS = await GardenContractV2Selc3s.totalTLPBurnt.call(stringGOE1sze, {from: accounts[0]});

		await expect(GardenContractV2Selc3s.totalTLPBurnt.call(stringGOE1sze, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressyabarBD = accounts[2]
		const addressqb69oZ3 = accounts[1]
		const addressiuhP9PE = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressyabarBD, addressqb69oZ3, addressiuhP9PE, {from: accounts[1]});
		const stringPJ79bzu = "D4HjfHL4V8qfSww0pMpK"
		const addressRDRbMnQ = accounts[2]
		const stringK0uG4xy = "Bis4cET7fgPhhgpmTHMm64cr8XbsGnntcuMRiz45Iqmpub0YfvQ4ByczEThMyv7ecpAnTU52"
		const stringXeyDlvk = "sNNcJ2dsSG3oMx6oIpRDGUAEYRg752yA7e"
		const addressfDHf2hB = accounts[2]
		const uintfI2SjDr = BigInt("69")
		const stringTMK5DkY = "sPifPdMVWQ8bf2Y1zShERubb"
		const stringN3ki4Q8 = await GardenContractV20ZpyTf.harvestAllBeds.call(stringPJ79bzu, {from: accounts[4]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressRDRbMnQ, {from: accounts[0]});
		const uint256Yakdej4 = await GardenContractV20ZpyTf.totalTLPDecomposed.call(stringK0uG4xy, {from: accounts[1]});
		const uint256T0wuGBd = await GardenContractV20ZpyTf.balanceOf.call(addressfDHf2hB, stringXeyDlvk, {from: accounts[4]});
		const stringuN0SG5u = await GardenContractV20ZpyTf.claimDecompose.call(stringTMK5DkY, uintfI2SjDr, {from: accounts[2]});

		await expect(GardenContractV20ZpyTf.harvestAllBeds.call(stringPJ79bzu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseHlnS5 = accounts[0]
		const addressbd6kU5 = accounts[5]
		const addressBzkNo7g = accounts[4]
		const GardenContractV2jImZEsZ = await GardenContractV2.new(addresseHlnS5, addressbd6kU5, addressBzkNo7g, {from: accounts[4]});
		const uintaW6WF3m = BigInt("171")
		const uintXri8jny = BigInt("175")
		const stringfw7Tk9w = "BlkiARSok43lVSqZMMrI9Trj"
		const uint51G2T6 = BigInt("141")
		const uintxZAKFf = BigInt("110")
		const stringPUF3DM = "jnxp1wcXD89d2pgtH1oWmDzyRziYHM8TdVJtRXzGH24W0vZwYsw277zbIPmPzbEMNqhbTm1Hjrlh5GO"
		const uint8K7iSa1z = await GardenContractV2jImZEsZ.setTimeStamp.call(uintXri8jny, uintaW6WF3m, {from: accounts[2]});
		const uint256h2vZ2Fu = await GardenContractV2jImZEsZ.totalTLPBurnt.call(stringfw7Tk9w, {from: accounts[1]});
		const uint256MQqp5F = await GardenContractV2jImZEsZ.getTotalsTLPHarvest.call(uint51G2T6, {from: accounts[0]});
		const stringbhYF2Km = await GardenContractV2jImZEsZ.harvest.call(stringPUF3DM, uintxZAKFf, {from: accounts[3]});

		await expect(GardenContractV2jImZEsZ.setTimeStamp.call(uintXri8jny, uintaW6WF3m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressE5hYYxd = accounts[2]
		const addressstwdKrO = accounts[1]
		const addressLFTuszW = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressE5hYYxd, addressstwdKrO, addressLFTuszW, {from: accounts[1]});
		const uinth4OPCJS = BigInt("1283")
		const uintLfSoBQP = BigInt("85")
		const stringcVr2EXO = "B4VSi1"
		const addressNdkfGNr = accounts[4]
		const stringx4dnCzW = await GardenContractV20ZpyTf.decompose.call(stringcVr2EXO, uintLfSoBQP, uinth4OPCJS, {from: accounts[2]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressNdkfGNr, {from: accounts[0]});

		await expect(GardenContractV20ZpyTf.decompose.call(stringcVr2EXO, uintLfSoBQP, uinth4OPCJS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressRorr0jx = "0x0000000000000000000000000000000000000001"
		const addressLn3JU1o = accounts[4]
		const addressp2fwAjj = accounts[5]
		const GardenContractV2VurFePu = await GardenContractV2.new(addressRorr0jx, addressLn3JU1o, addressp2fwAjj, {from: accounts[3]});
		const uintXRxEVf = BigInt("199")
		const stringFzZOSgP = "URx1wIXM4wEwRDtV7FyFJR51JPUWXWDB7LTA4BDM1n1IfQSlNVl"
		const uintmgejqqO = BigInt("83")
		const stringHJcS03 = "yAwaAEbNozzSsZTdNeh7uCZYPH9jLsOQX7cGu6KfsMIEVJ7as"
		const addressjpza0Mq = accounts[2]
		const stringpgsxjCz = await GardenContractV2VurFePu.claimDecompose.call(stringFzZOSgP, uintXRxEVf, {from: accounts[1]});
		await GardenContractV2VurFePu.totalBedSupply.call(stringHJcS03, uintmgejqqO, {from: accounts[3]});
		const addressOsJG5N6 = await GardenContractV2VurFePu.changeBenefitiary.call(addressjpza0Mq, {from: accounts[2]});

		await expect(GardenContractV2VurFePu.claimDecompose.call(stringFzZOSgP, uintXRxEVf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGY9AtaY = accounts[0]
		const addressnSWPCvZ = accounts[5]
		const addressKjemTB6 = accounts[4]
		const GardenContractV2jImZEsZ = await GardenContractV2.new(addressGY9AtaY, addressnSWPCvZ, addressKjemTB6, {from: accounts[4]});
		const boolecB6wPq = false
		const uintkn1baG3 = BigInt("60")
		const stringdyXOyjj = "QJnJfv1VMCa3"
		const uintSNUeK2u = BigInt("1198")
		const uintGFcHjQ = BigInt("84")
		const uint256U2Hk9Rd = await GardenContractV2jImZEsZ.plant.call(uintSNUeK2u, stringdyXOyjj, uintkn1baG3, boolecB6wPq, {from: accounts[4]});
		const uint256MQqp5F = await GardenContractV2jImZEsZ.getTotalsTLPHarvest.call(uintGFcHjQ, {from: accounts[0]});

		await expect(GardenContractV2jImZEsZ.plant.call(uintSNUeK2u, stringdyXOyjj, uintkn1baG3, boolecB6wPq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAO2tmgm = accounts[0]
		const addressJd1fKUm = accounts[5]
		const addressU6M4jsG = accounts[4]
		const GardenContractV2jImZEsZ = await GardenContractV2.new(addressAO2tmgm, addressJd1fKUm, addressU6M4jsG, {from: accounts[4]});
		const uintU84ADXz = BigInt("250")
		const uintZYj8wWt = BigInt("144")
		const uint256KJ9TPYW = await GardenContractV2jImZEsZ.getTotalrTLPHarvest.call(uintU84ADXz, {from: accounts[4]});
		const uint256MQqp5F = await GardenContractV2jImZEsZ.getTotalsTLPHarvest.call(uintZYj8wWt, {from: accounts[0]});

		await expect(GardenContractV2jImZEsZ.getTotalrTLPHarvest.call(uintU84ADXz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressv4r1tz8 = accounts[2]
		const addressti4O4RE = accounts[1]
		const addressfUxOr6t = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressv4r1tz8, addressti4O4RE, addressfUxOr6t, {from: accounts[1]});
		const stringNbJlr3n = "uW5NKgZQfMgf8EfJw3tmHfkTOFYDib02VIwnq8vs4eTEzMlGOcvHzk7CT"
		const stringVCFGqR = "vcbZxGN1Cfq7ez7dtsyVciKHul9REh9Ox8Y6mUt9FxhNMFJ48ifMrVim57sjM5BRRfLOmhj"
		const addressW9i3O0R = accounts[3]
		const uint256TL9LpT7 = await GardenContractV20ZpyTf.totalGardenSupply.call(stringNbJlr3n, {from: accounts[4]});
		const uint256LSrBQAT = await GardenContractV20ZpyTf.totalTLPGrown.call(stringVCFGqR, {from: accounts[3]});
		const addressmhyfilc = await GardenContractV20ZpyTf.renounceTokenOwner.call(addressW9i3O0R, {from: accounts[0]});

		await expect(GardenContractV20ZpyTf.totalGardenSupply.call(stringNbJlr3n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressyliZeoZ = accounts[2]
		const addresszgBb7KN = accounts[1]
		const addressZPJDLuW = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressyliZeoZ, addresszgBb7KN, addressZPJDLuW, {from: accounts[1]});
		const addressvepHwo = accounts[3]
		const stringVArAZU9 = "bwt1GeXPzxejg1Bxhz2hpod3wCQBJezbMVSFn1ghjLQj33dAwyralM4uAEQxv95dVZdivsswKgXnrmlkY3"
		const addresscth4gR = await GardenContractV20ZpyTf.changeOwner.call(addressvepHwo, {from: accounts[1]});
		const stringH8trF2h = await GardenContractV20ZpyTf.harvestAllBeds.call(stringVArAZU9, {from: accounts[3]});

		await expect(GardenContractV20ZpyTf.harvestAllBeds.call(stringVArAZU9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJlKqJTZ = accounts[2]
		const addressodgb5aM = accounts[1]
		const addressYHyoPOw = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressJlKqJTZ, addressodgb5aM, addressYHyoPOw, {from: accounts[1]});
		const addresswS9l3cs = accounts[4]
		const addressV5EJVVb = await GardenContractV20ZpyTf.renounceTokenOwner.call(addresswS9l3cs, {from: accounts[1]});

		await expect(GardenContractV20ZpyTf.renounceTokenOwner.call(addresswS9l3cs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address3J2WYA = accounts[0]
		const addressbmQF4Ng = accounts[5]
		const addresspOA573 = accounts[4]
		const GardenContractV2jImZEsZ = await GardenContractV2.new(address3J2WYA, addressbmQF4Ng, addresspOA573, {from: accounts[4]});
		const addressmmdFSSX = accounts[0]
		const uintYmbDWrr = BigInt("238")
		const uintqBXa61C = BigInt("2046")
		const uintbV7LREi = BigInt("159")
		const uintqnbIu1P = BigInt("16")
		const addressBxR14DQ = await GardenContractV2jImZEsZ.changeBenefitiary.call(addressmmdFSSX, {from: accounts[4]});
		const uint256KJ9TPYW = await GardenContractV2jImZEsZ.getTotalrTLPHarvest.call(uintYmbDWrr, {from: accounts[4]});
		const uint8rO3M6ML = await GardenContractV2jImZEsZ.operationBurnMint.call(uintqnbIu1P, uintbV7LREi, uintqBXa61C, {from: accounts[1]});

		await expect(GardenContractV2jImZEsZ.getTotalrTLPHarvest.call(uintYmbDWrr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressL88P0KA = accounts[2]
		const addressO3FkcIW = accounts[1]
		const addressWbnDiC7 = accounts[1]
		const GardenContractV20ZpyTf = await GardenContractV2.new(addressL88P0KA, addressO3FkcIW, addressWbnDiC7, {from: accounts[1]});
		const uintfmDGRvu = BigInt("9")
		const uint256KwTUbh2 = await GardenContractV20ZpyTf.getTotalrTLPHarvest.call(uintfmDGRvu, {from: accounts[0]});

		await expect(GardenContractV20ZpyTf.getTotalrTLPHarvest.call(uintfmDGRvu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})