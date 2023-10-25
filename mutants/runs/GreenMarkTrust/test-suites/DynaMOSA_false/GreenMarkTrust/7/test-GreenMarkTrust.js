const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintaGSfCMm = BigInt("1384")
		const stringa482PGF = "sJt79BmrdkcgTWyr5mNYBN7WvyhywoIjLXqrw1wLKyQh6pkYFIovhwz3"
		const stringtwOdhT = "JYHNmpMachSC6JFpuyktTMVMme9lrjkUCqYpJzF1t9M4WcJpEqTecfIIm1gB"
		const GreenMarkTrustiI528z2 = await GreenMarkTrust.new(uintaGSfCMm, stringa482PGF, stringtwOdhT, {from: accounts[1]});
		const byteuO4HvF2 = "0x1a141f201c1204151e02051010030a04120c07201c020e1c0e051704"
		const uint68fa8O = BigInt("1119")
		const addressZSNBl9v = accounts[3]
		const bytew0duTjQ = "0x0a0d1b0f09"
		const uintOhu2FNB = BigInt("74")
		const addressFehWm9t = accounts[3]
		const uintL5oo7eX = BigInt("23")
		const addresslVV9R6J = accounts[1]
		const boolNfJW2PL = await GreenMarkTrustiI528z2.approveAndCall.call(addressZSNBl9v, uint68fa8O, byteuO4HvF2, {from: "0x0000000000000000000000000000000000000001"});
		const boolRRyLPn3 = await GreenMarkTrustiI528z2.approveAndCall.call(addressFehWm9t, uintOhu2FNB, bytew0duTjQ, {from: accounts[3]});
		const boolZIggPWw = await GreenMarkTrustiI528z2.transfer.call(addresslVV9R6J, uintL5oo7eX, {from: accounts[1]});

		await expect(GreenMarkTrustiI528z2.approveAndCall.call(addressZSNBl9v, uint68fa8O, byteuO4HvF2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintU0jtihS = BigInt("191")
		const stringar0nsQV = "LCPju"
		const stringSy8C7Zy = "JWJe0nRapLV3s98SvM2lh9IxF8rGp8ao8k2jQKEFhznaF5JXF9EqB7TigjuiAxGMEgHRPER5"
		const GreenMarkTrustjWZbjrR = await GreenMarkTrust.new(uintU0jtihS, stringar0nsQV, stringSy8C7Zy, {from: "0x0000000000000000000000000000000000000001"});
		const uintOd7FGLJ = BigInt("587")
		const addressb1cNHiN = accounts[1]
		const bytebQh5ZRO = "0x0b17091401100e0320081d13150d06020a050f191d15040018121b1f"
		const uintZG5IinQ = BigInt("1967")
		const addressEe3qOP3 = accounts[4]
		const uintS1RdO62 = BigInt("1879")
		const addressXmzKNmp = accounts[4]
		const addressIhXgU1x = accounts[5]
		const uintBavU6yx = BigInt("1608")
		const byteQtrCj9f = "0x101e1b1f021d1714150c180308"
		const uintrZySNPy = BigInt("419")
		const addressRUpvlZr = accounts[3]
		const uintI863UQ = BigInt("329")
		const boolD5rKitv = await GreenMarkTrustjWZbjrR.approve.call(addressb1cNHiN, uintOd7FGLJ, {from: accounts[4]});
		const boolh7w5JCd = await GreenMarkTrustjWZbjrR.approveAndCall.call(addressEe3qOP3, uintZG5IinQ, bytebQh5ZRO, {from: accounts[4]});
		const boolVaQS3m = await GreenMarkTrustjWZbjrR.transferFrom.call(addressIhXgU1x, addressXmzKNmp, uintS1RdO62, {from: accounts[0]});
		const boolvFpz8l = await GreenMarkTrustjWZbjrR.burn.call(uintBavU6yx, {from: "0x0000000000000000000000000000000000000001"});
		const boolvQgxxFs = await GreenMarkTrustjWZbjrR.approveAndCall.call(addressRUpvlZr, uintrZySNPy, byteQtrCj9f, {from: accounts[4]});
		const booliGpgFpk = await GreenMarkTrustjWZbjrR.burn.call(uintI863UQ, {from: accounts[5]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintt0YiZzB = BigInt("300")
		const stringaiTkjT = "h8Mp"
		const stringvTsXfAb = "Y4mjNfT8GHivCuVW7"
		const GreenMarkTrustQrwkSeT = await GreenMarkTrust.new(uintt0YiZzB, stringaiTkjT, stringvTsXfAb, {from: accounts[0]});
		const uintHOW4HOa = BigInt("1710")
		const addressK0SKPb8 = accounts[0]
		const uintG1bwbS = BigInt("136")
		const addressExEHMTj = accounts[5]
		const uintlpPaVE = BigInt("1461")
		const addressn4VjOn7 = accounts[4]
		const uintRCiqlC = BigInt("1118")
		const addressIoXLQ9N = accounts[4]
		const uintrztuIeT = BigInt("375")
		const addressxDMHjNr = "0x0000000000000000000000000000000000000001"
		const boolf1m4b8Q = await GreenMarkTrustQrwkSeT.transfer.call(addressK0SKPb8, uintHOW4HOa, {from: accounts[3]});
		const boolz2eb2HZ = await GreenMarkTrustQrwkSeT.burnFrom.call(addressExEHMTj, uintG1bwbS, {from: accounts[2]});
		const boollj4OBKH = await GreenMarkTrustQrwkSeT.approve.call(addressn4VjOn7, uintlpPaVE, {from: accounts[0]});
		const boolZu6plU3 = await GreenMarkTrustQrwkSeT.burnFrom.call(addressIoXLQ9N, uintRCiqlC, {from: accounts[3]});
		const booliInIN1z = await GreenMarkTrustQrwkSeT.approve.call(addressxDMHjNr, uintrztuIeT, {from: accounts[0]});

		await expect(GreenMarkTrustQrwkSeT.transfer.call(addressK0SKPb8, uintHOW4HOa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintzDmH6Qb = BigInt("35")
		const stringzTTKvVA = "reUUMvIiXe348Kj3r9t3m378r4"
		const stringAcW8ptv = "podSkFuNpOxjcU2sDw8D4XcfTgyqKy3XUqVICyyTL4ad4c5VUup4"
		const GreenMarkTrustuIU0h5q = await GreenMarkTrust.new(uintzDmH6Qb, stringzTTKvVA, stringAcW8ptv, {from: accounts[2]});
		const uintncMNmmO = BigInt("1473")
		const addressyCXhZgH = accounts[4]
		const addressWREY5wJ = accounts[3]
		const uintIpEOSwe = BigInt("1381")
		const addressCz2gbp = accounts[0]
		const uintzgcKRhu = BigInt("190")
		const addresssYK0V5R = "0x0000000000000000000000000000000000000001"
		const byteMGGTTwI = "0x0a0d10001d19091c140a1f17000d1c030609"
		const uintqYoKSDH = BigInt("1035")
		const addressRZzzYv8 = accounts[3]
		const uintjazoqsl = BigInt("1802")
		const addressuMgo1JW = accounts[1]
		const addressItybHuM = accounts[0]
		const boolPi43b1P = await GreenMarkTrustuIU0h5q.transferFrom.call(addressWREY5wJ, addressyCXhZgH, uintncMNmmO, {from: accounts[5]});
		const boolajHhfxg = await GreenMarkTrustuIU0h5q.burnFrom.call(addressCz2gbp, uintIpEOSwe, {from: accounts[4]});
		const boolTO69ZXj = await GreenMarkTrustuIU0h5q.burnFrom.call(addresssYK0V5R, uintzgcKRhu, {from: accounts[0]});
		const boolVvyTpiJ = await GreenMarkTrustuIU0h5q.approveAndCall.call(addressRZzzYv8, uintqYoKSDH, byteMGGTTwI, {from: accounts[4]});
		const boolTY8fAK = await GreenMarkTrustuIU0h5q.transferFrom.call(addressItybHuM, addressuMgo1JW, uintjazoqsl, {from: accounts[1]});

		await expect(GreenMarkTrustuIU0h5q.transferFrom.call(addressWREY5wJ, addressyCXhZgH, uintncMNmmO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintsZMuFc = BigInt("861")
		const stringXtjgk5 = "Au9bfAp7sVc3YoXINTXuSbgOXQq5u9ioMJOeaMSmqo7lB7DiILpJW6SKeqzfBVSTsvO5SNbznjwHuWxhP8VzHZUJbm4"
		const stringfCRpPSU = "VWnwx2"
		const GreenMarkTrustXOSD2EH = await GreenMarkTrust.new(uintsZMuFc, stringXtjgk5, stringfCRpPSU, {from: accounts[2]});
		const uintrvhDQf = BigInt("940")
		const addressaR0DCXj = accounts[1]
		const uintYMkMSd = BigInt("1958")
		const bytevO9iMfv = "0x0513"
		const uintcuaHwnA = BigInt("20")
		const addresskX5DQTB = accounts[4]
		const uintwprLDXo = BigInt("1290")
		const boolVuJKuRM = await GreenMarkTrustXOSD2EH.approve.call(addressaR0DCXj, uintrvhDQf, {from: accounts[2]});
		const boolACNewzv = await GreenMarkTrustXOSD2EH.burn.call(uintYMkMSd, {from: accounts[1]});
		const boolypbCoK = await GreenMarkTrustXOSD2EH.approveAndCall.call(addresskX5DQTB, uintcuaHwnA, bytevO9iMfv, {from: "0x0000000000000000000000000000000000000001"});
		const boolN96jJvQ = await GreenMarkTrustXOSD2EH.burn.call(uintwprLDXo, {from: accounts[4]});

		assert.equal(boolVuJKuRM, true)
		await expect(GreenMarkTrustXOSD2EH.burn.call(uintYMkMSd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintAZ0kVyn = BigInt("1949")
		const stringd2XNEsQ = "eBfBjUumdvJAlW12ELTHtWlPU4rmuDIl8vp4IrwpzJ2S4uvD2v21l2ydjvLJLIN9BsO8UIUrfjJ4vqCx2mk"
		const stringpfHR6g = "dtsp9nnjyRNGLr"
		const GreenMarkTrustpuI4P9i = await GreenMarkTrust.new(uintAZ0kVyn, stringd2XNEsQ, stringpfHR6g, {from: accounts[1]});
		const uintNDu5qWT = BigInt("203")
		const addresskYGZa0R = accounts[1]
		const byteeW8wRlx = "0x011618080810080f0d111e121a0d17"
		const uintLyjpWBr = BigInt("791")
		const addresscjOMwvl = accounts[2]
		const uintxiDSs4 = BigInt("208")
		const addresstwrbgJA = accounts[0]
		const addressM0BOXDx = accounts[0]
		const byteIkH3Z4D = "0x121c1820021405121e10"
		const uintKFx8OAZ = BigInt("1835")
		const addressrsoCeRQ = accounts[0]
		const uintxh0oiYe = BigInt("1424")
		const addressz2dMeCV = accounts[5]
		const addressW5SIS2w = "0x0000000000000000000000000000000000000001"
		const boolH5xSmr = await GreenMarkTrustpuI4P9i.burnFrom.call(addresskYGZa0R, uintNDu5qWT, {from: accounts[2]});
		const boolGWcDGqu = await GreenMarkTrustpuI4P9i.approveAndCall.call(addresscjOMwvl, uintLyjpWBr, byteeW8wRlx, {from: accounts[1]});
		const boolV9936A0 = await GreenMarkTrustpuI4P9i.transferFrom.call(addressM0BOXDx, addresstwrbgJA, uintxiDSs4, {from: accounts[2]});
		const booloaYS0Bg = await GreenMarkTrustpuI4P9i.approveAndCall.call(addressrsoCeRQ, uintKFx8OAZ, byteIkH3Z4D, {from: accounts[4]});
		const boolXfyrZKy = await GreenMarkTrustpuI4P9i.transferFrom.call(addressW5SIS2w, addressz2dMeCV, uintxh0oiYe, {from: accounts[1]});

		await expect(GreenMarkTrustpuI4P9i.burnFrom.call(addresskYGZa0R, uintNDu5qWT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})