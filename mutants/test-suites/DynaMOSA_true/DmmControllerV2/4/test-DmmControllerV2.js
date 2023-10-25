const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2xDmtsNv = await DmmControllerV2.new({from: accounts[0]});
		const uintYyRNBz1 = BigInt("1173")
		const uintMrXFnR1 = BigInt("1401")
		const uintmNH0e1Y = BigInt("1783")
		const uintbmPfqM0 = await DmmControllerV2xDmtsNv.setMinCollateralization.call(uintYyRNBz1, {from: accounts[2]});
		const addresscriL6N3 = await DmmControllerV2xDmtsNv.owner.call({from: accounts[2]});
		const 
AEHTHi = await DmmControllerV2xDmtsNv.adminDepositFunds.call(uintmNH0e1Y, uintMrXFnR1, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressEidxcBu = accounts[1]
		const addressnMQVZ6T = accounts[2]
		const addressDtUPMpQ = accounts[2]
		const addressF0D88Uz = accounts[2]
		const addressO319dyx = "0x0000000000000000000000000000000000000001"
		const addressvbdx5G5 = "0x0000000000000000000000000000000000000001"
		const addressj1fq20 = "0x0000000000000000000000000000000000000001"
		const addressZY5hqYY = accounts[4]
		const addressk1Y04gi = accounts[0]
		const uintCVNfPtU = BigInt("1538")
		const uintdwQauoN = BigInt("1409")
		const addressAIMCaB = accounts[1]
		const DmmControllerV2Zr7rKK = await DmmControllerV2.new(addressEidxcBu, addressnMQVZ6T, addressDtUPMpQ, addressF0D88Uz, addressO319dyx, addressvbdx5G5, addressj1fq20, addressZY5hqYY, addressk1Y04gi, uintCVNfPtU, uintdwQauoN, addressAIMCaB, {from: accounts[3]});
		const uintkoH8UbB = BigInt("1473")
		const uinti6cljDQ = BigInt("344")
		const uintuU7NYBG = BigInt("558")
		const uintELm4jc = BigInt("1215")
		const addressYxKWdKF = await DmmControllerV2Zr7rKK.owner.call({from: accounts[1]});
		const boolB2gkLdI = await DmmControllerV2Zr7rKK.isMarketEnabledByDmmTokenId.call(uintkoH8UbB, {from: "0x0000000000000000000000000000000000000001"});
		const uintZOK510L = await DmmControllerV2Zr7rKK.requireCanWithdrawFunds.call(uinti6cljDQ, {from: accounts[5]});
		const 
XJ0TKKc = await DmmControllerV2Zr7rKK.adminDepositFunds.call(uintELm4jc, uintuU7NYBG, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addresstFeo4U = accounts[1]
		const addressqB2hcs = accounts[0]
		const addressyvuAdSQ = accounts[0]
		const addressi4wTHjU = accounts[0]
		const addresscTUounU = accounts[4]
		const addressutxUHFM = "0x0000000000000000000000000000000000000001"
		const addressMd0IYf = accounts[2]
		const addressh9awgF = accounts[0]
		const addressunj9lAb = accounts[1]
		const uintOlLgSDk = BigInt("36")
		const uintwLMVFFd = BigInt("1275")
		const addressr8jEhIY = accounts[0]
		const DmmControllerV2y4NZses = await DmmControllerV2.new(addresstFeo4U, addressqB2hcs, addressyvuAdSQ, addressi4wTHjU, addresscTUounU, addressutxUHFM, addressMd0IYf, addressh9awgF, addressunj9lAb, uintOlLgSDk, uintwLMVFFd, addressr8jEhIY, {from: accounts[2]});
		const addressdC9jcpL = accounts[2]
		const addresslIYToH = accounts[1]
		const addresspupcFvx = accounts[1]
		const addressjZpzkKd = accounts[2]
		const uintIUwo5CC = BigInt("1153")
		const uintmJVaaI6 = BigInt("760")
		const boolLHj1RYK = await DmmControllerV2y4NZses.isBlacklisted.call(addressdC9jcpL, {from: accounts[4]});
		const 
ozjMpli = await DmmControllerV2y4NZses.setGuardian.call(addresslIYToH, {from: accounts[3]});
		const uintHkabE3K = await DmmControllerV2y4NZses.getExchangeRateByUnderlying.call(addresspupcFvx, {from: accounts[0]});
		const addressnue0uyV = await DmmControllerV2y4NZses.setOffChainAssetValuator.call(addressjZpzkKd, {from: accounts[2]});
		const 
Xb4ylV2 = await DmmControllerV2y4NZses.adminWithdrawFunds.call(uintmJVaaI6, uintIUwo5CC, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressaM9VV4l = accounts[1]
		const addressjh4Mf1o = accounts[5]
		const addressPtLXu93 = accounts[0]
		const addressWabyspm = accounts[4]
		const addressHy3Ipv = accounts[4]
		const addressm1JAH4V = accounts[1]
		const addressJi6IoG = accounts[2]
		const addressPTkLWh = "0x0000000000000000000000000000000000000001"
		const addresspkbrVht = accounts[2]
		const uintXs21ELj = BigInt("388")
		const uintb2W9Mbm = BigInt("1081")
		const addressaeE23Fj = accounts[3]
		const DmmControllerV2IaUcCn = await DmmControllerV2.new(addressaM9VV4l, addressjh4Mf1o, addressPtLXu93, addressWabyspm, addressHy3Ipv, addressm1JAH4V, addressJi6IoG, addressPTkLWh, addresspkbrVht, uintXs21ELj, uintb2W9Mbm, addressaeE23Fj, {from: accounts[0]});
		const uintSgAsw7Y = BigInt("1624")
		const boolahY5Ejc = await DmmControllerV2IaUcCn.paused.call({from: accounts[2]});
		const addressjjkqSU = await DmmControllerV2IaUcCn.getDmmTokenAddressByDmmTokenId.call(uintSgAsw7Y, {from: accounts[1]});
		await DmmControllerV2IaUcCn.requireIsFromAssetIntroducer.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressx5Gd0Ij = accounts[3]
		const addressIYlprIE = accounts[2]
		const addressfNNKfnV = accounts[5]
		const addressvCjIhBA = accounts[0]
		const addresspT003Q = accounts[5]
		const addressGHm10dF = accounts[0]
		const addressuwkRQCh = "0x0000000000000000000000000000000000000001"
		const addressnMe5Hbn = accounts[1]
		const addresscmFNmrh = "0x0000000000000000000000000000000000000001"
		const uintIj7Lbln = BigInt("39")
		const uintbio5vu = BigInt("1043")
		const addressZ4PH2c9 = accounts[0]
		const DmmControllerV2SsxoUTr = await DmmControllerV2.new(addressx5Gd0Ij, addressIYlprIE, addressfNNKfnV, addressvCjIhBA, addresspT003Q, addressGHm10dF, addressuwkRQCh, addressnMe5Hbn, addresscmFNmrh, uintIj7Lbln, uintbio5vu, addressZ4PH2c9, {from: accounts[2]});
		const addressLkWPwTI = accounts[3]
		const uintZ1sHlZF = BigInt("1056")
		const 
vKsnup7 = await DmmControllerV2SsxoUTr.transferOwnershipToNewController.call(addressLkWPwTI, {from: accounts[0]});
		const addressHgAskc3 = await DmmControllerV2SsxoUTr.getDmmTokenAddressByDmmTokenId.call(uintZ1sHlZF, {from: accounts[3]});
		await DmmControllerV2SsxoUTr.onlyOwnerOrGuardian.call({from: accounts[2]});
		await DmmControllerV2SsxoUTr.renouncePauser.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressDgsclWG = accounts[2]
		const addressl5sJjn5 = accounts[1]
		const addressFzO6gJ = accounts[0]
		const addressCaOL1Ht = accounts[5]
		const addresshLDUjSP = accounts[0]
		const addressgGoNCgM = accounts[4]
		const addresslwbaPq = accounts[4]
		const addresshbVAdY1 = "0x0000000000000000000000000000000000000001"
		const addressKeOeUt = accounts[1]
		const uinth92BuWW = BigInt("966")
		const uintHStpm7 = BigInt("225")
		const addressnGDNhuE = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2O6nb5wR = await DmmControllerV2.new(addressDgsclWG, addressl5sJjn5, addressFzO6gJ, addressCaOL1Ht, addresshLDUjSP, addressgGoNCgM, addresslwbaPq, addresshbVAdY1, addressKeOeUt, uinth92BuWW, uintHStpm7, addressnGDNhuE, {from: accounts[4]});
		const addresswGKcV7l = accounts[0]
		const addressYXUwZfQ = accounts[5]
		const addressd1BmN8 = accounts[1]
		const addressF2Hanh = await DmmControllerV2O6nb5wR.getUnderlyingTokenForDmm.call(addresswGKcV7l, {from: accounts[2]});
		const addressMIZlzZk = await DmmControllerV2O6nb5wR.notBlacklisted.call(addressYXUwZfQ, {from: accounts[0]});
		const addressgrCq6NA = await DmmControllerV2O6nb5wR.notBlacklisted.call(addressd1BmN8, {from: accounts[4]});
		const addressZmGcdSC = await DmmControllerV2O6nb5wR.owner.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressfzCKoHh = accounts[4]
		const addressOnimJ36 = accounts[4]
		const addressWtCnz6t = "0x0000000000000000000000000000000000000001"
		const addresseZJ24Gb = accounts[4]
		const addresssB80MSO = "0x0000000000000000000000000000000000000001"
		const addressrypn7YL = accounts[0]
		const addresstlqXzml = accounts[1]
		const addresskzUsiqq = accounts[4]
		const addressbTfiW0D = accounts[5]
		const uintdtRZroi = BigInt("778")
		const uinteFwx7Z = BigInt("509")
		const addressyIcFCcr = accounts[2]
		const DmmControllerV2R3lizxo = await DmmControllerV2.new(addressfzCKoHh, addressOnimJ36, addressWtCnz6t, addresseZJ24Gb, addresssB80MSO, addressrypn7YL, addresstlqXzml, addresskzUsiqq, addressbTfiW0D, uintdtRZroi, uinteFwx7Z, addressyIcFCcr, {from: "0x0000000000000000000000000000000000000001"});
		const addressuhV8K7E = accounts[3]
		const addressXvjkfgU = accounts[1]
		const uintpBss1q9 = BigInt("1611")
		const uintx3j2pow = BigInt("1486")
		const addresssNXcZtY = await DmmControllerV2R3lizxo.setUnderlyingTokenValuator.call(addressuhV8K7E, {from: accounts[0]});
		const uintQsq7lha = await DmmControllerV2R3lizxo.getInterestRateByDmmTokenAddress.call(addressXvjkfgU, {from: accounts[2]});
		await DmmControllerV2R3lizxo.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uinty6hNkDV = await DmmControllerV2R3lizxo.disableMarket.call(uintpBss1q9, {from: accounts[1]});
		const uintM7CPcNO = await DmmControllerV2R3lizxo.requireIsPrimaryMarketNft.call(uintx3j2pow, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addresshyaz3Vo = accounts[2]
		const addressnCEMbH = accounts[1]
		const addressCHAtJM = accounts[0]
		const addressSnTGGUD = accounts[5]
		const addressIrGddBx = accounts[0]
		const addresswNm3jjC = accounts[4]
		const addressQX7eCxP = accounts[4]
		const addressbiMGISD = "0x0000000000000000000000000000000000000001"
		const addressv4vsoHv = accounts[1]
		const uintDgyZwlS = BigInt("966")
		const uintJe5Z7US = BigInt("225")
		const addressa0jrLkD = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2O6nb5wR = await DmmControllerV2.new(addresshyaz3Vo, addressnCEMbH, addressCHAtJM, addressSnTGGUD, addressIrGddBx, addresswNm3jjC, addressQX7eCxP, addressbiMGISD, addressv4vsoHv, uintDgyZwlS, uintJe5Z7US, addressa0jrLkD, {from: accounts[4]});
		const addressKx5cm27 = accounts[2]
		const addressYoXOnUO = accounts[0]
		const addressoADBkRG = accounts[6]
		const addressJI6EDPW = accounts[1]
		const boolWdMRQw = await DmmControllerV2O6nb5wR.isMarketEnabledByDmmTokenAddress.call(addressKx5cm27, {from: accounts[3]});
		const addressF2Hanh = await DmmControllerV2O6nb5wR.getUnderlyingTokenForDmm.call(addressYoXOnUO, {from: accounts[2]});
		const addressMIZlzZk = await DmmControllerV2O6nb5wR.notBlacklisted.call(addressoADBkRG, {from: accounts[0]});
		const addressgrCq6NA = await DmmControllerV2O6nb5wR.notBlacklisted.call(addressJI6EDPW, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresstu7ogJV = accounts[1]
		const addressyj3TmAk = accounts[5]
		const addressGlCLjH0 = accounts[0]
		const addressUZsjIk = accounts[4]
		const addressHRS0OZq = accounts[4]
		const addressJVUSAUm = accounts[1]
		const addressJZpUiWG = accounts[2]
		const addressFbkbV89 = "0x0000000000000000000000000000000000000001"
		const addressL8KgbZ8 = accounts[2]
		const uintsKXX542 = BigInt("388")
		const uintLR9pqef = BigInt("1081")
		const addressoRF5bZh = accounts[3]
		const DmmControllerV2IaUcCn = await DmmControllerV2.new(addresstu7ogJV, addressyj3TmAk, addressGlCLjH0, addressUZsjIk, addressHRS0OZq, addressJVUSAUm, addressJZpUiWG, addressFbkbV89, addressL8KgbZ8, uintsKXX542, uintLR9pqef, addressoRF5bZh, {from: accounts[0]});
		const uintu2MoRQR = BigInt("615")
		const uintWyrbooN = BigInt("1570")
		const uintEMM6t4d = BigInt("1560")
		const uintlyy3Lqo = BigInt("63")
		const stringiUDWIKV = "auIIvukJ7lk"
		const stringQ1InFsN = "WGXtwIeWacSoYdurYA2k7JI1q9OqWkGUVgoq5BXmOzipdernANOPCpjtXHTr8caNcGTwSA62azv1SsMK0d144tDNcQ"
		const addressgEFh1F = accounts[1]
		const boolZ2pxNHU = await DmmControllerV2IaUcCn.isOwner.call({from: accounts[4]});
		const 
pMAVwo = await DmmControllerV2IaUcCn.addMarket.call(addressgEFh1F, stringQ1InFsN, stringiUDWIKV, uintlyy3Lqo, uintEMM6t4d, uintWyrbooN, uintu2MoRQR, {from: accounts[0]});
		const addressA5D5jFF = await DmmControllerV2IaUcCn.owner.call({from: accounts[5]});
		await DmmControllerV2IaUcCn.requireIsFromAssetIntroducer.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressBe1aOqF = accounts[0]
		const addressOUJLCyk = accounts[3]
		const addressFu0oZNC = accounts[0]
		const addressNgklB64 = accounts[3]
		const addressz5EIW6V = accounts[5]
		const addressmx4j9D5 = accounts[3]
		const addressiXZBAL5 = accounts[2]
		const addressOvBvmF = accounts[1]
		const address7ZpRe2 = accounts[2]
		const uintc2r2NfG = BigInt("688")
		const uintxjh8OX7 = BigInt("831")
		const addressWw1cTnV = accounts[1]
		const DmmControllerV2gvvzNEv = await DmmControllerV2.new(addressBe1aOqF, addressOUJLCyk, addressFu0oZNC, addressNgklB64, addressz5EIW6V, addressmx4j9D5, addressiXZBAL5, addressOvBvmF, address7ZpRe2, uintc2r2NfG, uintxjh8OX7, addressWw1cTnV, {from: accounts[2]});
		const addressbjll25k = accounts[3]
		const addressMJ7ItA = "0x0000000000000000000000000000000000000001"
		const addressUzdI3Hh = accounts[2]
		const addressZ4uOaqG = accounts[3]
		const uintgcJPVPO = await DmmControllerV2gvvzNEv.getTokenIdFromDmmTokenAddress.call(addressbjll25k, {from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2gvvzNEv.onlyOwnerOrGuardian.call({from: accounts[1]});
		const addresssT39FTG = await DmmControllerV2gvvzNEv.transferOwnership.call(addressMJ7ItA, {from: accounts[4]});
		const addressjZ8hvf = await DmmControllerV2gvvzNEv.setOffChainAssetValuator.call(addressUzdI3Hh, {from: accounts[0]});
		const uintkehfNUs = await DmmControllerV2gvvzNEv.getTotalCollateralization.call({from: accounts[1]});
		const addressBUCLqNN = await DmmControllerV2gvvzNEv.setDmmEtherFactory.call(addressZ4uOaqG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addresswmpjidu = accounts[1]
		const addressnR9IS8D = accounts[5]
		const addressJv4hShO = accounts[0]
		const addresspZqfDy7 = accounts[4]
		const addressZkjh5xY = accounts[4]
		const addressS7joUr8 = accounts[1]
		const addressoLp99R = accounts[2]
		const addressHb4phwR = "0x0000000000000000000000000000000000000001"
		const addresspDxTA3m = accounts[2]
		const uintu2olB7K = BigInt("388")
		const uintoQEwGRV = BigInt("1081")
		const addressYPiLhjh = accounts[3]
		const DmmControllerV2IaUcCn = await DmmControllerV2.new(addresswmpjidu, addressnR9IS8D, addressJv4hShO, addresspZqfDy7, addressZkjh5xY, addressS7joUr8, addressoLp99R, addressHb4phwR, addresspDxTA3m, uintu2olB7K, uintoQEwGRV, addressYPiLhjh, {from: accounts[0]});
		const addressbxDc7JN = "0x0000000000000000000000000000000000000001"
		const addressyUyFraB = await DmmControllerV2IaUcCn.addPauser.call(addressbxDc7JN, {from: accounts[2]});
		await DmmControllerV2IaUcCn.requireIsFromAssetIntroducer.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressHXTMdPf = accounts[1]
		const addressvmxtMlS = accounts[5]
		const addressfCIfn2O = accounts[0]
		const addressCcfxJqt = accounts[4]
		const addressvVPFfP = accounts[4]
		const addresskQHdRzX = accounts[1]
		const addressgbJYJrc = accounts[2]
		const address7QDAI4 = "0x0000000000000000000000000000000000000001"
		const addresslGfhhtE = accounts[2]
		const uintjZVyDrW = BigInt("388")
		const uintT1o0Zv8 = BigInt("1081")
		const addressRHkwfkH = accounts[3]
		const DmmControllerV2IaUcCn = await DmmControllerV2.new(addressHXTMdPf, addressvmxtMlS, addressfCIfn2O, addressCcfxJqt, addressvVPFfP, addresskQHdRzX, addressgbJYJrc, address7QDAI4, addresslGfhhtE, uintjZVyDrW, uintT1o0Zv8, addressRHkwfkH, {from: accounts[0]});
		const addressnkD7oGe = accounts[3]
		const uintb2ET6Lb = BigInt("1727")
		const uintzK7p8d0 = BigInt("1224")
		const boolahY5Ejc = await DmmControllerV2IaUcCn.paused.call({from: accounts[2]});
		const addressbfJYrjw = await DmmControllerV2IaUcCn.setInterestRateInterface.call(addressnkD7oGe, {from: accounts[0]});
		const addressjjkqSU = await DmmControllerV2IaUcCn.getDmmTokenAddressByDmmTokenId.call(uintb2ET6Lb, {from: accounts[1]});
		const uintFxAJyGE = await DmmControllerV2IaUcCn.setMinCollateralization.call(uintzK7p8d0, {from: accounts[3]});
		await DmmControllerV2IaUcCn.requireIsFromAssetIntroducer.call({from: accounts[3]});
	});
})