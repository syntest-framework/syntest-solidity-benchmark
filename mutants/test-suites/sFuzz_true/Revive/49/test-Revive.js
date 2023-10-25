const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveZC840y = await Revive.new({from: accounts[2]});
		const uintQ5GOMm2 = BigInt("1658")
		const bytedlXIdyv = "0x0004080c120f0308121d0a121a1b16021d020a081d061e0808101701001c1312"
		const addressa8RyDvH = accounts[3]
		const uintkg0lWQ = BigInt("1914")
		const byteIMbzedk = "0x13111b111f09101113040e080b081b1f0a16060f1a060e141102121c000f1c1c"
		const addressFuDfnxz = accounts[2]
		const uintxSlmg2P = BigInt("1860")
		const addressW8JWvzU = accounts[0]
		const uintlnth8ew = BigInt("73")
		const uintDUuIyxV = BigInt("1223")
		const byteC9AN1z2 = "0x1a100000000b081b060e1b0e091f0709061c070410030a070e1e181a1b1d1300"
		const addressGKG8Vj = accounts[0]
		const uint256ciyNQ3d = await ReviveZC840y.tokensLockedAtTime.call(addressa8RyDvH, bytedlXIdyv, uintQ5GOMm2, {from: accounts[0]});
		const uint256LH3MrO = await ReviveZC840y.tokensLockedAtTime.call(addressFuDfnxz, byteIMbzedk, uintkg0lWQ, {from: accounts[2]});
