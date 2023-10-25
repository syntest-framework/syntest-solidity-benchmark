const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintSzoKd9G = BigInt("157")
		const DipexmyeipVt = await Dipex.new(stringilTxZW4, stringvvDCZWk, uintSzoKd9G, {from: accounts[3]});
		const uintu1xs1Cx = BigInt("224")
		const addressjmThxUt = accounts[2]
		const uintC8XXEkU = BigInt("1467")
		const addressm7Ux1oV = accounts[4]
		const addressTEbCnGU = accounts[0]
//		const boolCZ9ChT = await DipexmyeipVt.transfer.call(addressjmThxUt, uintu1xs1Cx, {from: accounts[5]});
//		const boolhRwitTs = await DipexmyeipVt.approve.call(addressm7Ux1oV, uintC8XXEkU, {from: accounts[4]});
//		const boolcvvufUu = await DipexmyeipVt.transferownership.call(addressTEbCnGU, {from: accounts[3]});

		await expect(DipexmyeipVt.transfer.call(addressjmThxUt, uintu1xs1Cx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringqztWgf = "j82SPx6guLHOVgwGq2o2OLNClxyapaOdaRgzyjBRm8jyJKVKqn2JwPyyq"
		const stringr499b87 = "EpS8fJUMjEQTLQ9jL0X7ifDBs5PtbhOLS15NkGginWhSEI6WlGLmj3rT1G16g7EoIghxKndbJu1GvrXTLq5N"
		const uintYZkK7cy = BigInt("1038")
		const DipexBxTJo6B = await Dipex.new(stringqztWgf, stringr499b87, uintYZkK7cy, {from: accounts[4]});
		const uinteDkofRm = BigInt("743")
		const addressMdVihmH = accounts[3]
		const uintYcV3emA = BigInt("841")
		const addressjolcDr4 = accounts[0]
		const uintOrOkV2 = BigInt("1653")
		const addressbmzCvbA = accounts[1]
		const uintcpKCJRd = BigInt("1076")
		const addressI2dMFqs = accounts[2]
		const boolyIdpHT0 = await DipexBxTJo6B.approve.call(addressMdVihmH, uinteDkofRm, {from: accounts[4]});
//		const boolPVh5k63 = await DipexBxTJo6B.approveAndCall.call(addressjolcDr4, uintYcV3emA, {from: accounts[2]});
//		const booln7Max40 = await DipexBxTJo6B.approve.call(addressbmzCvbA, uintOrOkV2, {from: "0x0000000000000000000000000000000000000001"});
//		const booljjy2HC6 = await DipexBxTJo6B.approve.call(addressI2dMFqs, uintcpKCJRd, {from: accounts[1]});

		assert.equal(boolyIdpHT0, true)
		await expect(DipexBxTJo6B.approveAndCall.call(addressjolcDr4, uintYcV3emA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringdK5qhUQ = "7o3LMG"
		const stringO14Qwst = "SMQx83xCIeJOMnmcYskV5pamXXXJ3XTkP67CAb3ldcnj6bAXlDyRjLOW4Jz4FgMdzLeYEOHmUqcmFREi"
		const uintb5fo2gh = BigInt("365")
		const DipexyvDpN9D = await Dipex.new(stringdK5qhUQ, stringO14Qwst, uintb5fo2gh, {from: accounts[4]});
		const uintFVgqd7W = BigInt("1104")
		const addressocBGAH = accounts[4]
		const uinto3Jtbu8 = BigInt("216")
		const addressb5imaz = accounts[3]
		const uintcu5AR2M = BigInt("794")
		const addressEukPAZ = accounts[5]
		const uintVZCxMCq = BigInt("610")
		const addresslFJ0nWr = accounts[3]
		const uintnCzmFyr = BigInt("1993")
		const addressTgX9bix = accounts[3]
//		const boolTvkEy4d = await DipexyvDpN9D.transfer.call(addressocBGAH, uintFVgqd7W, {from: "0x0000000000000000000000000000000000000001"});
//		const boolr074H2 = await DipexyvDpN9D.approveAndCall.call(addressb5imaz, uinto3Jtbu8, {from: accounts[1]});
//		const boolGi2wx67 = await DipexyvDpN9D.approve.call(addressEukPAZ, uintcu5AR2M, {from: accounts[0]});
//		const boolrSYVqPu = await DipexyvDpN9D.approveAndCall.call(addresslFJ0nWr, uintVZCxMCq, {from: accounts[1]});
//		const boolxILQzkF = await DipexyvDpN9D.approve.call(addressTgX9bix, uintnCzmFyr, {from: accounts[2]});

		await expect(DipexyvDpN9D.transfer.call(addressocBGAH, uintFVgqd7W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringWCmz7Dy = "cwhRW5fEL6U1rxtwsNA6m0mTt79AMWovVuXObpBZdWWHsck9ByqfxWTV3JfdOYHaHgpJE7xs9UPC3j3Pj0ME"
		const stringa9VmfRq = "PxyrY5cGNXVDqf3"
		const uintVN8MprU = BigInt("1810")
		const DipexWsLl2Ag = await Dipex.new(stringWCmz7Dy, stringa9VmfRq, uintVN8MprU, {from: accounts[1]});
		const uinthF6vV54 = BigInt("710")
		const addressPwp7XGM = accounts[2]
		const addressdoy3TrP = accounts[4]
		const uintnGJedWC = BigInt("878")
		const addresshargLYB = accounts[0]
		const addressIdUfUrV = accounts[3]
		const addressvNME1cq = accounts[1]
//		const boolSNSJ0rW = await DipexWsLl2Ag.transferFrom.call(addressdoy3TrP, addressPwp7XGM, uinthF6vV54, {from: accounts[3]});
//		const boolKWRRSbE = await DipexWsLl2Ag.transferFrom.call(addressIdUfUrV, addresshargLYB, uintnGJedWC, {from: accounts[3]});
//		const boolsiB9gs6 = await DipexWsLl2Ag.transferownership.call(addressvNME1cq, {from: accounts[4]});

		await expect(DipexWsLl2Ag.transferFrom.call(addressdoy3TrP, addressPwp7XGM, uinthF6vV54, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintiwJ5rP = BigInt("157")
		const DipexmyeipVt = await Dipex.new(stringilTxZW4, stringvvDCZWk, uintiwJ5rP, {from: accounts[3]});
		const uintEh5HiDr = BigInt("1506")
		const addressFVIca8s = accounts[2]
		const uintXesRIIw = BigInt("224")
		const addressiubZnv4 = accounts[2]
		const uintN1D5ESw = BigInt("1467")
		const addressqGVdDyw = accounts[5]
		const addressYRUqVGo = accounts[0]
		const boolkVRxiEh = await DipexmyeipVt.approveAndCall.call(addressFVIca8s, uintEh5HiDr, {from: accounts[3]});
//		const boolCZ9ChT = await DipexmyeipVt.transfer.call(addressiubZnv4, uintXesRIIw, {from: accounts[5]});
//		const boolhRwitTs = await DipexmyeipVt.approve.call(addressqGVdDyw, uintN1D5ESw, {from: accounts[4]});
//		const boolcvvufUu = await DipexmyeipVt.transferownership.call(addressYRUqVGo, {from: accounts[3]});

		assert.equal(boolkVRxiEh, true)
		await expect(DipexmyeipVt.transfer.call(addressiubZnv4, uintXesRIIw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintbQMzAob = BigInt("157")
		const DipexmyeipVt = await Dipex.new(stringilTxZW4, stringvvDCZWk, uintbQMzAob, {from: accounts[3]});
		const uint2a6azk = BigInt("1506")
		const addressUpoGkGw = accounts[2]
		const uintXgcWYW3 = BigInt("1934")
		const addressJ36jRTV = accounts[3]
		const uintPT0WLhV = BigInt("1467")
		const addressqs4pSuZ = accounts[6]
		const addressJpDThS = accounts[0]
		const boolkVRxiEh = await DipexmyeipVt.approveAndCall.call(addressUpoGkGw, uint2a6azk, {from: accounts[3]});
		const bool14xknq = await DipexmyeipVt.approve.call(addressJ36jRTV, uintXgcWYW3, {from: accounts[1]});
		const boolhRwitTs = await DipexmyeipVt.approve.call(addressqs4pSuZ, uintPT0WLhV, {from: accounts[4]});
		const boolcvvufUu = await DipexmyeipVt.transferownership.call(addressJpDThS, {from: accounts[3]});

		assert.equal(bool14xknq, true)
		assert.equal(boolcvvufUu, true)
		assert.equal(boolhRwitTs, true)
		assert.equal(boolkVRxiEh, true)
	});

	it('test for Dipex', async () => {
		const string0DBQ7a = "wl8kIRG9yaLkL8u2RQV7T4HhHWA2sGM9EQbSJhkNR3LaU1DCcC0gRvqXqRS6dGbCn5YIZQTDOx8Pv0MxpsRwOdTO2"
		const stringSQCX8Kd = "yGAra9WGfm3k6qyRKDKd8iGLVmLgaSfCwi"
		const uintvJcochV = BigInt("627")
		const DipexlNTOk1 = await Dipex.new(string0DBQ7a, stringSQCX8Kd, uintvJcochV, {from: accounts[2]});
		const uintxgTSqiF = BigInt("0")
		const addressOecXGqA = accounts[2]
		const addressvKJpMEu = accounts[2]
		const boolesMkRxI = await DipexlNTOk1.transfer.call(addressOecXGqA, uintxgTSqiF, {from: accounts[4]});
//		const boolSCHA1x = await DipexlNTOk1.transferownership.call(addressvKJpMEu, {from: accounts[1]});

		assert.equal(boolesMkRxI, true)
		await expect(DipexlNTOk1.transferownership.call(addressvKJpMEu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringbZXPdS = "ubhyX73bQXKxKMY9yqyHs6H2XHxVp7E71pDqP8TdzFwSxlNawRRDAquk"
		const stringU72dKjW = "fvsB7EQt8aHOT"
		const uintN7JFpsV = BigInt("167")
		const Dipexunq7QWV = await Dipex.new(stringbZXPdS, stringU72dKjW, uintN7JFpsV, {from: "0x0000000000000000000000000000000000000001"});
		const uintEYCxzH2 = BigInt("1834")
		const addressf6oVQ04 = accounts[5]
		const uintZfl8tAr = BigInt("1801")
		const addressH9vTTv5 = "0x0000000000000000000000000000000000000001"
		const addresswhmTf3D = accounts[3]
		const uintHjcM7jY = BigInt("1065")
		const addressWOwXq0H = accounts[3]
		const uintUnMLm2O = BigInt("1967")
		const addressKzjRDRm = accounts[4]
		const addressAV2ARVL = accounts[0]
		const addresssqzj29m = accounts[3]
		const boolN8rcx3e = await Dipexunq7QWV.approve.call(addressf6oVQ04, uintEYCxzH2, {from: accounts[2]});
		const boolsr48rkO = await Dipexunq7QWV.transferFrom.call(addresswhmTf3D, addressH9vTTv5, uintZfl8tAr, {from: accounts[0]});
		const boolXd2RRgt = await Dipexunq7QWV.approveAndCall.call(addressWOwXq0H, uintHjcM7jY, {from: accounts[1]});
		const boolOGlcPwZ = await Dipexunq7QWV.transferFrom.call(addressAV2ARVL, addressKzjRDRm, uintUnMLm2O, {from: accounts[5]});
		const boolvntC5rb = await Dipexunq7QWV.transferownership.call(addresssqzj29m, {from: accounts[3]});
	});

	it('test for Dipex', async () => {
		const stringz6zYqAA = "NAeHiyATSLETH61snkF5z9FhrGV12oXCsVhwGsbUAT4"
		const stringaRNDCXa = "90rDXg5H"
		const uintVBukAyt = BigInt("475")
		const DipexEab7PZw = await Dipex.new(stringz6zYqAA, stringaRNDCXa, uintVBukAyt, {from: accounts[4]});
		const uintxFRLp8 = BigInt("211")
		const addressPTSaqMK = accounts[4]
		const uintpuDngWJ = BigInt("0")
		const addressu7tAIbi = accounts[4]
		const boolk7jj366 = await DipexEab7PZw.approve.call(addressPTSaqMK, uintxFRLp8, {from: accounts[2]});
		const boolGB79wmz = await DipexEab7PZw.approveAndCall.call(addressu7tAIbi, uintpuDngWJ, {from: accounts[4]});

		assert.equal(boolGB79wmz, true)
		assert.equal(boolk7jj366, true)
	});
})