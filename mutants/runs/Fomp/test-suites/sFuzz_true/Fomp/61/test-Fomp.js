const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressd9L1vI0 = "0x0000000000000000000000000000000000000001"
		const FompINrwgd = await Fomp.new(addressd9L1vI0, {from: accounts[3]});
		const uintUaGsGTa = BigInt("560")
		const addressQM6rCfT = accounts[2]
		const uintdgaIwwE = BigInt("1755")
		const addressXOYygvo = accounts[4]
		const uintCiqVs1C = BigInt("1964")
		const addressdJj9DNq = accounts[0]
		const addressg0PrXuI = accounts[1]
		const addressp7YDO7a = accounts[0]
		const addressO9RQ3E5 = accounts[4]
		const uintr8DjWh = BigInt("1453")
		const addressdaZPR5 = accounts[4]
		const boolB5AgZqH = await FompINrwgd.transfer.call(addressQM6rCfT, uintUaGsGTa, {from: accounts[0]});
		const boolCvgb4Ek = await FompINrwgd.transfer.call(addressXOYygvo, uintdgaIwwE, {from: "0x0000000000000000000000000000000000000001"});
		const booluyhxM4 = await FompINrwgd.transferFrom.call(addressg0PrXuI, addressdJj9DNq, uintCiqVs1C, {from: "0x0000000000000000000000000000000000000001"});
		const uintyESO1Ft = await FompINrwgd.allowance.call(addressO9RQ3E5, addressp7YDO7a, {from: accounts[2]});
		const boolPAR27m = await FompINrwgd.approve.call(addressdaZPR5, uintr8DjWh, {from: accounts[4]});

		await expect(FompINrwgd.transfer.call(addressQM6rCfT, uintUaGsGTa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressTCq5aZS = accounts[2]
		const FompkPqzQoj = await Fomp.new(addressTCq5aZS, {from: accounts[1]});
		const addressU1jyxQY = accounts[4]
		const addressDDIXfL = accounts[0]
		const addressZdnABUS = accounts[1]
		const addressspBRFGx = "0x0000000000000000000000000000000000000001"
		const addressSkYhO86 = await FompkPqzQoj.delegate.call(addressU1jyxQY, {from: accounts[2]});
		const addressS2BapRs = await FompkPqzQoj.delegate.call(addressDDIXfL, {from: accounts[1]});
		const addressPsm9XdA = await FompkPqzQoj.delegate.call(addressZdnABUS, {from: "0x0000000000000000000000000000000000000001"});
		const uint96krA68WD = await FompkPqzQoj.getCurrentVotes.call(addressspBRFGx, {from: accounts[3]});

		assert.equal(uint96krA68WD, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresswT6oV3 = accounts[4]
		const FompAhR9cKC = await Fomp.new(addresswT6oV3, {from: accounts[0]});
		const addressKfUIfNd = accounts[3]
		const uintowbIAm0 = BigInt("429")
		const addressNYEiQQ = accounts[3]
		const byteoZGkGvJ = "0x0517140d1b071016161b1a15101a181a12040c1c06121d0b13110b1d06000106"
		const byteft5lsDL = "0x030505111f1319141d171320091010041a1407020a001317121f040c0f1d0908"
		const uintU6wihCH = BigInt("59")
		const uint89DluZ = BigInt("541")
		const uinteHXgJUK = BigInt("153")
		const addressFI1mmtP = accounts[1]
		const uint96JRWX7CK = await FompAhR9cKC.getCurrentVotes.call(addressKfUIfNd, {from: accounts[3]});
		const boolY0OGRYo = await FompAhR9cKC.transfer.call(addressNYEiQQ, uintowbIAm0, {from: accounts[4]});
		const addressy2TCPzr = await FompAhR9cKC.delegateBySig.call(addressFI1mmtP, uinteHXgJUK, uint89DluZ, uintU6wihCH, byteft5lsDL, byteoZGkGvJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolY0OGRYo, true)
		assert.equal(uint96JRWX7CK, BigInt("0"))
		await expect(FompAhR9cKC.delegateBySig.call(addressFI1mmtP, uinteHXgJUK, uint89DluZ, uintU6wihCH, byteft5lsDL, byteoZGkGvJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressQQy3UvX = accounts[4]
		const FompJO49JrA = await Fomp.new(addressQQy3UvX, {from: accounts[1]});
		const uintz2TIowU = BigInt("1142")
		const addressKVKJNdW = accounts[1]
		const uintVWSLjR5 = BigInt("1977")
		const addresstfr1sFh = accounts[0]
		const addressPPeiKdI = accounts[2]
		const uint96nZKmzcO = await FompJO49JrA.getPriorVotes.call(addressKVKJNdW, uintz2TIowU, {from: accounts[3]});
		const boolpJEmuyU = await FompJO49JrA.transferFrom.call(addressPPeiKdI, addresstfr1sFh, uintVWSLjR5, {from: accounts[2]});

		assert.equal(uint96nZKmzcO, BigInt("0"))
		await expect(FompJO49JrA.transferFrom.call(addressPPeiKdI, addresstfr1sFh, uintVWSLjR5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressuh7Vy0R = "0x0000000000000000000000000000000000000001"
		const FompVgvO1br = await Fomp.new(addressuh7Vy0R, {from: accounts[4]});
		const addressqrgTubS = accounts[4]
		const addressRroBTza = accounts[5]
		const uintsP6Q91r = BigInt("272")
		const addressZJKrgiy = accounts[3]
		const addressjew71Om = accounts[0]
		const uintUTS68Cn = BigInt("1416")
		const addressC950Zr = accounts[0]
		const uintVmT5AIq = await FompVgvO1br.allowance.call(addressRroBTza, addressqrgTubS, {from: accounts[0]});
		const boolpu9gHwR = await FompVgvO1br.approve.call(addressZJKrgiy, uintsP6Q91r, {from: accounts[0]});
		const uint96BBqIBi5 = await FompVgvO1br.getCurrentVotes.call(addressjew71Om, {from: accounts[0]});
		const boolH7D0Rcf = await FompVgvO1br.transfer.call(addressC950Zr, uintUTS68Cn, {from: accounts[1]});

		assert.equal(boolpu9gHwR, true)
		assert.equal(uint96BBqIBi5, BigInt("0"))
		assert.equal(uintVmT5AIq, BigInt("0"))
		await expect(FompVgvO1br.transfer.call(addressC950Zr, uintUTS68Cn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressGkz82UU = accounts[4]
		const FompJO49JrA = await Fomp.new(addressGkz82UU, {from: accounts[1]});
		const uinthdcahzv = BigInt("1977")
		const addressgktQEGj = accounts[0]
		const addressZ1TijOw = accounts[2]
		const uintxTFCX5e = BigInt("395")
		const addressUt1zWrK = accounts[5]
		const boolpJEmuyU = await FompJO49JrA.transferFrom.call(addressZ1TijOw, addressgktQEGj, uinthdcahzv, {from: accounts[2]});
		const boolH9BGCfJ = await FompJO49JrA.approve.call(addressUt1zWrK, uintxTFCX5e, {from: accounts[2]});

		await expect(FompJO49JrA.transferFrom.call(addressZ1TijOw, addressgktQEGj, uinthdcahzv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressfpZ70gm = accounts[2]
		const FompkPqzQoj = await Fomp.new(addressfpZ70gm, {from: accounts[1]});
		const addresskdHX9Ys = accounts[5]
		const addressZn5o1Cc = accounts[0]
		const addresseghjfW6 = accounts[1]
		const addressaMnTtQW = accounts[1]
		const addressyo0ncYp = accounts[2]
		const addressQOBjmL = accounts[2]
		const addressSkYhO86 = await FompkPqzQoj.delegate.call(addresskdHX9Ys, {from: accounts[2]});
		const addressS2BapRs = await FompkPqzQoj.delegate.call(addressZn5o1Cc, {from: accounts[1]});
		const addressPsm9XdA = await FompkPqzQoj.delegate.call(addresseghjfW6, {from: "0x0000000000000000000000000000000000000001"});
		const addressewpSH7W = await FompkPqzQoj.delegate.call(addressaMnTtQW, {from: accounts[1]});
		const uintdS1KKm = await FompkPqzQoj.balanceOf.call(addressyo0ncYp, {from: "0x0000000000000000000000000000000000000001"});
		const uint96krA68WD = await FompkPqzQoj.getCurrentVotes.call(addressQOBjmL, {from: accounts[3]});

		assert.equal(uint96krA68WD, BigInt("0"))
		assert.equal(uintdS1KKm, BigInt("1000000000000000000000000"))
	});

	it('test for Fomp', async () => {
		const addressWtPVoxa = accounts[4]
		const FompJO49JrA = await Fomp.new(addressWtPVoxa, {from: accounts[1]});
		const addressLJQ78ve = accounts[4]
		const uintu9WImhC = BigInt("759")
		const addressrD4dPJd = accounts[2]
		const uintuWQq4tN = BigInt("1991")
		const addresslYWRQFl = accounts[2]
		const addresskK95IMB = accounts[5]
		const uint96RYDFBZe = await FompJO49JrA.getCurrentVotes.call(addressLJQ78ve, {from: "0x0000000000000000000000000000000000000001"});
		const boolrF3VG99 = await FompJO49JrA.approve.call(addressrD4dPJd, uintu9WImhC, {from: accounts[1]});
		const boolpJEmuyU = await FompJO49JrA.transferFrom.call(addresskK95IMB, addresslYWRQFl, uintuWQq4tN, {from: accounts[2]});

		assert.equal(boolrF3VG99, true)
		assert.equal(uint96RYDFBZe, BigInt("0"))
		await expect(FompJO49JrA.transferFrom.call(addresskK95IMB, addresslYWRQFl, uintuWQq4tN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressh5wqlN = accounts[2]
		const FompkPqzQoj = await Fomp.new(addressh5wqlN, {from: accounts[1]});
		const addressogi2wWH = accounts[5]
		const uintQrDVugQ = BigInt("101")
		const addressJCfVpNS = accounts[4]
		const addressyvT0Rw9 = accounts[4]
		const addressoxRWxPq = accounts[5]
		const addressSkYhO86 = await FompkPqzQoj.delegate.call(addressogi2wWH, {from: accounts[2]});
		const uint96XLDpma1 = await FompkPqzQoj.getPriorVotes.call(addressJCfVpNS, uintQrDVugQ, {from: accounts[4]});
		const uintix7krs = await FompkPqzQoj.balanceOf.call(addressyvT0Rw9, {from: accounts[5]});
		const addressyxgr7BF = await FompkPqzQoj.delegate.call(addressoxRWxPq, {from: accounts[0]});

		assert.equal(uint96XLDpma1, BigInt("0"))
		assert.equal(uintix7krs, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressG5DajKl = accounts[3]
		const FompFpnZqBZ = await Fomp.new(addressG5DajKl, {from: "0x0000000000000000000000000000000000000001"});
		const uintQwMVME = BigInt("469")
		const addressoTrhhDZ = accounts[5]
		const bytevDa8KFW = "0x1e130e1a190b0d060809030b0e1613121d000d0e1f0604011409191a011a1b14"
		const byteF7wsITG = "0x1216191a0b011e1508190217050a0c0b01161609151f16200c080b021d1e0118"
		const uintCbzNuOT = BigInt("146")
		const uintzF1J7Qm = BigInt("809")
		const uintlh3ZJcY = BigInt("1506")
		const addressBOdPqCb = accounts[1]
		const addressvAlX5TI = accounts[1]
		const byteIQbnsaX = "0x1b08030d0f0e1c010801141c0f050f17100d1b1108120d030c17081004151d0c"
		const bytervoEIbT = "0x141a0d190c0403141216020f1e07050a080f190e0c031d0e1d18160e1b07091a"
		const uintlmM5MYK = BigInt("217")
		const uintTCYrCrv = BigInt("957")
		const uintxBkJRD = BigInt("1132")
		const addressFNZIWky = "0x0000000000000000000000000000000000000001"
		const byteHT6V5XQ = "0x021011090e0b1b0c111a160516131d19131209161116041912051d1a080d1b17"
		const byteM61Ol4q = "0x0a171b15001f1b140e050a1a090609141b021706011e010e0f051e140e1d0001"
		const uintEQqNcGc = BigInt("223")
		const uintHs2K1tV = BigInt("278")
		const uintYeZi1Rt = BigInt("210")
		const addressC4QlJd6 = accounts[4]
		const uintd6pdVlh = BigInt("2016")
		const addressnfd74vt = accounts[4]
		const boolNxbxJFb = await FompFpnZqBZ.transfer.call(addressoTrhhDZ, uintQwMVME, {from: accounts[3]});
		const addressT8WGurU = await FompFpnZqBZ.delegateBySig.call(addressBOdPqCb, uintlh3ZJcY, uintzF1J7Qm, uintCbzNuOT, byteF7wsITG, bytevDa8KFW, {from: accounts[4]});
		const uint96PPkROdu = await FompFpnZqBZ.getCurrentVotes.call(addressvAlX5TI, {from: accounts[5]});
		const addresscZpPw2 = await FompFpnZqBZ.delegateBySig.call(addressFNZIWky, uintxBkJRD, uintTCYrCrv, uintlmM5MYK, bytervoEIbT, byteIQbnsaX, {from: accounts[5]});
		const addressZ0Ov59X = await FompFpnZqBZ.delegateBySig.call(addressC4QlJd6, uintYeZi1Rt, uintHs2K1tV, uintEQqNcGc, byteM61Ol4q, byteHT6V5XQ, {from: accounts[4]});
		const boolvxcJPX = await FompFpnZqBZ.approve.call(addressnfd74vt, uintd6pdVlh, {from: accounts[3]});
	});
})