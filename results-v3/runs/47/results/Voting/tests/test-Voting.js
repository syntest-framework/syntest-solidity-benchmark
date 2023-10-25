const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressCDfipVC = accounts[2]
		const VotingvHdAWqw = await Voting.new(addressCDfipVC, {from: accounts[1]});
		const addressaCpfslx = accounts[1]
		const addressG9pvAgQ = "0x0000000000000000000000000000000000000001"
		const uint7rVnXt = BigInt("1454")
		const addressBMv0Q2Y = accounts[3]
		const addressDBQhx9a = accounts[2]
		const uintcCGNNYq = BigInt("1409")
		const addresstO9TbmG = accounts[1]
		const uintM4reztT = BigInt("1611")
		const uintsSljT2E = BigInt("839")
		const uint256Gf1qsjH = await VotingvHdAWqw.allowance.call(addressG9pvAgQ, addressaCpfslx, {from: accounts[0]});
		const boolFpD1I2m = await VotingvHdAWqw.increaseAllowance.call(addressBMv0Q2Y, uint7rVnXt, {from: accounts[1]});
		const boolHWKVaYD = await VotingvHdAWqw.isMinter.call(addressDBQhx9a, {from: accounts[0]});
		const boolj8XUmZN = await VotingvHdAWqw.increaseAllowance.call(addresstO9TbmG, uintcCGNNYq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v2DM1a = await VotingvHdAWqw.pause.call(uintM4reztT, {from: accounts[1]});
		const uint256jdXrOc2 = await VotingvHdAWqw.approve.call(uintsSljT2E, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingVWSfuhN = await Voting.new({from: accounts[2]});
		const stringzZU41kp = "h4WMFoIRh2LQAjvjks7CmFChQGFPUEb4QE4joDs3hNRMWUkQklrwTTg7ksEWrjPKjMjNO23fXfYx1L9s9lHTTxi9hpWOP9"
		const stringHdKmSlH = "6ggV5z0idQXNCvpVY610w"
		const stringnwRbHRp = "LQoNnS85MYK8I3LkWE5O6ooythSnrIBfpQpTj7QcKpLbKNTcardHvr7qMwv1iywQgPEC"
		const bytesxwDxww = "0x1a1f1b1d110802050913151e0403080e0b050c1b02130d1f0c"
		const addressztOjdjs = accounts[2]
		const stringTyEMaen = "onOXohOwt23yPWybrm56W4E84G"
		const stringzg51PGA = "skOMso41IBeRbVVGHMt9LfZfDxpY28tPF3PhFVTx5cIjDUV0AMsOddcWXQ634UL802eD4Alv3mb7qVicYnCnQVY5vfP5e4y"
		const stringKpShlEk = "ftJoKO6jk7XHR9o1hKnJmLnui4TSyedRQeDF6fXaclfFponsIHUn5h8DrxBvgoOEFasl0R9FbeaiykBa3WG0PRab5cX"
		const byte9GvEnJ = "0x070b081211070a0e1a1210161f1f0b130708011d1a"
		const addressdOBhyDy = accounts[4]
		await VotingVWSfuhN.onlyExchangeFactory.call({from: accounts[5]});
		await VotingVWSfuhN.renounceOwnership.call({from: accounts[4]});
		const 
c6rNUiZ = await VotingVWSfuhN.createProposal.call(addressztOjdjs, bytesxwDxww, stringnwRbHRp, stringHdKmSlH, stringzZU41kp, {from: accounts[3]});
		const 
DBpPWiz = await VotingVWSfuhN.createProposal.call(addressdOBhyDy, byte9GvEnJ, stringKpShlEk, stringzg51PGA, stringTyEMaen, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressWZGyu2H = accounts[2]
		const VotingJsSOB9 = await Voting.new(addressWZGyu2H, {from: accounts[3]});
		const addressUgMjLzJ = accounts[1]
		const addressiNKJuBl = accounts[2]
		const addressbEd73qB = accounts[1]
		const uintpqaQJ5F = BigInt("522")
		const addressGrEFAlt = accounts[4]
		const boolwf8IcM = await VotingJsSOB9.isExchangeFactory.call(addressUgMjLzJ, {from: accounts[4]});
		const addressso53HaH = await VotingJsSOB9.updateRegistry.call(addressiNKJuBl, {from: accounts[4]});
		const uint8fzYyqa = await VotingJsSOB9.decimals.call({from: accounts[2]});
		const addressKe6pzM = await VotingJsSOB9.transferOwnership.call(addressbEd73qB, {from: accounts[2]});
		const boolJ4USjPb = await VotingJsSOB9.transfer.call(addressGrEFAlt, uintpqaQJ5F, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingKoEgHM1 = await Voting.new({from: accounts[1]});
		const uintve1zKEl = BigInt("64")
		const addressAUC4fs3 = accounts[0]
		const addresso0VH2hq = accounts[3]
		const uintW063dAO = BigInt("1798")
		const uintTXfoBSR = BigInt("2023")
		await VotingKoEgHM1.requiresWalletAcccess.call({from: accounts[4]});
		const boolrl8U6Vm = await VotingKoEgHM1.transfer.call(addressAUC4fs3, uintve1zKEl, {from: accounts[2]});
		const uint256QppFkbO = await VotingKoEgHM1.balanceOf.call(addresso0VH2hq, {from: accounts[3]});
		const uint256HhiXLfm = await VotingKoEgHM1.resolve.call(uintW063dAO, {from: accounts[4]});
		const uint256mJVVHX6 = await VotingKoEgHM1.resolve.call(uintTXfoBSR, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressZZtVxNb = accounts[2]
		const VotingNp7oN6j = await Voting.new(addressZZtVxNb, {from: accounts[0]});
		const uint6rPI5d = BigInt("70")
		const addresswjsSdyR = accounts[1]
		const address1WBhu0 = accounts[3]
		const uintO1AL404 = BigInt("1790")
		const booldH29VA = await VotingNp7oN6j.approve.call(addresswjsSdyR, uint6rPI5d, {from: accounts[4]});
		const addressaw4u2y = await VotingNp7oN6j.getRegistryAddress.call({from: accounts[0]});
		const booldX2MIO = await VotingNp7oN6j.isMinter.call(address1WBhu0, {from: accounts[3]});
		const uint256LP39IR = await VotingNp7oN6j.approve.call(uintO1AL404, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressktDQw6r = accounts[5]
		const VotingviXdUHF = await Voting.new(addressktDQw6r, {from: "0x0000000000000000000000000000000000000001"});
		const uintKgStuJQ = BigInt("925")
		const addressjF4dtRj = accounts[4]
		const uintRohOgVA = BigInt("976")
		await VotingviXdUHF.onlyMinter.call({from: accounts[1]});
		const stringtMlTHL = await VotingviXdUHF.name.call({from: accounts[5]});
		await VotingviXdUHF.onlyExchange.call({from: accounts[3]});
		const addressIfvteIA = await VotingviXdUHF.burnFrom.call(addressjF4dtRj, uintKgStuJQ, {from: accounts[3]});
		const uint256jX446EL = await VotingviXdUHF.resolve.call(uintRohOgVA, {from: accounts[4]});
		const uint256nqdHbBZ = await VotingviXdUHF.totalSupply.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressMqS9Lc = accounts[3]
		const Votingh5PHqWm = await Voting.new(addressMqS9Lc, {from: accounts[5]});
		const addressrCjN66I = "0x0000000000000000000000000000000000000001"
		const addressnIR983s = "0x0000000000000000000000000000000000000001"
		const addressXOfujgP = accounts[2]
		const boolAKbhObS = await Votingh5PHqWm.isVotingSystem.call(addressrCjN66I, {from: accounts[4]});
		const addressWZXIEyc = await Votingh5PHqWm.ownableUpgrade.call(addressnIR983s, {from: accounts[0]});
		const addressEOLl9Wa = await Votingh5PHqWm.updateRegistry.call(addressXOfujgP, {from: accounts[2]});
		await Votingh5PHqWm.onlyOracle.call({from: accounts[0]});
		await Votingh5PHqWm.onlyExchange.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressJV1cA4t = accounts[2]
		const VotingJsSOB9 = await Voting.new(addressJV1cA4t, {from: accounts[3]});
		const addressONzHPL = accounts[1]
		const addresseGDYGBH = accounts[3]
		const uintVlNtGuV = BigInt("1249")
		const addressnHCLiLP = "0x0000000000000000000000000000000000000001"
		const addressjEANe9P = accounts[1]
		const uintqdluue = BigInt("522")
		const addressaoiV0kK = accounts[4]
		await VotingJsSOB9.renounceOwnership.call({from: accounts[1]});
		const boolwf8IcM = await VotingJsSOB9.isExchangeFactory.call(addressONzHPL, {from: accounts[4]});
		const addressso53HaH = await VotingJsSOB9.updateRegistry.call(addresseGDYGBH, {from: accounts[4]});
		const boolSVuSLw5 = await VotingJsSOB9.approve.call(addressnHCLiLP, uintVlNtGuV, {from: accounts[3]});
		const uint8fzYyqa = await VotingJsSOB9.decimals.call({from: accounts[2]});
		const addressKe6pzM = await VotingJsSOB9.transferOwnership.call(addressjEANe9P, {from: accounts[2]});
		const boolJ4USjPb = await VotingJsSOB9.transfer.call(addressaoiV0kK, uintqdluue, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressHzgo9By = accounts[2]
		const VotingvHdAWqw = await Voting.new(addressHzgo9By, {from: accounts[1]});
		const boolTIfSuCO = false
		const uintYRNibhH = BigInt("38")
		const addresswwVcaKw = accounts[1]
		const addressHo99ChA = "0x0000000000000000000000000000000000000001"
		const uintsslX5Qa = BigInt("1454")
		const addressM9f9Iic = accounts[3]
		const addressVPrA2fn = accounts[2]
		const uintUPUCjw = BigInt("1409")
		const addressM2bzwom = accounts[2]
		const uintVcbPhgx = BigInt("1611")
		const uinttHGlX7 = BigInt("839")
		const uint256GnqaErj = await VotingvHdAWqw.vote.call(uintYRNibhH, boolTIfSuCO, {from: accounts[3]});
		const uint256Gf1qsjH = await VotingvHdAWqw.allowance.call(addressHo99ChA, addresswwVcaKw, {from: accounts[0]});
		const boolFpD1I2m = await VotingvHdAWqw.increaseAllowance.call(addressM9f9Iic, uintsslX5Qa, {from: accounts[1]});
		const boolHWKVaYD = await VotingvHdAWqw.isMinter.call(addressVPrA2fn, {from: accounts[0]});
		const boolj8XUmZN = await VotingvHdAWqw.increaseAllowance.call(addressM2bzwom, uintUPUCjw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v2DM1a = await VotingvHdAWqw.pause.call(uintVcbPhgx, {from: accounts[1]});
		await VotingvHdAWqw.renounceMinter.call({from: accounts[3]});
		const uint256jdXrOc2 = await VotingvHdAWqw.approve.call(uinttHGlX7, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressxJQgcyz = accounts[2]
		const VotingvHdAWqw = await Voting.new(addressxJQgcyz, {from: accounts[1]});
		const uintwadZ6Cd = BigInt("1142")
		const boolTIfSuCO = false
		const uintb8o3D5o = BigInt("38")
		const addressQiOUOhB = accounts[2]
		const addressEJBSadr = "0x0000000000000000000000000000000000000001"
		const addressE8d1Gp = accounts[2]
		const uintDkJRfo = BigInt("1454")
		const addresswwHADCn = accounts[3]
		const addressNrhP25o = accounts[2]
		const uint3UzhIM = BigInt("1409")
		const addressfstXWq0 = accounts[2]
		const uintQNtukW = BigInt("1611")
		const boollIWi5kI = true
		const uintwogwvmT = BigInt("1571")
		const uintGUtQ2Hv = BigInt("839")
		const uint256Dhv2YEY = await VotingvHdAWqw.pause.call(uintwadZ6Cd, {from: accounts[1]});
		const uint256GnqaErj = await VotingvHdAWqw.vote.call(uintb8o3D5o, boolTIfSuCO, {from: accounts[3]});
		const uint256Gf1qsjH = await VotingvHdAWqw.allowance.call(addressEJBSadr, addressQiOUOhB, {from: accounts[0]});
		const addressssSTEFm = await VotingvHdAWqw.transferOwnership.call(addressE8d1Gp, {from: accounts[0]});
		const boolFpD1I2m = await VotingvHdAWqw.increaseAllowance.call(addresswwHADCn, uintDkJRfo, {from: accounts[1]});
		const boolHWKVaYD = await VotingvHdAWqw.isMinter.call(addressNrhP25o, {from: accounts[0]});
		const boolj8XUmZN = await VotingvHdAWqw.increaseAllowance.call(addressfstXWq0, uint3UzhIM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v2DM1a = await VotingvHdAWqw.pause.call(uintQNtukW, {from: accounts[1]});
		const uint256CpY7tE5 = await VotingvHdAWqw.vote.call(uintwogwvmT, boollIWi5kI, {from: accounts[0]});
		await VotingvHdAWqw.renounceMinter.call({from: accounts[3]});
		const uint256jdXrOc2 = await VotingvHdAWqw.approve.call(uintGUtQ2Hv, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressNtbA90D = accounts[2]
		const VotingvHdAWqw = await Voting.new(addressNtbA90D, {from: accounts[1]});
		const string9F7F6t = "32atV9p8V72mPt3miC7L75JoUKoGWUdYcGnOL5Z9s88ZaTVCMvyP8Mfcvlo3E4o9IwC6wI"
		const stringwcVqiBF = "S74DFwOBOrfl9HUB4FWQtD43Ldj8vHRsq2KPYgYEntmnJXIWM3yCft8Ru1NuhKgfWVj"
		const stringvtHyVAV = "sEO7snwLFNPmReDJglJiye"
		const byteWOx4Vvh = "0x1a1f0f001d1712141a0d0a071d120f0c"
		const addressMnDTHGA = accounts[3]
		const boolTIfSuCO = false
		const uintsXxtFX = BigInt("38")
		const addressswsW5Yc = accounts[0]
		const addresscwtZyR5 = "0x0000000000000000000000000000000000000001"
		const uintQViQkU = BigInt("1454")
		const addresszvgdiGC = accounts[3]
		const addresshpHQ7Bq = accounts[2]
		const addressjAqq4ee = accounts[4]
		const uintNmcT3i = BigInt("1409")
		const addressqH2hA9N = accounts[2]
		const uintvChCEVm = BigInt("1611")
		const uintjzZ74KE = BigInt("839")
		const 
qK6G1Fy = await VotingvHdAWqw.createProposal.call(addressMnDTHGA, byteWOx4Vvh, stringvtHyVAV, stringwcVqiBF, string9F7F6t, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GnqaErj = await VotingvHdAWqw.vote.call(uintsXxtFX, boolTIfSuCO, {from: accounts[3]});
		const uint256Gf1qsjH = await VotingvHdAWqw.allowance.call(addresscwtZyR5, addressswsW5Yc, {from: accounts[0]});
		const boolFpD1I2m = await VotingvHdAWqw.increaseAllowance.call(addresszvgdiGC, uintQViQkU, {from: accounts[1]});
		const boolHWKVaYD = await VotingvHdAWqw.isMinter.call(addresshpHQ7Bq, {from: accounts[0]});
		const addresswvMASwF = await VotingvHdAWqw.ownableUpgrade.call(addressjAqq4ee, {from: accounts[1]});
		const boolj8XUmZN = await VotingvHdAWqw.increaseAllowance.call(addressqH2hA9N, uintNmcT3i, {from: "0x0000000000000000000000000000000000000001"});
		const uint256v2DM1a = await VotingvHdAWqw.pause.call(uintvChCEVm, {from: accounts[1]});
		await VotingvHdAWqw.renounceMinter.call({from: accounts[3]});
		const addressfRP4XLW = await VotingvHdAWqw.getRegistryAddress.call({from: accounts[2]});
		const uint256jdXrOc2 = await VotingvHdAWqw.approve.call(uintjzZ74KE, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressEHWAc1f = accounts[2]
		const VotingvHdAWqw = await Voting.new(addressEHWAc1f, {from: accounts[1]});
		const uintCcjILE4 = BigInt("577")
		const string9F7F6t = "32atV9p8V72mPt3miC7L75JoUKoGWUdYcGnOL5Z9s88ZaTVCMvyP8Mfcvlo3E4o9IwC6wI"
		const stringwcVqiBF = "S74DFwOBOrfl9HUB4FWQtD43Ldj8vHRsq2KPYgYEntmnJXIWM3yCft8Ru1NuhKgfWVj"
		const stringvtHyVAV = "sEO7snwLFNPmReDJglJiye"
		const byteFQrtAPP = "0x1a1f0f001d1712141a0d0a071d120f0c"
		const addresslvSLDNT = accounts[3]
		const uintSArtH0P = BigInt("1335")
		const addressmHkkC59 = accounts[3]
		const boolTIfSuCO = false
		const uintf0ie3M = BigInt("38")
		const addresslhNgyNb = accounts[0]
		const addressteoGa3i = "0x0000000000000000000000000000000000000001"
		const uinttATrH99 = BigInt("1454")
		const addresscz1jbKJ = accounts[3]
		const addressOO2kwqI = accounts[2]
		const addressP9wVuW9 = accounts[4]
		const uintUK2gfZX = BigInt("1611")
		const addressN3A6Xi7 = accounts[3]
		const uint1lPFhp = BigInt("1185")
		const uintVJlP2YV = BigInt("839")
		const uint2560tsBl3 = await VotingvHdAWqw.resolve.call(uintCcjILE4, {from: accounts[1]});
		const 
qK6G1Fy = await VotingvHdAWqw.createProposal.call(addresslvSLDNT, byteFQrtAPP, stringvtHyVAV, stringwcVqiBF, string9F7F6t, {from: "0x0000000000000000000000000000000000000001"});
		const boolBPCjj80 = await VotingvHdAWqw.decreaseAllowance.call(addressmHkkC59, uintSArtH0P, {from: accounts[5]});
		const uint256GnqaErj = await VotingvHdAWqw.vote.call(uintf0ie3M, boolTIfSuCO, {from: accounts[3]});
		const uint256Gf1qsjH = await VotingvHdAWqw.allowance.call(addressteoGa3i, addresslhNgyNb, {from: accounts[0]});
		const boolFpD1I2m = await VotingvHdAWqw.increaseAllowance.call(addresscz1jbKJ, uinttATrH99, {from: accounts[1]});
		const boolHWKVaYD = await VotingvHdAWqw.isMinter.call(addressOO2kwqI, {from: accounts[0]});
		const addresswvMASwF = await VotingvHdAWqw.ownableUpgrade.call(addressP9wVuW9, {from: accounts[1]});
		const uint256v2DM1a = await VotingvHdAWqw.pause.call(uintUK2gfZX, {from: accounts[1]});
		const boolHtQuZpH = await VotingvHdAWqw.didAddressVote.call(uint1lPFhp, addressN3A6Xi7, {from: "0x0000000000000000000000000000000000000001"});
		await VotingvHdAWqw.renounceMinter.call({from: accounts[3]});
		const addressfRP4XLW = await VotingvHdAWqw.getRegistryAddress.call({from: accounts[2]});
		await VotingvHdAWqw.onlyExchangeFactory.call({from: accounts[1]});
		await VotingvHdAWqw.renounceOwnership.call({from: accounts[0]});
		const uint256jdXrOc2 = await VotingvHdAWqw.approve.call(uintVJlP2YV, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingAM4jE6e = await Voting.new({from: accounts[0]});
		const uintHEQ3c26 = BigInt("1095")
		const addressL6vbZO = accounts[4]
		const uintmatqWCe = BigInt("1643")
		const addresskvw7hKx = accounts[3]
		const addressfoIJS26 = accounts[1]
		const uintKtrGU7q = BigInt("486")
		const boolUCGqUSD = await VotingAM4jE6e.increaseAllowance.call(addressL6vbZO, uintHEQ3c26, {from: accounts[5]});
		const uint256tJjw4K0 = await VotingAM4jE6e.snapshot.call({from: accounts[0]});
		const uint256zzwfgWC = await VotingAM4jE6e.balanceOfAt.call(addresskvw7hKx, uintmatqWCe, {from: accounts[3]});
		const boolkbqNUxu = await VotingAM4jE6e.didAddressVote.call(uintKtrGU7q, addressfoIJS26, {from: accounts[2]});
	});
})