//		const boolQaEAHD = await ReviveZC840y.decreaseAllowance.call(addressW8JWvzU, uintxSlmg2P, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK4dK8P = await ReviveZC840y.transferWithLock.call(addressGKG8Vj, byteC9AN1z2, uintDUuIyxV, uintlnth8ew, {from: accounts[3]});

		assert.equal(uint256LH3MrO, BigInt("0"))
		assert.equal(uint256ciyNQ3d, BigInt("0"))
		await expect(ReviveZC840y.decreaseAllowance.call(addressW8JWvzU, uintxSlmg2P, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveS5QoYRJ = await Revive.new({from: accounts[4]});
		const address9iUkM7 = accounts[3]
		const uintqQME0DR = BigInt("628")
		const byteJapZzA = "0x1c12130e07130b1c051d0306110b0006061e19131014101b0b1c1b0f0f150005"
		const byteTNbW6nU = "0x1906060817152011111a0e140c20130b01010c0e1f121a181c060f1f0d1d0e16"
		const addressXvhfjJM = accounts[4]
		const uint256cfLSEDF = await ReviveS5QoYRJ.balanceOf.call(address9iUkM7, {from: accounts[0]});
//		const boolZ6uuZE1 = await ReviveS5QoYRJ.increaseLockAmount.call(byteJapZzA, uintqQME0DR, {from: accounts[5]});
//		const uint256uzgXzir = await ReviveS5QoYRJ.tokensUnlockable.call(addressXvhfjJM, byteTNbW6nU, {from: accounts[2]});

		assert.equal(uint256cfLSEDF, BigInt("0"))
		await expect(ReviveS5QoYRJ.increaseLockAmount.call(byteJapZzA, uintqQME0DR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepZ3vk1b = await Revive.new({from: accounts[3]});
		const uintlg2lyDX = BigInt("87")
		const byteF34Vor3 = "0x1010181c0f1914190b141f1e0f140c1e161603161e0a1a0e1c1e0904100d000d"
		const uintvCPJimI = BigInt("372")
		const byteOijqNOx = "0x1412110a1b1b04100e12130c0e0f1e1200180e091f191705110d1c16150f001d"
//		const booluQorvMq = await RevivepZ3vk1b.extendLock.call(byteF34Vor3, uintlg2lyDX, {from: accounts[1]});
//		const boolagrwN9 = await RevivepZ3vk1b.extendLock.call(byteOijqNOx, uintvCPJimI, {from: accounts[2]});

		await expect(RevivepZ3vk1b.extendLock.call(byteF34Vor3, uintlg2lyDX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const addresskO9pUd = accounts[3]
		const uintLqihqgc = BigInt("307")
		const bytepPCgYor = "0x060a1f1516111300110c1b0e0a181010111b03161e080f1608180f03160e1311"
		const addressZGICAXO = accounts[2]
		const uint256UYwYAnj = await ReviverezRtZo.getUnlockableTokens.call(addresskO9pUd, {from: accounts[3]});
//		const boolKhIJNqY = await ReviverezRtZo.extendLock.call(bytepPCgYor, uintLqihqgc, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256XhGWg5s = await ReviverezRtZo.getUnlockableTokens.call(addressZGICAXO, {from: accounts[3]});

		assert.equal(uint256UYwYAnj, BigInt("0"))
		await expect(ReviverezRtZo.extendLock.call(bytepPCgYor, uintLqihqgc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEZVAkAh = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSkXv1xu = BigInt("681")
		const byter5ogexF = "0x070806081501201e0d0f160a0c161d18110210030a030806090b191e1f1d1c13"
		const addressJURyNRf = accounts[2]
		const addressHQCSrF = accounts[0]
		const uintRbelTQW = BigInt("1843")
		const addressQk91Rca = "0x0000000000000000000000000000000000000001"
		const addressKSqQNUT = accounts[5]
		const uintRDjmSv = BigInt("1053")
		const bytePO8FkzM = "0x0e0c1a060b1a071e1a010f021516120f0412191f061d06090f181c070a131e17"
		const uintjsnaLln = BigInt("1818")
		const addressIVZKLSp = accounts[2]
		const uint256n1tkuXu = await ReviveEZVAkAh.tokensLockedAtTime.call(addressJURyNRf, byter5ogexF, uintSkXv1xu, {from: accounts[0]});
		const uint256hjfkDB0 = await ReviveEZVAkAh.totalBalanceOf.call(addressHQCSrF, {from: accounts[0]});
		const boolOMSqBis = await ReviveEZVAkAh.transferFrom.call(addressKSqQNUT, addressQk91Rca, uintRbelTQW, {from: accounts[0]});
		const boolYLDLTDH = await ReviveEZVAkAh.extendLock.call(bytePO8FkzM, uintRDjmSv, {from: accounts[1]});
		const boolpAcj60c = await ReviveEZVAkAh.approve.call(addressIVZKLSp, uintjsnaLln, {from: accounts[0]});
	});

	it('test for Revive', async () => {
		const ReviveS54WQYE = await Revive.new({from: accounts[3]});
		const uintMIQoFt = BigInt("928")
		const addressa6hqsQY = accounts[5]
		const uintDGHzur1 = BigInt("1724")
		const byteteQjOZ3 = "0x0a070c051c1300020d08030a0b07130e00141802170f061b071709091b0e1c20"
		const uintSqWe41i = BigInt("1121")
		const addressnxu8R8 = accounts[2]
		const addressxeLrWNV = accounts[2]
		const uintx01diS = BigInt("1138")
		const addressJqQXk8R = accounts[0]
		const booleap2fGQ = await ReviveS54WQYE.increaseAllowance.call(addressa6hqsQY, uintMIQoFt, {from: accounts[0]});
//		const boolgtXIvNE = await ReviveS54WQYE.increaseLockAmount.call(byteteQjOZ3, uintDGHzur1, {from: accounts[3]});
//		const boolPji3oo8 = await ReviveS54WQYE.decreaseAllowance.call(addressnxu8R8, uintSqWe41i, {from: accounts[5]});
//		const addressiuluZt = await ReviveS54WQYE.transferOwnership.call(addressxeLrWNV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolP72Mcwj = await ReviveS54WQYE.approve.call(addressJqQXk8R, uintx01diS, {from: accounts[2]});

		assert.equal(booleap2fGQ, true)
		await expect(ReviveS54WQYE.increaseLockAmount.call(byteteQjOZ3, uintDGHzur1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIzRKCUP = await Revive.new({from: accounts[1]});
		const byteLes5caA = "0x080f03061e12010f190e0b030b07021e1a1b1f0c03051b160a080e01030d1a10"
		const addressCcxhSUf = accounts[1]
		const uinttqjf1ez = BigInt("176")
		const byteAvFFcya = "0x1e0b0c0c10101d020c04130c080b0f12181f0114101a1b0409160b191c020716"
		const uintMV6Snd4 = BigInt("1510")
		const addressfF2Jhuj = accounts[1]
		const uintzacZaS = BigInt("621")
		const uintdRljrY = BigInt("797")
		const bytetnCaWY = "0x201f1e1903030f13021a030e1e170313161d0b0a1a11041c140b0f0c1a1e0d13"
		const addressmDwWSse = accounts[4]
		const uint256mIdSyM = await ReviveIzRKCUP.tokensUnlockable.call(addressCcxhSUf, byteLes5caA, {from: "0x0000000000000000000000000000000000000001"});
//		const booltIi70yr = await ReviveIzRKCUP.increaseLockAmount.call(byteAvFFcya, uinttqjf1ez, {from: accounts[2]});
//		const boolkOgyjhO = await ReviveIzRKCUP.increaseAllowance.call(addressfF2Jhuj, uintMV6Snd4, {from: accounts[2]});
//		const boolQaLlJ3w = await ReviveIzRKCUP.lock.call(bytetnCaWY, uintdRljrY, uintzacZaS, {from: accounts[5]});
//		const uint256x8KkJjS = await ReviveIzRKCUP.getUnlockableTokens.call(addressmDwWSse, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256mIdSyM, BigInt("0"))
		await expect(ReviveIzRKCUP.increaseLockAmount.call(byteAvFFcya, uinttqjf1ez, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addressWQMsfFg = accounts[4]
//		await ReviveWoRWWx.renounceOwnership.call({from: accounts[0]});
//		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addressWQMsfFg, {from: accounts[0]});

		await expect(ReviveWoRWWx.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveS5QoYRJ = await Revive.new({from: accounts[4]});
		const addressgpBo7wi = accounts[3]
		const addressLibkXIj = accounts[3]
		const addressXgXxxta = accounts[1]
		const uintsBspIP1 = BigInt("95")
		const addresseTsidbm = accounts[4]
		const uintiXeuSY = BigInt("628")
		const byte0UoGmR = "0x1c12130e07130b1c031d0306110b0006061e19131014101b0b1c1b0f0f150005"
		const byteFlhvsn8 = "0x1906060817152011111a0e140c20130b01010c0e1f121a181c060f1f0d1d0e16"
		const addressrxHlFzp = accounts[4]
		const uint256cfLSEDF = await ReviveS5QoYRJ.balanceOf.call(addressgpBo7wi, {from: accounts[0]});
		const uint256RixNSF = await ReviveS5QoYRJ.allowance.call(addressXgXxxta, addressLibkXIj, {from: accounts[2]});
//		const addressx0ccQaQ = await ReviveS5QoYRJ.recoverERC20.call(addresseTsidbm, uintsBspIP1, {from: accounts[3]});
//		const boolZ6uuZE1 = await ReviveS5QoYRJ.increaseLockAmount.call(byte0UoGmR, uintiXeuSY, {from: accounts[5]});
//		const uint256uzgXzir = await ReviveS5QoYRJ.tokensUnlockable.call(addressrxHlFzp, byteFlhvsn8, {from: accounts[2]});

		assert.equal(uint256RixNSF, BigInt("0"))
		assert.equal(uint256cfLSEDF, BigInt("0"))
		await expect(ReviveS5QoYRJ.recoverERC20.call(addresseTsidbm, uintsBspIP1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveS5QoYRJ = await Revive.new({from: accounts[4]});
		const addressSd01cX8 = accounts[3]
		const uintJbSvup = BigInt("517")
		const uintbvyCQWV = BigInt("1519")
		const byteBXG9XkY = "0x1406170c1210141b1e0b031812031109151f17150f0f071b14001b070b1e1d1d"
		const addressaXXyoRe = accounts[3]
		const uintL0dlisv = BigInt("628")
		const byteOO4IuHa = "0x1c12130e07130b1c051d0306110b0006061e19131014101b0b1c1b0f12150005"
		const addressHkTCCAE = accounts[1]
		const byteCj9l900 = "0x1906060817152011111a0e140c20130b01010c0e1f121a181c060f1f0d1d0e16"
		const addressSjOOT6g = accounts[4]
		const uint256cfLSEDF = await ReviveS5QoYRJ.balanceOf.call(addressSd01cX8, {from: accounts[0]});
//		const boolgLPrfA = await ReviveS5QoYRJ.transferWithLock.call(addressaXXyoRe, byteBXG9XkY, uintbvyCQWV, uintJbSvup, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZ6uuZE1 = await ReviveS5QoYRJ.increaseLockAmount.call(byteOO4IuHa, uintL0dlisv, {from: accounts[5]});
//		const addressG4HyShZ = await ReviveS5QoYRJ.transferOwnership.call(addressHkTCCAE, {from: accounts[4]});
//		const uint256uzgXzir = await ReviveS5QoYRJ.tokensUnlockable.call(addressSjOOT6g, byteCj9l900, {from: accounts[2]});

		assert.equal(uint256cfLSEDF, BigInt("0"))
		await expect(ReviveS5QoYRJ.transferWithLock.call(addressaXXyoRe, byteBXG9XkY, uintbvyCQWV, uintJbSvup, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZC840y = await Revive.new({from: accounts[2]});
		const uintBlmBe4i = BigInt("1658")
		const bytezH3SkE8 = "0x0004080c120f0308121d0a121a1b16021d020a081d061e0808101701001c1312"
		const addressJkVOza9 = accounts[3]
		const uint53iB7J = BigInt("667")
		const uintQQ25B63 = BigInt("1914")
		const byteCUvQks = "0x13111b111f09101113040e080b081b1f0a1606111a060e141102121c000f1c1c"
		const addresslm3HaEe = accounts[2]
		const uintleVJMep = BigInt("1860")
		const addressHizSZwE = accounts[0]
		const uintQvYgTes = BigInt("73")
		const uintzd92jaF = BigInt("1223")
		const byteNYBabOo = "0x1a100000000b081b060e1b0e091f0709061c070410030a070e1e181a1b1d1300"
		const addressZ6wtI7S = accounts[0]
		const uint256ciyNQ3d = await ReviveZC840y.tokensLockedAtTime.call(addressJkVOza9, bytezH3SkE8, uintBlmBe4i, {from: accounts[0]});
//		const uint256Pm6j4lS = await ReviveZC840y.recoverERC20.call(uint53iB7J, {from: accounts[4]});
//		const uint256LH3MrO = await ReviveZC840y.tokensLockedAtTime.call(addresslm3HaEe, byteCUvQks, uintQQ25B63, {from: accounts[2]});
//		const boolQaEAHD = await ReviveZC840y.decreaseAllowance.call(addressHizSZwE, uintleVJMep, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK4dK8P = await ReviveZC840y.transferWithLock.call(addressZ6wtI7S, byteNYBabOo, uintzd92jaF, uintQvYgTes, {from: accounts[3]});

		assert.equal(uint256ciyNQ3d, BigInt("0"))
		await expect(ReviveZC840y.recoverERC20.call(uint53iB7J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveS5QoYRJ = await Revive.new({from: accounts[4]});
		const addresstJuQ9be = accounts[3]
		const uintRiP5sWy = BigInt("1007")
		const addressPt2Wbxs = accounts[5]
		const addressAOE1HI5 = "0x0000000000000000000000000000000000000001"
		const uintKQNvnRt = BigInt("628")
		const byteJq2kRtS = "0x1c12130e07130b1c051d0306110b0006061e19131014101b0b1c1b0f0f150005"
		const byteDr8kNvc = "0x190606081a152011111a0e140c20130b01010c0e1f121a181c060f1f0d1d0e16"
		const addresszFXKw1L = accounts[4]
		const uint256cfLSEDF = await ReviveS5QoYRJ.balanceOf.call(addresstJuQ9be, {from: accounts[0]});
//		const boolflhGRDZ = await ReviveS5QoYRJ.transferFrom.call(addressAOE1HI5, addressPt2Wbxs, uintRiP5sWy, {from: accounts[4]});
//		const boolZ6uuZE1 = await ReviveS5QoYRJ.increaseLockAmount.call(byteJq2kRtS, uintKQNvnRt, {from: accounts[5]});
//		const uint256uzgXzir = await ReviveS5QoYRJ.tokensUnlockable.call(addresszFXKw1L, byteDr8kNvc, {from: accounts[2]});

		assert.equal(uint256cfLSEDF, BigInt("0"))
		await expect(ReviveS5QoYRJ.transferFrom.call(addressAOE1HI5, addressPt2Wbxs, uintRiP5sWy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZC840y = await Revive.new({from: accounts[2]});
		const uintcScYtNA = BigInt("1658")
		const bytecTtupNy = "0x0004080c120f0308121d0a121a1b16021d020a081d061e0808101701001c1312"
		const addressCfene7x = accounts[3]
		const uintI1HybDQ = BigInt("1914")
		const bytetNn32wS = "0x13111b111f09101113040e080b081b1f0a16060f1a060e141102121c000f1c1c"
		const addresszLDoafe = accounts[2]
		const uintNNGQLX5 = BigInt("896")
		const addressJt3Qeb = accounts[0]
		const uintyA10UYV = BigInt("73")
		const uintwVyhASg = BigInt("1223")
		const byteFDOiRH2 = "0x1a100000000b081b060e1b0e091f0709061c070410030a070e1e181a1b1d1300"
		const addressfTBCVQy = accounts[0]
		const uint256ciyNQ3d = await ReviveZC840y.tokensLockedAtTime.call(addressCfene7x, bytecTtupNy, uintcScYtNA, {from: accounts[0]});
		const uint256LH3MrO = await ReviveZC840y.tokensLockedAtTime.call(addresszLDoafe, bytetNn32wS, uintI1HybDQ, {from: accounts[2]});
		const boolWod3HvB = await ReviveZC840y.approve.call(addressJt3Qeb, uintNNGQLX5, {from: accounts[1]});
//		const boolK4dK8P = await ReviveZC840y.transferWithLock.call(addressfTBCVQy, byteFDOiRH2, uintwVyhASg, uintyA10UYV, {from: accounts[3]});

		assert.equal(boolWod3HvB, true)
		assert.equal(uint256LH3MrO, BigInt("0"))
		assert.equal(uint256ciyNQ3d, BigInt("0"))
		await expect(ReviveZC840y.transferWithLock.call(addressfTBCVQy, byteFDOiRH2, uintwVyhASg, uintyA10UYV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBpGxTNc = await Revive.new({from: accounts[5]});
		const uintqqqRGq = BigInt("428")
		const uintUZwXWWr = BigInt("121")
		const byteewLmudD = "0x01000a1d150c08010b1b0b01080510040817090e190d030d0b040e1515191705"
		const addressItQJBMb = accounts[3]
		const uintyGz1nn = BigInt("79")
		const bytesgzvErC = "0x0b0519060f1a071c111a030c1d05061d060008041c0d000d0b06191600100210"
		const addressOs7lYZt = accounts[0]
//		const boolJnLGYUb = await ReviveBpGxTNc.lock.call(byteewLmudD, uintUZwXWWr, uintqqqRGq, {from: accounts[0]});
//		const uint256vgxIeHD = await ReviveBpGxTNc.balanceOf.call(addressItQJBMb, {from: accounts[1]});
//		const uint256gQpN35 = await ReviveBpGxTNc.tokensLockedAtTime.call(addressOs7lYZt, bytesgzvErC, uintyGz1nn, {from: accounts[1]});

		await expect(ReviveBpGxTNc.lock.call(byteewLmudD, uintUZwXWWr, uintqqqRGq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addressf1yJGTm = accounts[5]
		const uintGh5rUfK = BigInt("1845")
		const uintC9QhNHh = BigInt("1666")
		const byteJuFm4EN = "0x150d0e0b1612051d1111080b1c07150b01090c0f141918161004041a0907190f"
		const addressYZA5KuP = accounts[1]
		const uintgbWzZpB = BigInt("1853")
		const addressor6cInf = accounts[1]
		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addressf1yJGTm, {from: accounts[0]});
		const addressZmASZw = await ReviveWoRWWx.owner.call({from: accounts[4]});
//		const boolsfklNn3 = await ReviveWoRWWx.transferWithLock.call(addressYZA5KuP, byteJuFm4EN, uintC9QhNHh, uintGh5rUfK, {from: accounts[2]});
//		const booliFdCQlq = await ReviveWoRWWx.increaseAllowance.call(addressor6cInf, uintgbWzZpB, {from: accounts[2]});

		assert.equal(addressZmASZw, 0xa5c501F5cdc7362372556ad9efF46AFdf7F3096F)
		assert.equal(uint256qLKyoA, BigInt("0"))
		await expect(ReviveWoRWWx.transferWithLock.call(addressYZA5KuP, byteJuFm4EN, uintC9QhNHh, uintGh5rUfK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveS5QoYRJ = await Revive.new({from: accounts[4]});
		const addressclRnsaH = accounts[3]
		const uintHG8uV7i = BigInt("628")
		const bytevCbBdGp = "0x1c12130e07130b1c051d0306110b0006061e19131014101b0b1c1b0f0f150005"
		const byteJOnD2XL = "0x1906060817152011111a0e140c20130b01010c0e1f121a181c060f1f0d1d0f16"
		const addressYBQmWpV = accounts[4]
		const uint256cfLSEDF = await ReviveS5QoYRJ.balanceOf.call(addressclRnsaH, {from: accounts[0]});
		const uint256s1gptLL = await ReviveS5QoYRJ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolZ6uuZE1 = await ReviveS5QoYRJ.increaseLockAmount.call(bytevCbBdGp, uintHG8uV7i, {from: accounts[5]});
//		const uint256uzgXzir = await ReviveS5QoYRJ.tokensUnlockable.call(addressYBQmWpV, byteJOnD2XL, {from: accounts[2]});

		assert.equal(uint256cfLSEDF, BigInt("0"))
		assert.equal(uint256s1gptLL, BigInt("3000000000000000000000000000"))
		await expect(ReviveS5QoYRJ.increaseLockAmount.call(bytevCbBdGp, uintHG8uV7i, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addressn96VLvj = accounts[2]
		const addresscrwrCW = accounts[5]
		const uint256RzVBJZ = await ReviveWoRWWx.unlock.call(addressn96VLvj, {from: accounts[3]});
		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addresscrwrCW, {from: accounts[0]});

		assert.equal(uint256RzVBJZ, BigInt("0"))
		assert.equal(uint256qLKyoA, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addressCjgq4f7 = accounts[4]
		const uintwdND4P = BigInt("352")
		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addressCjgq4f7, {from: accounts[0]});
//		const uint256WZUfVFA = await ReviveWoRWWx.recoverERC20.call(uintwdND4P, {from: accounts[2]});

		assert.equal(uint256qLKyoA, BigInt("0"))
		await expect(ReviveWoRWWx.recoverERC20.call(uintwdND4P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCbNcmBV = await Revive.new({from: accounts[4]});
		const addressyJRNtli = accounts[4]
		const uintWHSFsmZ = BigInt("516")
		const bytec1PMO1P = "0x19060d041004020b1e1e0d1919000c0e1e1f101c07130a201701140a1a160e19"
		const addressYkOoxG0 = accounts[2]
		const uintDwfoLfC = BigInt("217")
		const addressitnzCg5 = accounts[0]
		const addressSujmsrk = await ReviveCbNcmBV.owner.call({from: accounts[3]});
//		await ReviveCbNcmBV.onlyOwner.call({from: accounts[1]});
//		const uint256kAwmaQK = await ReviveCbNcmBV.balanceOf.call(addressyJRNtli, {from: accounts[0]});
//		const uint256HCMuawv = await ReviveCbNcmBV.tokensLockedAtTime.call(addressYkOoxG0, bytec1PMO1P, uintWHSFsmZ, {from: accounts[3]});
//		const uint256bzvYWsV = await ReviveCbNcmBV.totalSupply.call({from: accounts[4]});
//		const boolzXe1rnR = await ReviveCbNcmBV.approve.call(addressitnzCg5, uintDwfoLfC, {from: accounts[1]});

		assert.equal(addressSujmsrk, 0x1533Ace5f4EFbF4B3b5F3b446e6f0AF05a7be429)
		await expect(ReviveCbNcmBV.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const uintloNVokc = BigInt("207")
		const addressU8E81BQ = accounts[1]
		const addressKb9O0Ye = accounts[3]
		const boolHdj1SKG = await ReviverezRtZo.transfer.call(addressU8E81BQ, uintloNVokc, {from: accounts[0]});
		const uint256XhGWg5s = await ReviverezRtZo.getUnlockableTokens.call(addressKb9O0Ye, {from: accounts[3]});

		assert.equal(boolHdj1SKG, true)
		assert.equal(uint256XhGWg5s, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const addressKcWBXyH = accounts[3]
		const uintMVv34U1 = BigInt("561")
		const addressjm6KFb = accounts[2]
		const addressQCmsgtA = accounts[1]
		const uint256XhGWg5s = await ReviverezRtZo.getUnlockableTokens.call(addressKcWBXyH, {from: accounts[3]});
//		const uint256TlKfxaY = await ReviverezRtZo.recoverERC20.call(uintMVv34U1, {from: accounts[4]});
//		const uint256BWwPvFe = await ReviverezRtZo.allowance.call(addressQCmsgtA, addressjm6KFb, {from: accounts[3]});

		assert.equal(uint256XhGWg5s, BigInt("0"))
		await expect(ReviverezRtZo.recoverERC20.call(uintMVv34U1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIXswDRd = await Revive.new({from: accounts[2]});
		const uinthqp0oOm = BigInt("278")
		const uintPAyeA3z = BigInt("217")
		const byteQwZt2TQ = "0x1d161c06080b121d080c11001700091f0614031c1a1d13171d080a1a1701191c"
		const addressB486KmA = accounts[5]
		const uintSN7PR0P = BigInt("156")
		const boolVEykr8V = await ReviveIXswDRd.transferWithLock.call(addressB486KmA, byteQwZt2TQ, uintPAyeA3z, uinthqp0oOm, {from: accounts[2]});
//		const uint256IBUQGYD = await ReviveIXswDRd.recoverERC20.call(uintSN7PR0P, {from: accounts[2]});
//		const boolbdDakFx = await ReviveIXswDRd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVEykr8V, true)
		await expect(ReviveIXswDRd.recoverERC20.call(uintSN7PR0P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveSRddJJ = await Revive.new({from: accounts[4]});
		const addressRWHf8m = accounts[5]
		const boolvgft9Qf = await ReviveSRddJJ.isOwner.call({from: accounts[4]});
		const addressH0ogch3 = await ReviveSRddJJ.transferOwnership.call(addressRWHf8m, {from: accounts[4]});
		const addressBA3043a = await ReviveSRddJJ.owner.call({from: accounts[0]});

		assert.equal(addressBA3043a, 0x1533Ace5f4EFbF4B3b5F3b446e6f0AF05a7be429)
		assert.equal(boolvgft9Qf, true)
	});

	it('test for Revive', async () => {
		const ReviveBpGxTNc = await Revive.new({from: accounts[5]});
		const address6dfQBf = accounts[4]
		const uintduv1EVa = BigInt("53")
		const byteITCq0ty = "0x150412010c08ffffffff0805070b19120b20131e0613050c1e0d01170c0f1a03071a12"
		const uint256HRDgIJw = await ReviveBpGxTNc.unlock.call(address6dfQBf, {from: accounts[5]});
//		const boolkjrAQHG = await ReviveBpGxTNc.increaseLockAmount.call(byteITCq0ty, uintduv1EVa, {from: accounts[0]});

		assert.equal(uint256HRDgIJw, BigInt("0"))
		await expect(ReviveBpGxTNc.increaseLockAmount.call(byteITCq0ty, uintduv1EVa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addresstzJ4bZz = accounts[5]
		const uintBiglopG = BigInt("75")
		const uintLvhGcVE = BigInt("1522")
		const addressdqFOcYK = accounts[1]
		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addresstzJ4bZz, {from: accounts[0]});
//		const uint256WNNTlZI = await ReviveWoRWWx.recoverERC20.call(uintBiglopG, {from: accounts[4]});
//		const boolcTprtYw = await ReviveWoRWWx.transfer.call(addressdqFOcYK, uintLvhGcVE, {from: accounts[2]});

		assert.equal(uint256qLKyoA, BigInt("0"))
		await expect(ReviveWoRWWx.recoverERC20.call(uintBiglopG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBpGxTNc = await Revive.new({from: accounts[5]});
		const uintoeuUVUr = BigInt("1143")
		const byteM9Nh9RD = "0x1f050a0e070f05012011151902131101010a180c1d151b0f071306051407170b"
		const addressr1KOyRQ = accounts[5]
		const uintqkn0hnJ = BigInt("1445")
		const uintmCjHNXJ = BigInt("428")
		const uintNd6TxP = BigInt("121")
		const bytejgFwGQn = "0x01000a1d150c08010b1b0b01080510040817090e190d030d0b040e1515191705"
		const uint256KEnDLMS = await ReviveBpGxTNc.tokensLockedAtTime.call(addressr1KOyRQ, byteM9Nh9RD, uintoeuUVUr, {from: accounts[0]});
//		const uint256fg4GLZ = await ReviveBpGxTNc.recoverERC20.call(uintqkn0hnJ, {from: accounts[4]});
//		const boolJnLGYUb = await ReviveBpGxTNc.lock.call(bytejgFwGQn, uintNd6TxP, uintmCjHNXJ, {from: accounts[0]});
//		const booltMrEwfB = await ReviveBpGxTNc.isOwner.call({from: accounts[2]});

		assert.equal(uint256KEnDLMS, BigInt("0"))
		await expect(ReviveBpGxTNc.recoverERC20.call(uintqkn0hnJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const addressurOJTs = accounts[3]
		const uintOuAhRje = BigInt("59")
		const uint256XhGWg5s = await ReviverezRtZo.getUnlockableTokens.call(addressurOJTs, {from: accounts[3]});
//		const uint256ht4DKGv = await ReviverezRtZo.recoverERC20.call(uintOuAhRje, {from: accounts[1]});

		assert.equal(uint256XhGWg5s, BigInt("0"))
		await expect(ReviverezRtZo.recoverERC20.call(uintOuAhRje, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addresspI3Ft22 = accounts[5]
		const uintyILbl8q = BigInt("1660")
		const addressUU3qLrI = accounts[3]
		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addresspI3Ft22, {from: accounts[0]});
//		const addressrDMbuH3 = await ReviveWoRWWx.recoverERC20.call(addressUU3qLrI, uintyILbl8q, {from: accounts[0]});
//		await ReviveWoRWWx.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256qLKyoA, BigInt("0"))
		await expect(ReviveWoRWWx.recoverERC20.call(addressUU3qLrI, uintyILbl8q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const addressjoDHvmt = accounts[2]
		const uintXxgsALp = BigInt("799")
		const uint256XhGWg5s = await ReviverezRtZo.getUnlockableTokens.call(addressjoDHvmt, {from: accounts[3]});
//		const uint256gbSd3Hd = await ReviverezRtZo.recoverERC20.call(uintXxgsALp, {from: accounts[1]});

		assert.equal(uint256XhGWg5s, BigInt("0"))
		await expect(ReviverezRtZo.recoverERC20.call(uintXxgsALp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const uint4fP6Rt = BigInt("0")
		const byteUqnjx2x = "0x011617100111131416170909091501181c01010d1f1a190313161d0f1a0f121b"
		const addressPIkC695 = accounts[2]
		const uintzwXx54q = BigInt("1441")
		const byteuEXnepa = "0x091d050620081d0d09091d1e1a051c1e120e1f060417150d131317111d1b1a11"
		const addressyjuG6oX = accounts[2]
		const uintMKAWThM = BigInt("511")
		const addressm6nW8Cs = "0x0000000000000000000000000000000000000001"
		const addressQtct39 = accounts[5]
		const uint256PbTPyFx = await ReviverezRtZo.tokensLockedAtTime.call(addressPIkC695, byteUqnjx2x, uint4fP6Rt, {from: accounts[0]});
//		const uint256PRb7fa = await ReviverezRtZo.recoverERC20.call(uintzwXx54q, {from: accounts[1]});
//		const uint256lklVzMU = await ReviverezRtZo.tokensLocked.call(addressyjuG6oX, byteuEXnepa, {from: accounts[1]});
//		const booltn7S9xt = await ReviverezRtZo.transferFrom.call(addressQtct39, addressm6nW8Cs, uintMKAWThM, {from: accounts[0]});

		assert.equal(uint256PbTPyFx, BigInt("0"))
		await expect(ReviverezRtZo.recoverERC20.call(uintzwXx54q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const uintutOrsTQ = BigInt("893")
		const uinttDj9Duc = BigInt("1886")
		const byteOT4lh0O = "0x1d1a0900191d0c0b07fffffffc080203070103181a0c020c1a041c1104181a09050f03"
		const addresskaOimcv = accounts[2]
//		const boolQB1nLFS = await ReviverezRtZo.transferWithLock.call(addresskaOimcv, byteOT4lh0O, uinttDj9Duc, uintutOrsTQ, {from: accounts[0]});

		await expect(ReviverezRtZo.transferWithLock.call(addresskaOimcv, byteOT4lh0O, uinttDj9Duc, uintutOrsTQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const uintq0fzZDX = BigInt("185")
		const uintOqrf9ND = BigInt("757")
		const addressapNzIRo = accounts[1]
		const addresskZFHsAO = accounts[3]
//		const uint256jwIHgp8 = await ReviveWoRWWx.recoverERC20.call(uintq0fzZDX, {from: accounts[1]});
//		const addressm44XGIc = await ReviveWoRWWx.recoverERC20.call(addressapNzIRo, uintOqrf9ND, {from: accounts[0]});
//		const uint256RzVBJZ = await ReviveWoRWWx.unlock.call(addresskZFHsAO, {from: accounts[3]});

		await expect(ReviveWoRWWx.recoverERC20.call(uintq0fzZDX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepZ3vk1b = await Revive.new({from: accounts[3]});
		const uintfLDrDjf = BigInt("1784")
		const uinte08DWke = BigInt("1061")
		const addressSEtOvhy = accounts[4]
		const uintpr6E73H = BigInt("372")
		const byteHSH0aV5 = "0x1412110a1b1b04100e12130c0e0f1e1200180e091f191705110d1c16150f001d"
//		const uint256xJL3z4W = await RevivepZ3vk1b.recoverERC20.call(uintfLDrDjf, {from: accounts[1]});
//		const boolmmkxqLH = await RevivepZ3vk1b.increaseAllowance.call(addressSEtOvhy, uinte08DWke, {from: accounts[1]});
//		const boolagrwN9 = await RevivepZ3vk1b.extendLock.call(byteHSH0aV5, uintpr6E73H, {from: accounts[2]});

		await expect(RevivepZ3vk1b.recoverERC20.call(uintfLDrDjf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUeclwx5 = await Revive.new({from: accounts[3]});
		const uintyDPNAsV = BigInt("310")
		const addressFmltBJb = accounts[1]
		const uint0mUgcW = BigInt("1278")
		const uintd3XK8QS = BigInt("193")
		const addressJz9VXs = accounts[0]
		const addressyxdARx = await ReviveUeclwx5.owner.call({from: accounts[0]});
		const boolywQDbcB = await ReviveUeclwx5.approve.call(addressFmltBJb, uintyDPNAsV, {from: accounts[2]});
//		const uint256gud3bUQ = await ReviveUeclwx5.recoverERC20.call(uint0mUgcW, {from: accounts[4]});
//		const boolpjDW6n9 = await ReviveUeclwx5.increaseAllowance.call(addressJz9VXs, uintd3XK8QS, {from: accounts[3]});

		assert.equal(addressyxdARx, 0xCA5F541Ac35a804F19D44f4c81dD49a442393737)
		assert.equal(boolywQDbcB, true)
		await expect(ReviveUeclwx5.recoverERC20.call(uint0mUgcW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addressv5Z5e5I = accounts[3]
		const uintbkpdbIp = BigInt("941")
		const uintDfqFG2L = BigInt("51")
		const addresstMToZn3 = accounts[4]
		const uint256RzVBJZ = await ReviveWoRWWx.unlock.call(addressv5Z5e5I, {from: accounts[3]});
//		const uint256NLC9dYj = await ReviveWoRWWx.recoverERC20.call(uintbkpdbIp, {from: accounts[3]});
//		const boolOSGMp2F = await ReviveWoRWWx.transfer.call(addresstMToZn3, uintDfqFG2L, {from: accounts[1]});

		assert.equal(uint256RzVBJZ, BigInt("0"))
		await expect(ReviveWoRWWx.recoverERC20.call(uintbkpdbIp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const uintz5243A = BigInt("1631")
		const bytekqXjurh = "0x181c0118130903010d140b0a0c1a081e1b0401011d110f1b150f16010c140d0e"
		const addressM89dvom = accounts[2]
		const addressKgNY2du = accounts[2]
//		const uint256rxRJyQ = await ReviveWoRWWx.recoverERC20.call(uintz5243A, {from: accounts[5]});
//		const uint256oLdHvGx = await ReviveWoRWWx.tokensUnlockable.call(addressM89dvom, bytekqXjurh, {from: accounts[1]});
//		const uint256RzVBJZ = await ReviveWoRWWx.unlock.call(addressKgNY2du, {from: accounts[3]});

		await expect(ReviveWoRWWx.recoverERC20.call(uintz5243A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const uintpzvS172 = BigInt("2035")
		const addressVaxrTBE = accounts[3]
//		const uint256UB37bqZ = await ReviverezRtZo.recoverERC20.call(uintpzvS172, {from: accounts[2]});
//		const uint256XhGWg5s = await ReviverezRtZo.getUnlockableTokens.call(addressVaxrTBE, {from: accounts[3]});

		await expect(ReviverezRtZo.recoverERC20.call(uintpzvS172, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverezRtZo = await Revive.new({from: accounts[0]});
		const uintR73hNA5 = BigInt("1446")
		const uintO2Ya4v2 = BigInt("0")
		const byteSvBFQqf = "0x1f0a1e18161f011a100518091203001b150b060b18140420111a080e0f041917"
		const addressTaujOza = accounts[2]
//		const uint256i4WNhqH = await ReviverezRtZo.recoverERC20.call(uintR73hNA5, {from: accounts[5]});
//		const uint256PbTPyFx = await ReviverezRtZo.tokensLockedAtTime.call(addressTaujOza, byteSvBFQqf, uintO2Ya4v2, {from: accounts[0]});

		await expect(ReviverezRtZo.recoverERC20.call(uintR73hNA5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive3RFSeD = await Revive.new({from: accounts[3]});
		const addressEgHAV8G = accounts[2]
		const uintIS9fhYy = BigInt("594")
		const addressRihGte2 = accounts[4]
		const uint256iEWvtRQ = await Revive3RFSeD.getUnlockableTokens.call(addressEgHAV8G, {from: accounts[5]});
//		const uint256Ihq8Qth = await Revive3RFSeD.recoverERC20.call(uintIS9fhYy, {from: accounts[2]});
//		const uint256Y00mann = await Revive3RFSeD.balanceOf.call(addressRihGte2, {from: accounts[2]});

		assert.equal(uint256iEWvtRQ, BigInt("0"))
		await expect(Revive3RFSeD.recoverERC20.call(uintIS9fhYy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBpGxTNc = await Revive.new({from: accounts[5]});
		const uintIixuts = BigInt("1942")
		const uintJbOdqE = BigInt("428")
		const uintqj4y00a = BigInt("121")
		const byteViDcRSo = "0x01000a1d150c08010b1b0b01080510040817090e190d030d0b040e1515191705"
		const uintnRaJz3 = BigInt("467")
		const addressgczSsPV = accounts[4]
//		const uint256hskp21e = await ReviveBpGxTNc.recoverERC20.call(uintIixuts, {from: accounts[1]});
//		const boolJnLGYUb = await ReviveBpGxTNc.lock.call(byteViDcRSo, uintqj4y00a, uintJbOdqE, {from: accounts[0]});
//		const addressRDoRdgk = await ReviveBpGxTNc.recoverERC20.call(addressgczSsPV, uintnRaJz3, {from: accounts[0]});

		await expect(ReviveBpGxTNc.recoverERC20.call(uintIixuts, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const addressxW2ocyz = accounts[5]
		const uintCb1OcXy = BigInt("1141")
		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addressxW2ocyz, {from: accounts[0]});
//		const uint256BEtJ4W5 = await ReviveWoRWWx.recoverERC20.call(uintCb1OcXy, {from: accounts[0]});

		assert.equal(uint256qLKyoA, BigInt("0"))
		await expect(ReviveWoRWWx.recoverERC20.call(uintCb1OcXy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWoRWWx = await Revive.new({from: accounts[0]});
		const uintLpsOZj6 = BigInt("413")
		const uintUxHMjSh = BigInt("675")
		const addressex2JxqQ = accounts[2]
		const bytevHrTu3E = "0x0f1d120c0a071500031b161d1712050f150318121d171a081f0b0614081d1407"
		const addressdOfNiTQ = accounts[1]
		const addressntCTMjT = accounts[5]
//		const uint256Fhgcw3Z = await ReviveWoRWWx.recoverERC20.call(uintLpsOZj6, {from: accounts[5]});
//		const boolAuAC9Yk = await ReviveWoRWWx.increaseAllowance.call(addressex2JxqQ, uintUxHMjSh, {from: accounts[1]});
//		const uint256UKbWk5M = await ReviveWoRWWx.tokensLocked.call(addressdOfNiTQ, bytevHrTu3E, {from: accounts[4]});
//		const uint256qLKyoA = await ReviveWoRWWx.totalBalanceOf.call(addressntCTMjT, {from: accounts[0]});

		await expect(ReviveWoRWWx.recoverERC20.call(uintLpsOZj6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})