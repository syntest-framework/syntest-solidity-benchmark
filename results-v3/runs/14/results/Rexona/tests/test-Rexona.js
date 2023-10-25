const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintSzoKd9G = BigInt("157")
		const RexonamyeipVt = await Rexona.new(stringilTxZW4, stringvvDCZWk, uintSzoKd9G, {from: accounts[3]});
		const uintu1xs1Cx = BigInt("224")
		const addressjmThxUt = accounts[2]
		const uintC8XXEkU = BigInt("1467")
		const addressm7Ux1oV = accounts[4]
		const addressTEbCnGU = accounts[0]
		const boolCZ9ChT = await RexonamyeipVt.transfer.call(addressjmThxUt, uintu1xs1Cx, {from: accounts[5]});
		const boolhRwitTs = await RexonamyeipVt.approve.call(addressm7Ux1oV, uintC8XXEkU, {from: accounts[4]});
		const boolcvvufUu = await RexonamyeipVt.transferownership.call(addressTEbCnGU, {from: accounts[3]});

		await expect(RexonamyeipVt.transfer.call(addressjmThxUt, uintu1xs1Cx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringqztWgf = "j82SPx6guLHOVgwGq2o2OLNClxyapaOdaRgzyjBRm8jyJKVKqn2JwPyyq"
		const stringr499b87 = "EpS8fJUMjEQTLQ9jL0X7ifDBs5PtbhOLS15NkGginWhSEI6WlGLmj3rT1G16g7EoIghxKndbJu1GvrXTLq5N"
		const uintYZkK7cy = BigInt("1038")
		const RexonaBxTJo6B = await Rexona.new(stringqztWgf, stringr499b87, uintYZkK7cy, {from: accounts[4]});
		const uinteDkofRm = BigInt("743")
		const addressMdVihmH = accounts[3]
		const uintYcV3emA = BigInt("841")
		const addressjolcDr4 = accounts[0]
		const uintOrOkV2 = BigInt("1653")
		const addressbmzCvbA = accounts[1]
		const uintcpKCJRd = BigInt("1076")
		const addressI2dMFqs = accounts[2]
		const boolyIdpHT0 = await RexonaBxTJo6B.approve.call(addressMdVihmH, uinteDkofRm, {from: accounts[4]});
		const boolPVh5k63 = await RexonaBxTJo6B.approveAndCall.call(addressjolcDr4, uintYcV3emA, {from: accounts[2]});
		const booln7Max40 = await RexonaBxTJo6B.approve.call(addressbmzCvbA, uintOrOkV2, {from: "0x0000000000000000000000000000000000000001"});
		const booljjy2HC6 = await RexonaBxTJo6B.approve.call(addressI2dMFqs, uintcpKCJRd, {from: accounts[1]});

		assert.equal(boolyIdpHT0, true)
		await expect(RexonaBxTJo6B.approveAndCall.call(addressjolcDr4, uintYcV3emA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringdK5qhUQ = "7o3LMG"
		const stringO14Qwst = "SMQx83xCIeJOMnmcYskV5pamXXXJ3XTkP67CAb3ldcnj6bAXlDyRjLOW4Jz4FgMdzLeYEOHmUqcmFREi"
		const uintb5fo2gh = BigInt("365")
		const RexonayvDpN9D = await Rexona.new(stringdK5qhUQ, stringO14Qwst, uintb5fo2gh, {from: accounts[4]});
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
		const boolTvkEy4d = await RexonayvDpN9D.transfer.call(addressocBGAH, uintFVgqd7W, {from: "0x0000000000000000000000000000000000000001"});
		const boolr074H2 = await RexonayvDpN9D.approveAndCall.call(addressb5imaz, uinto3Jtbu8, {from: accounts[1]});
		const boolGi2wx67 = await RexonayvDpN9D.approve.call(addressEukPAZ, uintcu5AR2M, {from: accounts[0]});
		const boolrSYVqPu = await RexonayvDpN9D.approveAndCall.call(addresslFJ0nWr, uintVZCxMCq, {from: accounts[1]});
		const boolxILQzkF = await RexonayvDpN9D.approve.call(addressTgX9bix, uintnCzmFyr, {from: accounts[2]});

		await expect(RexonayvDpN9D.transfer.call(addressocBGAH, uintFVgqd7W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintiwJ5rP = BigInt("157")
		const RexonamyeipVt = await Rexona.new(stringilTxZW4, stringvvDCZWk, uintiwJ5rP, {from: accounts[3]});
		const uintEh5HiDr = BigInt("1506")
		const addressFVIca8s = accounts[2]
		const uintXesRIIw = BigInt("224")
		const addressiubZnv4 = accounts[2]
		const uintN1D5ESw = BigInt("1467")
		const addressqGVdDyw = accounts[5]
		const addressYRUqVGo = accounts[0]
		const boolkVRxiEh = await RexonamyeipVt.approveAndCall.call(addressFVIca8s, uintEh5HiDr, {from: accounts[3]});
		const boolCZ9ChT = await RexonamyeipVt.transfer.call(addressiubZnv4, uintXesRIIw, {from: accounts[5]});
		const boolhRwitTs = await RexonamyeipVt.approve.call(addressqGVdDyw, uintN1D5ESw, {from: accounts[4]});
		const boolcvvufUu = await RexonamyeipVt.transferownership.call(addressYRUqVGo, {from: accounts[3]});

		assert.equal(boolkVRxiEh, true)
		await expect(RexonamyeipVt.transfer.call(addressiubZnv4, uintXesRIIw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintbQMzAob = BigInt("157")
		const RexonamyeipVt = await Rexona.new(stringilTxZW4, stringvvDCZWk, uintbQMzAob, {from: accounts[3]});
		const uint2a6azk = BigInt("1506")
		const addressUpoGkGw = accounts[2]
		const uintXgcWYW3 = BigInt("1934")
		const addressJ36jRTV = accounts[3]
		const uintPT0WLhV = BigInt("1467")
		const addressqs4pSuZ = accounts[6]
		const addressJpDThS = accounts[0]
		const boolkVRxiEh = await RexonamyeipVt.approveAndCall.call(addressUpoGkGw, uint2a6azk, {from: accounts[3]});
		const bool14xknq = await RexonamyeipVt.approve.call(addressJ36jRTV, uintXgcWYW3, {from: accounts[1]});
		const boolhRwitTs = await RexonamyeipVt.approve.call(addressqs4pSuZ, uintPT0WLhV, {from: accounts[4]});
		const boolcvvufUu = await RexonamyeipVt.transferownership.call(addressJpDThS, {from: accounts[3]});

		assert.equal(bool14xknq, true)
		assert.equal(boolcvvufUu, true)
		assert.equal(boolhRwitTs, true)
		assert.equal(boolkVRxiEh, true)
	});

	it('test for Rexona', async () => {
		const stringxO87qTx = "ASoaq6WffTsv4IIPHB9QEzr9IMGMOvWpiX2kofzz8cnnNjRuJEvWJQzakKIFIiCO"
		const stringrmuGkTw = "o5236k2iNh"
		const uintOVCE4xO = BigInt("1362")
		const Rexonay2wTRP2 = await Rexona.new(stringxO87qTx, stringrmuGkTw, uintOVCE4xO, {from: "0x0000000000000000000000000000000000000001"});
		const addressNct9q6N = accounts[1]
		const uintHOWeIaI = BigInt("1427")
		const addressP7XAMn8 = accounts[4]
		const addressQFTKLN = accounts[1]
		const uintTOgW44 = BigInt("1924")
		const addressUNdocvK = accounts[4]
		const uintA0ARGX3 = BigInt("278")
		const addresskKMoNv5 = accounts[1]
		const uintWdOsh45 = BigInt("1876")
		const addressJuTVrg4 = accounts[5]
		const boolXmcNB3K = await Rexonay2wTRP2.transferownership.call(addressNct9q6N, {from: accounts[3]});
		const boolRiEYEWC = await Rexonay2wTRP2.approveAndCall.call(addressP7XAMn8, uintHOWeIaI, {from: accounts[1]});
		const boolw56oWAP = await Rexonay2wTRP2.transferownership.call(addressQFTKLN, {from: accounts[5]});
		const boolrGn3hv5 = await Rexonay2wTRP2.approveAndCall.call(addressUNdocvK, uintTOgW44, {from: accounts[3]});
		const boolhu2QZcc = await Rexonay2wTRP2.approve.call(addresskKMoNv5, uintA0ARGX3, {from: accounts[0]});
		const booldMW5jmV = await Rexonay2wTRP2.approve.call(addressJuTVrg4, uintWdOsh45, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintGco3zue = BigInt("157")
		const RexonamyeipVt = await Rexona.new(stringilTxZW4, stringvvDCZWk, uintGco3zue, {from: accounts[3]});
		const uintW74PGuU = BigInt("0")
		const addressUFjmJfb = "0x0000000000000000000000000000000000000001"
		const addresssOuNI7S = accounts[2]
		const uintEgbTsDC = BigInt("356")
		const addressRX5I6cv = accounts[1]
		const addresskaZXSJv = accounts[0]
		const uintxVUfEDe = BigInt("182")
		const addressysjbXCa = accounts[1]
		const boolh13JmYt = await RexonamyeipVt.transferFrom.call(addresssOuNI7S, addressUFjmJfb, uintW74PGuU, {from: accounts[3]});
		const boolSRjTfsr = await RexonamyeipVt.transferFrom.call(addresskaZXSJv, addressRX5I6cv, uintEgbTsDC, {from: accounts[4]});
		const boolSqhMEbi = await RexonamyeipVt.transfer.call(addressysjbXCa, uintxVUfEDe, {from: accounts[0]});

		assert.equal(boolh13JmYt, true)
		await expect(RexonamyeipVt.transferFrom.call(addresskaZXSJv, addressRX5I6cv, uintEgbTsDC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringilTxZW4 = "P3MAGscuccTOvaStdH6iKHJe8NR3pFDzgk"
		const stringvvDCZWk = "A3E9MGzhqzm6H3WrGne37Vihj31S4AxM6U74nUqAKFlx6fwJDsUga"
		const uintrKG4qEg = BigInt("157")
		const RexonamyeipVt = await Rexona.new(stringilTxZW4, stringvvDCZWk, uintrKG4qEg, {from: accounts[3]});
		const uintLWoYC8 = BigInt("0")
		const addresslk3WC25 = accounts[2]
		const boolkVRxiEh = await RexonamyeipVt.approveAndCall.call(addresslk3WC25, uintLWoYC8, {from: accounts[3]});

		assert.equal(boolkVRxiEh, true)
	});
})