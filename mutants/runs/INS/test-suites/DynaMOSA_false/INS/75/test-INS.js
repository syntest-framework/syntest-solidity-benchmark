const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintFEj7gt = BigInt("597")
		const stringJsdtbFd = "stAEVUM4cqlj7u8UOVj1Tbg2IXSD6TtyDRnm7zqmIl8i9k1tPoUrJkFlMWcw54"
		const stringzoBqngH = "jrXw1XRN82FQ2jI9cyRMTdNZF"
		const INSV19UZeE = await INS.new(uintFEj7gt, stringJsdtbFd, stringzoBqngH, {from: accounts[3]});
		const uintmVU6dRz = BigInt("1278")
		const addresskdcg3wR = accounts[1]
		const uintje0kskr = BigInt("1685")
		const addressJaqwSED = accounts[4]
		const bytec27rVO8 = "0x0f01090f1209120c071f000910141c0b131109070a13191d04171a151208"
		const uintXBzZF92 = BigInt("1134")
		const addressevmSXIC = accounts[5]
		const uintvaAbaS4 = BigInt("384")
		const uintKn8hVdI = BigInt("1153")
		const addressrJTzmAs = accounts[4]
		const addressxz9Y2Qu = accounts[5]
		const uintPXHbX8r = BigInt("850")
		const addressxmBJkwB = accounts[1]
		const boolYE1pviu = await INSV19UZeE.approve.call(addresskdcg3wR, uintmVU6dRz, {from: accounts[4]});
		const boolfU0pZIw = await INSV19UZeE.burnFrom.call(addressJaqwSED, uintje0kskr, {from: accounts[1]});
		const boolf72UQGX = await INSV19UZeE.approveAndCall.call(addressevmSXIC, uintXBzZF92, bytec27rVO8, {from: accounts[1]});
		const boolj1eRcP = await INSV19UZeE.burn.call(uintvaAbaS4, {from: accounts[3]});
		const boolmiPseDW = await INSV19UZeE.transferFrom.call(addressxz9Y2Qu, addressrJTzmAs, uintKn8hVdI, {from: accounts[4]});
		const boolJ9qzSeC = await INSV19UZeE.burnFrom.call(addressxmBJkwB, uintPXHbX8r, {from: accounts[3]});

		assert.equal(boolYE1pviu, true)
		await expect(INSV19UZeE.burnFrom.call(addressJaqwSED, uintje0kskr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintMn3X0id = BigInt("13")
		const stringD3tI7HQ = "76SkS5n"
		const stringsAtYLpO = "qTfDKjYJVp9eO4DMaHBUpSVrxG6j8G3ClTUT60WxQVbeqdvFcUcPZlWqAZEvs5kmuDfVR6z8FwEOiTh6gWlDbJH5"
		const INSfgbUF0Z = await INS.new(uintMn3X0id, stringD3tI7HQ, stringsAtYLpO, {from: accounts[2]});
		const uintmzBCflJ = BigInt("436")
		const byteKjvRNwJ = "0x1b1201161b00161f1719061b1307100415191b04"
		const uintIfVEJmC = BigInt("1020")
		const addressJDFQzD = "0x0000000000000000000000000000000000000001"
		const byteVTcDb9Q = "0x010602151a171a"
		const uintsepeHHI = BigInt("1716")
		const addresslwYDb5P = accounts[0]
		const boolev8COm4 = await INSfgbUF0Z.burn.call(uintmzBCflJ, {from: accounts[1]});
		const boolGaaRFTQ = await INSfgbUF0Z.approveAndCall.call(addressJDFQzD, uintIfVEJmC, byteKjvRNwJ, {from: accounts[2]});
		const boolGpNcGBr = await INSfgbUF0Z.approveAndCall.call(addresslwYDb5P, uintsepeHHI, byteVTcDb9Q, {from: accounts[4]});

		await expect(INSfgbUF0Z.burn.call(uintmzBCflJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintDZUUGXu = BigInt("1132")
		const stringPds7Zgl = "wppbOKNG47bwwnyavi8i39Z1D4ARUHT8TDeCeXFzIveHpPHWYwXl7k"
		const stringbC15MQ7 = "YxxBumQwR6ulABwaWuIJ1UNWRhvunqfdg"
		const INS93c2i8 = await INS.new(uintDZUUGXu, stringPds7Zgl, stringbC15MQ7, {from: accounts[1]});
		const uint7IePmX = BigInt("867")
		const addressWJtq6aS = accounts[4]
		const uintR2gMfIQ = BigInt("796")
		const addressu5UdbqS = accounts[2]
		const uintGL78TW = BigInt("1358")
		const addressSUwJxtl = accounts[0]
		const addressy5KyLNw = accounts[3]
		const uintk6wL3Tz = BigInt("1028")
		const addressUOiB7kr = accounts[3]
		const addressqnN9uwH = "0x0000000000000000000000000000000000000001"
		const byteINQNi7Y = "0x100e1406170303140b1906081d1d061b1c021e1c060117"
		const uintjCx93E = BigInt("365")
		const addressG1BvWBV = accounts[1]
		const boolbrBWG2M = await INS93c2i8.transfer.call(addressWJtq6aS, uint7IePmX, {from: "0x0000000000000000000000000000000000000001"});
		const boolxDKd6Ev = await INS93c2i8.transfer.call(addressu5UdbqS, uintR2gMfIQ, {from: accounts[0]});
		const boolCRDRKvv = await INS93c2i8.transferFrom.call(addressy5KyLNw, addressSUwJxtl, uintGL78TW, {from: accounts[0]});
		const boolGq2Q8sX = await INS93c2i8.transferFrom.call(addressqnN9uwH, addressUOiB7kr, uintk6wL3Tz, {from: accounts[4]});
		const boolXYZyJPh = await INS93c2i8.approveAndCall.call(addressG1BvWBV, uintjCx93E, byteINQNi7Y, {from: accounts[3]});

		await expect(INS93c2i8.transfer.call(addressWJtq6aS, uint7IePmX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintCaXuEBx = BigInt("1555")
		const stringucyXibv = "yrxjaOkGwdAcgBhYoGTmdzn57EcfconPUyDE133M5aHgP97BPQOSofHo22eU1RAtF88iYFIT2wSASw6I"
		const stringJwsqFj7 = "AD4OOt1g"
		const INScG1sg0C = await INS.new(uintCaXuEBx, stringucyXibv, stringJwsqFj7, {from: accounts[3]});
		const uinttFHD2Cs = BigInt("81")
		const addressD10fNC = accounts[4]
		const addressZ9Is1E7 = accounts[0]
		const uintoOJmUCQ = BigInt("208")
		const addresslgjnWgB = accounts[4]
		const uintF7OPqCz = BigInt("323")
		const addressEvN52M6 = accounts[2]
		const boolaOFoPo6 = await INScG1sg0C.transferFrom.call(addressZ9Is1E7, addressD10fNC, uinttFHD2Cs, {from: accounts[4]});
		const booluTt9Lxc = await INScG1sg0C.approve.call(addresslgjnWgB, uintoOJmUCQ, {from: accounts[3]});
		const boolKOOtbCr = await INScG1sg0C.approve.call(addressEvN52M6, uintF7OPqCz, {from: accounts[2]});

		await expect(INScG1sg0C.transferFrom.call(addressZ9Is1E7, addressD10fNC, uinttFHD2Cs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintI99xKq = BigInt("927")
		const stringBo9Cd6y = "lRxyjkstRc3gbIdMlyBxSonNdpxgjvNfYeR0WA22q9osUSnUxygTPeyKC6OAANmNlU9cHOqUkPhWzF9SSxyNLLWx1Bp8aSsp"
		const stringhHKKWGv = "QXfli1WdWDjI4mIit6LFCAlzi2Aq9n9YyLocEZ4ms5AjcgzSVzCgG3byl2qB7zALR1SuGB8pb46zPY7QAn"
		const INStxR4L4c = await INS.new(uintI99xKq, stringBo9Cd6y, stringhHKKWGv, {from: "0x0000000000000000000000000000000000000001"});
		const uintwSqpRpl = BigInt("1498")
		const addressTpUFnCr = accounts[1]
		const addressHcxJti = "0x0000000000000000000000000000000000000001"
		const uintTE2UmPz = BigInt("1215")
		const addresstsm1mEe = accounts[2]
		const address6r6w65 = accounts[1]
		const boolpO5Levj = await INStxR4L4c.transferFrom.call(addressHcxJti, addressTpUFnCr, uintwSqpRpl, {from: accounts[1]});
		const boolYAlXDku = await INStxR4L4c.transferFrom.call(address6r6w65, addresstsm1mEe, uintTE2UmPz, {from: accounts[3]});
	});

	it('test for INS', async () => {
		const uintp3eDkIR = BigInt("77")
		const stringwYcvGCK = "V0Ixinoo8VELV65B9hQRYxupRYt1m3ktZee"
		const stringKF8ZlqE = "9FiP5rkLAYOym6dwsKSnWtFd4Ax4doRCNlxGItmUiqoyiQhgXU5X"
		const INSTXUXAfe = await INS.new(uintp3eDkIR, stringwYcvGCK, stringKF8ZlqE, {from: accounts[1]});
		const byteeHeipGy = "0x161108170b021c10"
		const uintdt9piwu = BigInt("1892")
		const addressqzuWgO8 = accounts[1]
		const byteidm5TH = "0x19000b1e1b0619031e"
		const uintTE0NGzM = BigInt("502")
		const addressWmbrmcM = accounts[1]
		const uintIBklNab = BigInt("1623")
		const addressMNVUSm = accounts[5]
		const uintCfhQ7z1 = BigInt("1020")
		const bytelWaFwq1 = "0x17081716140d110a1f0a0b11061e0e1a031c051f1c1a1e0a140a060c1d"
		const uintapD0hA7 = BigInt("646")
		const addressjc8zRmZ = accounts[4]
		const boolgrfVCQ = await INSTXUXAfe.approveAndCall.call(addressqzuWgO8, uintdt9piwu, byteeHeipGy, {from: accounts[5]});
		const boolOsDiyLl = await INSTXUXAfe.approveAndCall.call(addressWmbrmcM, uintTE0NGzM, byteidm5TH, {from: "0x0000000000000000000000000000000000000001"});
		const boolE5yJp2r = await INSTXUXAfe.approve.call(addressMNVUSm, uintIBklNab, {from: accounts[4]});
		const booloMtXfV = await INSTXUXAfe.burn.call(uintCfhQ7z1, {from: accounts[5]});
		const boolhlo444y = await INSTXUXAfe.approveAndCall.call(addressjc8zRmZ, uintapD0hA7, bytelWaFwq1, {from: accounts[4]});

		await expect(INSTXUXAfe.approveAndCall.call(addressqzuWgO8, uintdt9piwu, byteeHeipGy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})