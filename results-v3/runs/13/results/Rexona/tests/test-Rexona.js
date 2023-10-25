const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringS5sbxB = "yCiaCWkc4OFsHpyNoilLhQJ"
		const stringFUz3LK5 = "ks8Ik8amIXxgcu465HdIziF2G4dvWjzxscRyvdBADPwngf3rHvXwbiAMaycSwyoLd"
		const uinteAcC7Ul = BigInt("1128")
		const RexonawLxrG3z = await Rexona.new(stringS5sbxB, stringFUz3LK5, uinteAcC7Ul, {from: "0x0000000000000000000000000000000000000001"});
		const uintrvPVQXT = BigInt("397")
		const addresscS4JCah = accounts[3]
		const addressd5umn1v = accounts[4]
		const uintRLTePyX = BigInt("58")
		const addressX08qubs = accounts[1]
		const uintbifR6fb = BigInt("1936")
		const addressUe76gHR = "0x0000000000000000000000000000000000000001"
		const uinth8gzw1c = BigInt("1655")
		const addressSTvimfO = accounts[5]
		const uintmyojXnS = BigInt("668")
		const addresszusZCX2 = accounts[4]
		const addressdBBYI0k = accounts[1]
		const boolKYBd6kU = await RexonawLxrG3z.transferFrom.call(addressd5umn1v, addresscS4JCah, uintrvPVQXT, {from: accounts[2]});
		const boolDvGMvTu = await RexonawLxrG3z.approveAndCall.call(addressX08qubs, uintRLTePyX, {from: accounts[4]});
		const boolM28QLM = await RexonawLxrG3z.transfer.call(addressUe76gHR, uintbifR6fb, {from: accounts[0]});
		const boolCBw1Blb = await RexonawLxrG3z.approve.call(addressSTvimfO, uinth8gzw1c, {from: "0x0000000000000000000000000000000000000001"});
		const booluzNJnF5 = await RexonawLxrG3z.transferFrom.call(addressdBBYI0k, addresszusZCX2, uintmyojXnS, {from: accounts[4]});
	});

	it('test for Rexona', async () => {
		const string6c3rXp = "fVcvN2HtqbddPVxKm8Zos6sec2kEWwIioqQ5V3I62jyp5zqc5ddP2psYi5Z7gqgxMgPYnCXZhtCpPMMX"
		const stringqnzz6g = "PalYsiEWO19IfomQ39oSzbU3KLE2TFg"
		const uintahLOekX = BigInt("844")
		const Rexonal4hiEf7 = await Rexona.new(string6c3rXp, stringqnzz6g, uintahLOekX, {from: accounts[1]});
		const uintjHhhCwi = BigInt("2018")
		const address82aNak = accounts[0]
		const address5Ei43I = accounts[5]
		const uintvildMrP = BigInt("1166")
		const addressu4w7D6C = accounts[2]
		const addressFiNCDpU = accounts[3]
		const uintwZFQZwa = BigInt("747")
		const addressie2ILk = "0x0000000000000000000000000000000000000001"
		const uintCfA6PHQ = BigInt("1560")
		const addresserGUTin = accounts[0]
		const uintqdMrgQn = BigInt("1206")
		const addresswtVMi5T = "0x0000000000000000000000000000000000000001"
		const boolxXnebN = await Rexonal4hiEf7.transferFrom.call(address5Ei43I, address82aNak, uintjHhhCwi, {from: accounts[4]});
		const boolTMvKl6z = await Rexonal4hiEf7.transferFrom.call(addressFiNCDpU, addressu4w7D6C, uintvildMrP, {from: accounts[2]});
		const boolvdwJG1I = await Rexonal4hiEf7.transfer.call(addressie2ILk, uintwZFQZwa, {from: accounts[4]});
		const booltjBCWaH = await Rexonal4hiEf7.transfer.call(addresserGUTin, uintCfA6PHQ, {from: accounts[4]});
		const boolA0yUQtj = await Rexonal4hiEf7.approve.call(addresswtVMi5T, uintqdMrgQn, {from: accounts[1]});

		await expect(Rexonal4hiEf7.transferFrom.call(address5Ei43I, address82aNak, uintjHhhCwi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringZAtvrCw = "HsqtxeGyjXjbfuoxDTRHVY3E81SteHYbeMeWvOMmDf1Lo7QVLBASxjhpr9KGz7pxHTwmrt"
		const stringyrepHy = "R35yTs0sNovrLrO8A"
		const uintDbUvOe9 = BigInt("487")
		const RexonaZ6naDCn = await Rexona.new(stringZAtvrCw, stringyrepHy, uintDbUvOe9, {from: accounts[5]});
		const uintwPvTdwU = BigInt("816")
		const addressblQBFKB = accounts[4]
		const uintAuVI6u5 = BigInt("1880")
		const addressQmswZo9 = accounts[2]
		const boolrPJ3LWY = await RexonaZ6naDCn.transfer.call(addressblQBFKB, uintwPvTdwU, {from: accounts[0]});
		const boolS1hG9TL = await RexonaZ6naDCn.transfer.call(addressQmswZo9, uintAuVI6u5, {from: accounts[0]});

		await expect(RexonaZ6naDCn.transfer.call(addressblQBFKB, uintwPvTdwU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringLThRQSH = "8WCFE3Rk"
		const stringBK5LzuZ = "PbkeEvjwtcIV8xXYkvplcCrmpoKTpQVt1cGf3Y4a4J6PxrOS2NZ4G8cGSi782ipC"
		const uintMQBYWnK = BigInt("403")
		const RexonahHIMkVx = await Rexona.new(stringLThRQSH, stringBK5LzuZ, uintMQBYWnK, {from: accounts[4]});
		const uintKlonFNL = BigInt("577")
		const addressXuVHTBb = accounts[2]
		const uintm5NyXuw = BigInt("892")
		const addresswlPSFvO = accounts[2]
		const uintkBZmR7 = BigInt("641")
		const addressfShaE9 = accounts[4]
		const uintc9cWg8u = BigInt("1914")
		const addresslArQeUo = accounts[1]
		const bools415D9A = await RexonahHIMkVx.approveAndCall.call(addressXuVHTBb, uintKlonFNL, {from: accounts[3]});
		const boolKzwMdDC = await RexonahHIMkVx.approveAndCall.call(addresswlPSFvO, uintm5NyXuw, {from: accounts[0]});
		const boolR98r8n = await RexonahHIMkVx.transfer.call(addressfShaE9, uintkBZmR7, {from: accounts[4]});
		const boolU9NSQfZ = await RexonahHIMkVx.approve.call(addresslArQeUo, uintc9cWg8u, {from: accounts[3]});

		await expect(RexonahHIMkVx.approveAndCall.call(addressXuVHTBb, uintKlonFNL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringBcOEV3Q = "fmvhQ4QmBjIst5ww94JR4MTLGVhfs3GS8bmYQ7hnxtKVQMhyHE24CFErQwt3fAqRHeA4e32iWHPLOnQy6UUm65kBpcHSe"
		const stringjejOmn = "25PR0GcQAMtQ8Qv"
		const uintOQaf98h = BigInt("1155")
		const RexonaeDjDBDW = await Rexona.new(stringBcOEV3Q, stringjejOmn, uintOQaf98h, {from: accounts[4]});
		const addressval0DKJ = accounts[0]
		const uintIOhF7u = BigInt("759")
		const addressSOyZUA = "0x0000000000000000000000000000000000000001"
		const uint39mrND = BigInt("861")
		const addressJhaHKIV = accounts[5]
		const uintBSdoOWV = BigInt("591")
		const addressfi7Ntx7 = accounts[0]
		const boolsp2hrlm = await RexonaeDjDBDW.transferownership.call(addressval0DKJ, {from: accounts[0]});
		const booloER1AV1 = await RexonaeDjDBDW.approveAndCall.call(addressSOyZUA, uintIOhF7u, {from: accounts[3]});
		const boolp6gPw4F = await RexonaeDjDBDW.approveAndCall.call(addressJhaHKIV, uint39mrND, {from: accounts[2]});
		const bool1QaRgo = await RexonaeDjDBDW.approveAndCall.call(addressfi7Ntx7, uintBSdoOWV, {from: accounts[3]});

		await expect(RexonaeDjDBDW.transferownership.call(addressval0DKJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringD2cHxtM = "UiCVk"
		const stringuS7lo0G = "AG9ajKbRR4g2fVFABsbWrnJLxHxxF0nRYUJ5rPH11gIodMVjYQafITbufU9wDRNLmybVfyiefj7GJYD8aMHaenXtlWtTbCj"
		const uintL3AnSz = BigInt("1421")
		const RexonagvLJtGy = await Rexona.new(stringD2cHxtM, stringuS7lo0G, uintL3AnSz, {from: accounts[3]});
		const uintZHtI0Y1 = BigInt("1582")
		const addresshmTYJyY = accounts[1]
		const uintt411qv = BigInt("1983")
		const addressLcGwGhG = accounts[0]
		const addressKbIdmdI = accounts[4]
		const boolucjPSl = await RexonagvLJtGy.approve.call(addresshmTYJyY, uintZHtI0Y1, {from: accounts[4]});
		const boolI0g92bw = await RexonagvLJtGy.transferFrom.call(addressKbIdmdI, addressLcGwGhG, uintt411qv, {from: accounts[1]});

		assert.equal(boolucjPSl, true)
		await expect(RexonagvLJtGy.transferFrom.call(addressKbIdmdI, addressLcGwGhG, uintt411qv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringZAtvrCw = "HsqtxeGyjXjbfuoxDTRHVY3E81SteHYbeMeWvOMmDf1Lo7QVLBASxjhpr9KGz7pxHTwmrt"
		const stringyrepHy = "R35yTs0sNovrLrO8A"
		const uintRWsy91M = BigInt("487")
		const RexonaZ6naDCn = await Rexona.new(stringZAtvrCw, stringyrepHy, uintRWsy91M, {from: accounts[5]});
		const uintxnxFiFL = BigInt("816")
		const addressDUixFlZ = accounts[5]
		const addressOmrSPcx = accounts[2]
		const addressDA4Gm1F = accounts[2]
		const boolrPJ3LWY = await RexonaZ6naDCn.transfer.call(addressDUixFlZ, uintxnxFiFL, {from: accounts[0]});
		const booluiR1Dj6 = await RexonaZ6naDCn.transferownership.call(addressOmrSPcx, {from: accounts[2]});
		const boole8dSvTM = await RexonaZ6naDCn.transferownership.call(addressDA4Gm1F, {from: accounts[0]});

		await expect(RexonaZ6naDCn.transfer.call(addressDUixFlZ, uintxnxFiFL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringGsJ6rw = "kpi8rAuVnbMWVcXJk5A5hFsFwh2gobhX26YTe17gzQINkOGwpC6P57Ki6o2IiF2IFNCw3xS"
		const stringeizXDt = "8eB0lwERvL6sS4NyLS1HezeLUlCLRlPZKAugxldUTzNbAL0Xx9Ex2u0jyalp1LdhLwLBHJaqixATJ2yt4hzC3"
		const uintimxaKSs = BigInt("187")
		const RexonaDVNZWvm = await Rexona.new(stringGsJ6rw, stringeizXDt, uintimxaKSs, {from: accounts[3]});
		const addresscCpiq2I = "0x0000000000000000000000000000000000000001"
		const addressmgxBQMa = accounts[3]
		const uintmRkZmWX = BigInt("369")
		const addressh3SQIgK = accounts[2]
		const addressrDa4XM = accounts[3]
		const uintISxKXHz = BigInt("226")
		const addressBCdDv75 = accounts[3]
		const uintUSnQHJr = BigInt("299")
		const addressRLrsXix = accounts[2]
		const boolbvyj201 = await RexonaDVNZWvm.transferownership.call(addresscCpiq2I, {from: accounts[3]});
		const boolp6BXLLK = await RexonaDVNZWvm.transferownership.call(addressmgxBQMa, {from: accounts[0]});
		const boolhy7ZXHg = await RexonaDVNZWvm.transferFrom.call(addressrDa4XM, addressh3SQIgK, uintmRkZmWX, {from: accounts[1]});
		const boolKeTDCP = await RexonaDVNZWvm.approve.call(addressBCdDv75, uintISxKXHz, {from: accounts[3]});
		const boolawPAo5M = await RexonaDVNZWvm.approveAndCall.call(addressRLrsXix, uintUSnQHJr, {from: accounts[5]});

		assert.equal(boolbvyj201, true)
		await expect(RexonaDVNZWvm.transferownership.call(addressmgxBQMa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringLThRQSH = "8WCFE3Rk"
		const stringBK5LzuZ = "PbkeEvjwtcIV8xXYkvplcCrmpoKTpQVt1cGf3Y4a4J6PxrOS2NZ4G8cGSi782ipC"
		const uintos6Axf0 = BigInt("403")
		const RexonahHIMkVx = await Rexona.new(stringLThRQSH, stringBK5LzuZ, uintos6Axf0, {from: accounts[4]});
		const uintDmvc4B = BigInt("2006")
		const addressRpP4E5r = accounts[3]
		const uintWIJgaTc = BigInt("892")
		const addressQDbFTC = accounts[2]
		const boolRAamUZf = await RexonahHIMkVx.approveAndCall.call(addressRpP4E5r, uintDmvc4B, {from: accounts[4]});
		const boolKzwMdDC = await RexonahHIMkVx.approveAndCall.call(addressQDbFTC, uintWIJgaTc, {from: accounts[0]});

		assert.equal(boolRAamUZf, true)
		await expect(RexonahHIMkVx.approveAndCall.call(addressQDbFTC, uintWIJgaTc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringLThRQSH = "8WCFE3Rk"
		const stringBK5LzuZ = "PbkeEvjwtcIV8xXYkvplcCrmpoKTpQVt1cGf3Y4a4J6PxrOS2NZ4G8cGSi782ipC"
		const uintEhyrh4G = BigInt("403")
		const RexonahHIMkVx = await Rexona.new(stringLThRQSH, stringBK5LzuZ, uintEhyrh4G, {from: accounts[4]});
		const uintFb25NpK = BigInt("0")
		const addressqCEowZI = accounts[4]
		const addresscLCGvEy = accounts[2]
		const boolFr13Dn = await RexonahHIMkVx.transferFrom.call(addresscLCGvEy, addressqCEowZI, uintFb25NpK, {from: accounts[1]});

		assert.equal(boolFr13Dn, true)
	});

	it('test for Rexona', async () => {
		const stringrsMtV4L = "a5hVsGg"
		const stringMzTzJkw = "Ghcde9gvcGD6gi4fU91"
		const uintzSOTijf = BigInt("1475")
		const RexonaJ4Dw1MU = await Rexona.new(stringrsMtV4L, stringMzTzJkw, uintzSOTijf, {from: accounts[1]});
		const uintLeLjGo7 = BigInt("965")
		const addressmsuUtaA = accounts[3]
		const uintPuyg3c = BigInt("0")
		const addresslsFiodk = accounts[2]
		const uintKMsgadm = BigInt("894")
		const addresskXA6jo7 = accounts[4]
		const uintTVNjnTq = BigInt("1010")
		const addressPb1R8wA = accounts[5]
		const addressWZvwtkv = accounts[5]
		const boolPot4rhy = await RexonaJ4Dw1MU.approve.call(addressmsuUtaA, uintLeLjGo7, {from: accounts[4]});
		const boolabjrOWL = await RexonaJ4Dw1MU.approveAndCall.call(addresslsFiodk, uintPuyg3c, {from: accounts[1]});
		const boolN0YdZRJ = await RexonaJ4Dw1MU.transfer.call(addresskXA6jo7, uintKMsgadm, {from: "0x0000000000000000000000000000000000000001"});
		const booliK0KM90 = await RexonaJ4Dw1MU.transferFrom.call(addressWZvwtkv, addressPb1R8wA, uintTVNjnTq, {from: accounts[0]});

		assert.equal(boolPot4rhy, true)
		assert.equal(boolabjrOWL, true)
		await expect(RexonaJ4Dw1MU.transfer.call(addresskXA6jo7, uintKMsgadm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})