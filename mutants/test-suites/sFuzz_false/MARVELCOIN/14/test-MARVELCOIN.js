const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintiX95Xqz = BigInt("1024")
		const stringWHjEfth = "lM7K18xldzj624g9iuCQVSsO6KWBINcfawAK4SSfHBDlRFdWAg7HUhiujkngROXS50nkckmtHP7o8EhYH0VMsjXrEMB2ri34ui3"
		const stringO4pj1vj = "MupkTgzwYc1DcLNcrDYtxBsr2FBaUUUm7IdUGetTAQFsPadtoEXHJ28wf24NhC2W7rw9U1E3GVA"
		const MARVELCOINrlxOfQ7 = await MARVELCOIN.new(uintiX95Xqz, stringWHjEfth, stringO4pj1vj, {from: accounts[4]});
		const uintcVLT7Hg = BigInt("969")
		const uintdbR3qDD = BigInt("816")
		const byteZprZVM4 = "0x14050d1819031b101a"
		const uintx2GVUYB = BigInt("1813")
		const addressbP0zYwG = accounts[2]
		const uintb5Ui0dW = BigInt("1202")
		const addresscuNCxMk = accounts[4]
		const uintHB1ZR4 = BigInt("330")
		const addresstt03StG = accounts[4]
		const addressIOocd9q = accounts[4]
		const boolWBHYTTk = await MARVELCOINrlxOfQ7.burn.call(uintcVLT7Hg, {from: accounts[4]});
//		const boolNiTnu8U = await MARVELCOINrlxOfQ7.burn.call(uintdbR3qDD, {from: accounts[2]});
//		const boolWc6qh9j = await MARVELCOINrlxOfQ7.approveAndCall.call(addressbP0zYwG, uintx2GVUYB, byteZprZVM4, {from: accounts[4]});
//		const boolhNeY2Sy = await MARVELCOINrlxOfQ7.approve.call(addresscuNCxMk, uintb5Ui0dW, {from: accounts[3]});
//		const boolk9e1sB = await MARVELCOINrlxOfQ7.transferFrom.call(addressIOocd9q, addresstt03StG, uintHB1ZR4, {from: accounts[3]});

		assert.equal(boolWBHYTTk, true)
		await expect(MARVELCOINrlxOfQ7.burn.call(uintdbR3qDD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkL5srUV = BigInt("990")
		const stringnftG9n = "IKwUmdRJq3CWAEeWWVUmEAzGE9vle1GyqoCjQZqJVqxAubP5HvLt4dWbckRkiPDuRFvd"
		const string3MUdCy = "Xew19slTGqIzceI4ie1cSJbVbhxVxA9vd7G4cajxFYy3pca8ua1U3pSuFGVTckzmW6tf3IEbfHLZK1SmVqGg"
		const MARVELCOINbmtiSLp = await MARVELCOIN.new(uintkL5srUV, stringnftG9n, string3MUdCy, {from: accounts[4]});
		const uintzvxBkKG = BigInt("1166")
		const addressMvcEZuZ = accounts[1]
		const bytehg6CyTN = "0x0c1804071b0c05000f1b"
		const uintVzC21zk = BigInt("1358")
		const addressV27i2gs = accounts[0]
		const bytedbdSgqg = "0x1f190d0701091a1917110311190205"
		const uintGV8aBXN = BigInt("1155")
		const addressTC2jmJ = accounts[4]
		const bool4zqP0E = await MARVELCOINbmtiSLp.approve.call(addressMvcEZuZ, uintzvxBkKG, {from: accounts[4]});
//		const boolualUy1U = await MARVELCOINbmtiSLp.approveAndCall.call(addressV27i2gs, uintVzC21zk, bytehg6CyTN, {from: accounts[1]});
//		const boolODReX6m = await MARVELCOINbmtiSLp.approveAndCall.call(addressTC2jmJ, uintGV8aBXN, bytedbdSgqg, {from: accounts[5]});

		assert.equal(bool4zqP0E, true)
		await expect(MARVELCOINbmtiSLp.approveAndCall.call(addressV27i2gs, uintVzC21zk, bytehg6CyTN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintOU6CcEC = BigInt("589")
		const stringHhceUqP = "uFHcro2545yPRBB7fefuOtJPNfOzf6ULdkJiki"
		const stringD4QS4Rr = "uAIC9"
		const MARVELCOINljka2mj = await MARVELCOIN.new(uintOU6CcEC, stringHhceUqP, stringD4QS4Rr, {from: "0x0000000000000000000000000000000000000001"});
		const uintEmxI44Q = BigInt("85")
		const uintc6AtIDG = BigInt("1704")
		const addressbYwpVJ2 = accounts[3]
		const addressfxzAuX = accounts[2]
		const uintkVk9K1B = BigInt("1238")
		const addressECVJtFd = accounts[4]
		const uintqZcHNM7 = BigInt("855")
		const addresskHENX33 = accounts[1]
		const boolfxHofE1 = await MARVELCOINljka2mj.burn.call(uintEmxI44Q, {from: accounts[1]});
		const boolaAH7Lm2 = await MARVELCOINljka2mj.transferFrom.call(addressfxzAuX, addressbYwpVJ2, uintc6AtIDG, {from: accounts[1]});
		const boolahdBXU9 = await MARVELCOINljka2mj.transfer.call(addressECVJtFd, uintkVk9K1B, {from: accounts[5]});
		const boolS4ddMRi = await MARVELCOINljka2mj.burnFrom.call(addresskHENX33, uintqZcHNM7, {from: accounts[2]});
	});

	it('test for MARVELCOIN', async () => {
		const uintWy54ktm = BigInt("2024")
		const stringyHNuNbI = "KjGS3YwpGhrN9knVc6VeBBp6e5viG0NAH0QDNibN9"
		const stringXhP5msU = "TDtu1I191fJkuJOUIR3j94QLdNYd"
		const MARVELCOINJSOKXKz = await MARVELCOIN.new(uintWy54ktm, stringyHNuNbI, stringXhP5msU, {from: accounts[0]});
		const uintJjsrbzv = BigInt("757")
		const uintb7BVWq = BigInt("1953")
		const addressZIeTJ4V = accounts[1]
		const addressmOptotJ = accounts[4]
		const uintCBw7vWv = BigInt("1398")
		const addressGarFct9 = accounts[4]
		const addresstMkJ7GR = accounts[1]
		const uintFQgCTMP = BigInt("1839")
		const addressneTfLqG = accounts[1]
		const boolrGhR1yF = await MARVELCOINJSOKXKz.burn.call(uintJjsrbzv, {from: accounts[0]});
//		const boolsDvnY2Y = await MARVELCOINJSOKXKz.transferFrom.call(addressmOptotJ, addressZIeTJ4V, uintb7BVWq, {from: accounts[4]});
//		const boolKKD8DK = await MARVELCOINJSOKXKz.transferFrom.call(addresstMkJ7GR, addressGarFct9, uintCBw7vWv, {from: accounts[0]});
//		const boolBGHqGJ5 = await MARVELCOINJSOKXKz.transfer.call(addressneTfLqG, uintFQgCTMP, {from: accounts[5]});

		assert.equal(boolrGhR1yF, true)
		await expect(MARVELCOINJSOKXKz.transferFrom.call(addressmOptotJ, addressZIeTJ4V, uintb7BVWq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintyofFSHf = BigInt("330")
		const stringtwW4kqz = "f84QoCvMolpuYsIRy"
		const stringZJJFfF4 = "ypen"
		const MARVELCOINuqGNzCf = await MARVELCOIN.new(uintyofFSHf, stringtwW4kqz, stringZJJFfF4, {from: accounts[0]});
		const uintlWJ5tBu = BigInt("1443")
		const addressADfAlV = accounts[2]
		const uintjvC2AP3 = BigInt("127")
		const addressRztjKs = accounts[1]
		const bytep6KNNGJ = "0x1808121a0f1b1b190709"
		const uintSGO4ftg = BigInt("1010")
		const addressuu3L7vn = accounts[4]
		const uintNhv33Sx = BigInt("761")
		const addressILoTBmK = accounts[4]
		const uintR7ozBVK = BigInt("1074")
//		const boolyZ1uP3 = await MARVELCOINuqGNzCf.burnFrom.call(addressADfAlV, uintlWJ5tBu, {from: accounts[0]});
//		const boolM1b9U7n = await MARVELCOINuqGNzCf.approve.call(addressRztjKs, uintjvC2AP3, {from: accounts[1]});
//		const booljWEWEP2 = await MARVELCOINuqGNzCf.approveAndCall.call(addressuu3L7vn, uintSGO4ftg, bytep6KNNGJ, {from: accounts[1]});
//		const boolYjBbn4N = await MARVELCOINuqGNzCf.approve.call(addressILoTBmK, uintNhv33Sx, {from: accounts[4]});
//		const boolNqPRss6 = await MARVELCOINuqGNzCf.burn.call(uintR7ozBVK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINuqGNzCf.burnFrom.call(addressADfAlV, uintlWJ5tBu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintM3gdo3 = BigInt("528")
		const string1D6i5T = "CUL4pLkiXKlJNv4Ic"
		const stringj6eoJ5O = "DFUBSvGBaEIAIoJqSUH0zn87wx3LHjNjmwUaVBAlD0MUN1oMsYM2wWwECWPeCK0DYmDLibGL2seBsYQ08G3HLw"
		const MARVELCOINAOkbWtK = await MARVELCOIN.new(uintM3gdo3, string1D6i5T, stringj6eoJ5O, {from: accounts[3]});
		const uintmFBdPXM = BigInt("1726")
		const addressBd9i6xx = accounts[4]
		const uintIY51Gl = BigInt("1037")
		const addressoeEkTwz = accounts[2]
//		const boolDDuvw7X = await MARVELCOINAOkbWtK.transfer.call(addressBd9i6xx, uintmFBdPXM, {from: accounts[0]});
//		const boolO0OCru6 = await MARVELCOINAOkbWtK.approve.call(addressoeEkTwz, uintIY51Gl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINAOkbWtK.transfer.call(addressBd9i6xx, uintmFBdPXM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})