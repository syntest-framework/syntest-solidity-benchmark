const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringTGIwQh7 = "JM2ELd2glYfk4AUsOzphNGirfxxTVFXWddGHDINHZziuNxFWGPqvpQaN4biTj4BYrHicD9ZHm4tguKdKOipYSgeWvsRuA4ssUX"
		const stringW6muJU = "wKqWeUe175gixbLVgKbPf2slxohxAtuQmzrny0UjDiabHegb6YGjRhjU6vkPIqDBkhrtqjGDZ8gKNO"
		const uintjAhUYYX = BigInt("214")
		const NALlRcIJvn = await NAL.new(stringTGIwQh7, stringW6muJU, uintjAhUYYX, {from: accounts[1]});
		const uintYWfHuvH = BigInt("816")
		const addressmfKURRX = accounts[0]
		const uintfinOSSd = BigInt("279")
		const addressZpg9LA = accounts[1]
		const uintLIUmIlw = BigInt("1488")
		const addressRSDFg9D = accounts[2]
		const addressOg2w9J3 = accounts[1]
		const uintl2MvI2O = BigInt("831")
		const uintrGu6X9 = BigInt("381")
		const addressR4NWiYS = "0x0000000000000000000000000000000000000001"
		const boolBHEm8ED = await NALlRcIJvn.approve.call(addressmfKURRX, uintYWfHuvH, {from: accounts[3]});
		const boolzUxmDED = await NALlRcIJvn.approve.call(addressZpg9LA, uintfinOSSd, {from: accounts[3]});
		const boolMSyA4Gq = await NALlRcIJvn.transferFrom.call(addressOg2w9J3, addressRSDFg9D, uintLIUmIlw, {from: accounts[5]});
		const uint256wFQAtVi = await NALlRcIJvn.burn.call(uintl2MvI2O, {from: accounts[3]});
		const boolVCzXugB = await NALlRcIJvn.decreaseAllowance.call(addressR4NWiYS, uintrGu6X9, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const uintt8UEoV = BigInt("1276")
		const addressWA7t54V = accounts[1]
		const addresslZuXSeK = accounts[5]
		const boolyeVtMYM = await NALn05I96M.unlock.call(addressWA7t54V, uintt8UEoV, {from: accounts[3]});
		const addressO3beNAG = await NALn05I96M.upgradeTo.call(addresslZuXSeK, {from: accounts[4]});
		const uint8sp4GW72 = await NALn05I96M.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALn05I96M.unlock.call(addressWA7t54V, uintt8UEoV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALBw237vh = await NAL.new({from: accounts[5]});
		const uintrezUIDm = BigInt("1429")
		const uintA2W3PG7 = BigInt("146")
		const addressMwSOftV = accounts[1]
		const uintPZSy2EW = BigInt("1351")
		const addressPqsIHZ = accounts[2]
		const addressqlEAzR5 = accounts[4]
		const uint256RmLz8EY = await NALBw237vh.burn.call(uintrezUIDm, {from: accounts[4]});
		const uint8hzZ5RSu = await NALBw237vh.decimals.call({from: accounts[1]});
		const boolPgYEbvT = await NALBw237vh.approve.call(addressMwSOftV, uintA2W3PG7, {from: accounts[4]});
		const boolCHuRJ21 = await NALBw237vh.transferFrom.call(addressqlEAzR5, addressPqsIHZ, uintPZSy2EW, {from: accounts[3]});
		await NALBw237vh.unpause.call({from: accounts[3]});

		await expect(NALBw237vh.burn.call(uintrezUIDm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXsWClyX = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintclV9APr = BigInt("1196")
		const addressUT5N8de = accounts[3]
		const uint8p3mrV9Z = await NALXsWClyX.decimals.call({from: accounts[2]});
		const boolWZ0GTt = await NALXsWClyX.transfer.call(addressUT5N8de, uintclV9APr, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALi1qMILw = await NAL.new({from: accounts[5]});
		const uintfAHbxR = BigInt("1695")
		const addressouGpIIY = accounts[5]
		const uintwepX89e = BigInt("1436")
		const addressHSyWFre = accounts[5]
		const addressdeqaZqU = accounts[3]
		const uintHXEhNmi = BigInt("199")
		const uintM6N8svx = BigInt("279")
		const addressk79cTJv = accounts[1]
		const boolOB6Nc3F = await NALi1qMILw.decreaseAllowance.call(addressouGpIIY, uintfAHbxR, {from: accounts[5]});
		await NALi1qMILw.unpause.call({from: accounts[1]});
		const booljlkSft = await NALi1qMILw.transferFrom.call(addressdeqaZqU, addressHSyWFre, uintwepX89e, {from: accounts[0]});
		const uint256oaGKlNL = await NALi1qMILw.burn.call(uintHXEhNmi, {from: "0x0000000000000000000000000000000000000001"});
		const boolE7jJHsh = await NALi1qMILw.transfer.call(addressk79cTJv, uintM6N8svx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALi1qMILw.decreaseAllowance.call(addressouGpIIY, uintfAHbxR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALuLOXz7q = await NAL.new({from: accounts[2]});
		const addressU50H61K = accounts[1]
		const stringi1eeIO1 = await NALuLOXz7q.symbol.call({from: accounts[1]});
		const addresspeLvQy = await NALuLOXz7q.notFrozen.call(addressU50H61K, {from: accounts[1]});

		assert.equal(stringi1eeIO1, "NAL")
		await expect(NALuLOXz7q.notFrozen.call(addressU50H61K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressiY5ia4I = accounts[3]
		const addresskftxf5g = accounts[1]
		const uintdXmCshS = BigInt("1276")
		const addressHYiu7Av = accounts[1]
		const uintwAJdO72 = BigInt("1928")
		const addressnREk6oF = accounts[3]
		const addressqNCHmre = accounts[4]
		const addressOwHl7ye = accounts[3]
		const uint256NkCFd9j = await NALn05I96M.allowance.call(addresskftxf5g, addressiY5ia4I, {from: accounts[4]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addressHYiu7Av, uintdXmCshS, {from: accounts[3]});
		const boolZkFcmW2 = await NALn05I96M.transferFrom.call(addressqNCHmre, addressnREk6oF, uintwAJdO72, {from: accounts[4]});
		const addressLtdXZX0 = await NALn05I96M.notFrozen.call(addressOwHl7ye, {from: accounts[3]});

		assert.equal(uint256NkCFd9j, BigInt("0"))
		await expect(NALn05I96M.unlock.call(addressHYiu7Av, uintdXmCshS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const uintWkfWwdx = BigInt("1261")
		const addressTRQrYyY = accounts[1]
		const uintdOIU9Vy = BigInt("1276")
		const addresshYWccU9 = accounts[1]
		const uintMlVd9M = BigInt("1767")
		const addressmrDoXY8 = accounts[3]
		const addressDqURnjQ = accounts[5]
		const boolIZYvole = await NALn05I96M.increaseAllowance.call(addressTRQrYyY, uintWkfWwdx, {from: accounts[4]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addresshYWccU9, uintdOIU9Vy, {from: accounts[3]});
		const boolN3FDGcv = await NALn05I96M.increaseAllowance.call(addressmrDoXY8, uintMlVd9M, {from: accounts[2]});
		const addressO3beNAG = await NALn05I96M.upgradeTo.call(addressDqURnjQ, {from: accounts[4]});
		const uint8sp4GW72 = await NALn05I96M.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIZYvole, true)
		await expect(NALn05I96M.unlock.call(addresshYWccU9, uintdOIU9Vy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const uintSLmSHs = BigInt("1928")
		const addresslbkeGDH = accounts[2]
		const addresst2X3Dim = accounts[4]
		const addressCrhmRUQ = accounts[3]
		const boolZkFcmW2 = await NALn05I96M.transferFrom.call(addresst2X3Dim, addresslbkeGDH, uintSLmSHs, {from: accounts[4]});
		const addressLtdXZX0 = await NALn05I96M.notFrozen.call(addressCrhmRUQ, {from: accounts[3]});

		await expect(NALn05I96M.transferFrom.call(addresst2X3Dim, addresslbkeGDH, uintSLmSHs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressua1RmZl = accounts[0]
		const uintZYpZAL = BigInt("1276")
		const addressaycFDFN = accounts[2]
		const uint256iioBKL2 = await NALn05I96M.totalSupply.call({from: accounts[2]});
		const uint256gXWgEfg = await NALn05I96M.balanceOf.call(addressua1RmZl, {from: accounts[1]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addressaycFDFN, uintZYpZAL, {from: accounts[3]});

		assert.equal(uint256gXWgEfg, BigInt("2000000000000000000000000000"))
		assert.equal(uint256iioBKL2, BigInt("2000000000000000000000000000"))
		await expect(NALn05I96M.unlock.call(addressaycFDFN, uintZYpZAL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const uintijnKilS = BigInt("655")
		const addressc7y3Rzn = accounts[1]
		const uintzVcuiwC = BigInt("1618")
		const addressLc2kIcQ = accounts[3]
		const uintAblmAmL = BigInt("1276")
		const addressRU0VZcm = accounts[1]
		const boolNSEdLO9 = await NALn05I96M.increaseAllowance.call(addressc7y3Rzn, uintijnKilS, {from: accounts[5]});
		const boolCadV9zy = await NALn05I96M.approve.call(addressLc2kIcQ, uintzVcuiwC, {from: accounts[0]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addressRU0VZcm, uintAblmAmL, {from: accounts[3]});

		assert.equal(boolCadV9zy, true)
		assert.equal(boolNSEdLO9, true)
		await expect(NALn05I96M.unlock.call(addressRU0VZcm, uintAblmAmL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const uintltKJidb = BigInt("1895")
		const addressMpl9v1a = accounts[4]
		const uintQbniY26 = BigInt("1928")
		const addressRaW4Ot0 = accounts[2]
		const addressZf4jnQZ = accounts[5]
		const addressfNgFssa = accounts[3]
		const boolOb0CKFi = await NALn05I96M.transfer.call(addressMpl9v1a, uintltKJidb, {from: accounts[0]});
		const boolZkFcmW2 = await NALn05I96M.transferFrom.call(addressZf4jnQZ, addressRaW4Ot0, uintQbniY26, {from: accounts[4]});
		const addressLtdXZX0 = await NALn05I96M.notFrozen.call(addressfNgFssa, {from: accounts[3]});

		assert.equal(boolOb0CKFi, true)
		await expect(NALn05I96M.transferFrom.call(addressZf4jnQZ, addressRaW4Ot0, uintQbniY26, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const uintUAuKn3 = BigInt("224")
		const address98wVZv = accounts[0]
		const addressBxnVBV7 = accounts[0]
		const uintv6wim1N = BigInt("1653")
		const addressTq8BL6 = accounts[2]
		const uint256iioBKL2 = await NALn05I96M.totalSupply.call({from: accounts[2]});
		const addressxxG8ZRN = await NALn05I96M.burnFrom.call(address98wVZv, uintUAuKn3, {from: accounts[3]});
		const uint256gXWgEfg = await NALn05I96M.balanceOf.call(addressBxnVBV7, {from: accounts[1]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addressTq8BL6, uintv6wim1N, {from: accounts[3]});

		assert.equal(uint256iioBKL2, BigInt("2000000000000000000000000000"))
		await expect(NALn05I96M.burnFrom.call(address98wVZv, uintUAuKn3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressiG8dLGZ = accounts[1]
		const uintpnfM7Ju = BigInt("737")
		const addressBXlD45g = accounts[3]
		const uintQfHjYJJ = BigInt("1276")
		const addresswLCZaYc = accounts[3]
		const stringLhGksFA = await NALn05I96M.name.call({from: accounts[4]});
		const uint256gXWgEfg = await NALn05I96M.balanceOf.call(addressiG8dLGZ, {from: accounts[1]});
		const boolbMKI17Z = await NALn05I96M.transfer.call(addressBXlD45g, uintpnfM7Ju, {from: accounts[4]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addresswLCZaYc, uintQfHjYJJ, {from: accounts[3]});

		assert.equal(stringLhGksFA, "Personal Token")
		assert.equal(uint256gXWgEfg, BigInt("0"))
		await expect(NALn05I96M.transfer.call(addressBXlD45g, uintpnfM7Ju, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressXJJQ7lZ = accounts[2]
		const addressiLZ1moW = accounts[0]
		const addresswC2IZb5 = accounts[0]
		const addressjvmSo5K = accounts[5]
		const uintXUZTqqJ = BigInt("1276")
		const addresscJO2x0k = accounts[2]
		const uint256iioBKL2 = await NALn05I96M.totalSupply.call({from: accounts[2]});
		const uint256Hn0aGZ = await NALn05I96M.allowance.call(addressiLZ1moW, addressXJJQ7lZ, {from: accounts[1]});
		const uint256gXWgEfg = await NALn05I96M.balanceOf.call(addresswC2IZb5, {from: accounts[1]});
		const booljdm1ggY = await NALn05I96M.paused.call({from: accounts[3]});
		const uint256c1ajaIW = await NALn05I96M.balanceOf.call(addressjvmSo5K, {from: accounts[0]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addresscJO2x0k, uintXUZTqqJ, {from: accounts[3]});

		assert.equal(booljdm1ggY, false)
		assert.equal(uint256Hn0aGZ, BigInt("0"))
		assert.equal(uint256c1ajaIW, BigInt("0"))
		assert.equal(uint256gXWgEfg, BigInt("2000000000000000000000000000"))
		assert.equal(uint256iioBKL2, BigInt("2000000000000000000000000000"))
		await expect(NALn05I96M.unlock.call(addresscJO2x0k, uintXUZTqqJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressrlvSkXs = accounts[2]
		const uintOnYRsNw = BigInt("1603")
		const addressJmq6las = accounts[1]
		const uint8PBBlsmc = await NALn05I96M.decimals.call({from: accounts[3]});
		const uint256gXWgEfg = await NALn05I96M.balanceOf.call(addressrlvSkXs, {from: accounts[1]});
		const addressw45RSut = await NALn05I96M.burnFrom.call(addressJmq6las, uintOnYRsNw, {from: accounts[0]});

		assert.equal(uint256gXWgEfg, BigInt("0"))
		assert.equal(uint8PBBlsmc, BigInt("18"))
		await expect(NALn05I96M.burnFrom.call(addressJmq6las, uintOnYRsNw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressTufNHqD = accounts[2]
		const addressKllXeaw = accounts[2]
		const uintsgyBEuX = BigInt("737")
		const addresskAAhGrR = accounts[3]
		const uintpZ8FngZ = BigInt("1276")
		const addressjmfCQ8C = accounts[3]
		const stringLhGksFA = await NALn05I96M.name.call({from: accounts[4]});
		const boolD68gQT = await NALn05I96M.unfreezeAccount.call(addressTufNHqD, {from: accounts[0]});
		const uint256gXWgEfg = await NALn05I96M.balanceOf.call(addressKllXeaw, {from: accounts[1]});
		const boolbMKI17Z = await NALn05I96M.transfer.call(addresskAAhGrR, uintsgyBEuX, {from: accounts[4]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addressjmfCQ8C, uintpZ8FngZ, {from: accounts[3]});

		assert.equal(stringLhGksFA, "Personal Token")
		await expect(NALn05I96M.unfreezeAccount.call(addressTufNHqD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressLL3un4X = accounts[1]
		const uintIpx4MgP = BigInt("1895")
		const addressM7TuT1S = accounts[4]
		const uintxjW6aqe = BigInt("1928")
		const addressd4KfkeS = accounts[2]
		const addressuvLj7EX = accounts[5]
		const addresscQFRPYn = accounts[3]
		await NALn05I96M.renounceAdmin.call({from: accounts[0]});
		const uint256SKUVaP1 = await NALn05I96M.balanceOf.call(addressLL3un4X, {from: accounts[2]});
		const boolOb0CKFi = await NALn05I96M.transfer.call(addressM7TuT1S, uintIpx4MgP, {from: accounts[0]});
		const boolZkFcmW2 = await NALn05I96M.transferFrom.call(addressuvLj7EX, addressd4KfkeS, uintxjW6aqe, {from: accounts[4]});
		const addressLtdXZX0 = await NALn05I96M.notFrozen.call(addresscQFRPYn, {from: accounts[3]});

		await expect(NALn05I96M.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressH8pUar4 = accounts[1]
		const addressyXMxHiC = accounts[2]
		const uintRfftRhM = BigInt("1107")
		const uintlgL9WS = BigInt("521")
		const addressJC7BFK = accounts[1]
		const addressDu0aFJD = "0x0000000000000000000000000000000000000001"
		const uintQNdgAR = BigInt("1630")
		const uintotauAa = BigInt("1754")
		const addresswEmCFJ = accounts[0]
		const uintDBSCuzi = BigInt("737")
		const addressWIeFnO = accounts[3]
		const uintBefiOFW = BigInt("1276")
		const addresskJ7yHN = accounts[3]
		const stringLhGksFA = await NALn05I96M.name.call({from: accounts[4]});
		const uint256gXWgEfg = await NALn05I96M.balanceOf.call(addressH8pUar4, {from: accounts[1]});
		const addressN9Q4vAk = await NALn05I96M.transferOwnership.call(addressyXMxHiC, {from: accounts[0]});
		const boolcmHPtl4 = await NALn05I96M.lock.call(addressJC7BFK, uintlgL9WS, uintRfftRhM, {from: accounts[2]});
		const addressRy2cNvc = await NALn05I96M.addAdmin.call(addressDu0aFJD, {from: accounts[3]});
		const boolErUYBnm = await NALn05I96M.transferWithLock.call(addresswEmCFJ, uintotauAa, uintQNdgAR, {from: accounts[1]});
		const boolbMKI17Z = await NALn05I96M.transfer.call(addressWIeFnO, uintDBSCuzi, {from: accounts[4]});
		const boolyeVtMYM = await NALn05I96M.unlock.call(addresskJ7yHN, uintBefiOFW, {from: accounts[3]});

		assert.equal(stringLhGksFA, "Personal Token")
		assert.equal(uint256gXWgEfg, BigInt("0"))
		await expect(NALn05I96M.lock.call(addressJC7BFK, uintlgL9WS, uintRfftRhM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtr64cuz = await NAL.new({from: accounts[2]});
		const uintBn2qWpi = BigInt("1851")
		const addressfAdiuyy = accounts[4]
		const addressUmpsDb5 = accounts[0]
		const bools2DVHTf = await NALtr64cuz.increaseAllowance.call(addressfAdiuyy, uintBn2qWpi, {from: accounts[2]});
		const addressCeapY6O = await NALtr64cuz.removeAdmin.call(addressUmpsDb5, {from: accounts[2]});

		assert.equal(bools2DVHTf, true)
		await expect(NALtr64cuz.removeAdmin.call(addressUmpsDb5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressyzQfDMf = accounts[0]
		const uintztcWn0U = BigInt("1928")
		const addressH5EOD94 = accounts[2]
		const addressuuIvCj = accounts[5]
		const booldTNNHQh = await NALn05I96M.isOwner.call(addressyzQfDMf, {from: accounts[0]});
		const uint256wCoLI7H = await NALn05I96M.totalSupply.call({from: accounts[2]});
		const boolZkFcmW2 = await NALn05I96M.transferFrom.call(addressuuIvCj, addressH5EOD94, uintztcWn0U, {from: accounts[4]});

		assert.equal(booldTNNHQh, true)
		assert.equal(uint256wCoLI7H, BigInt("2000000000000000000000000000"))
		await expect(NALn05I96M.transferFrom.call(addressuuIvCj, addressH5EOD94, uintztcWn0U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addressvfHyhlS = accounts[4]
		const uintSeT6Ex = BigInt("1928")
		const addressPWJrbJw = accounts[2]
		const addressUgLdu6f = accounts[6]
		const addressEtNiLhm = accounts[0]
		const addressWUzDf52 = await NALn05I96M.addAdmin.call(addressvfHyhlS, {from: accounts[0]});
		const boolZkFcmW2 = await NALn05I96M.transferFrom.call(addressUgLdu6f, addressPWJrbJw, uintSeT6Ex, {from: accounts[4]});
		const addressIujTkaj = await NALn05I96M.removeAdmin.call(addressEtNiLhm, {from: accounts[4]});

		await expect(NALn05I96M.transferFrom.call(addressUgLdu6f, addressPWJrbJw, uintSeT6Ex, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALn05I96M = await NAL.new({from: accounts[0]});
		const addresskjVP7ul = accounts[2]
		const uintABNnTzc = BigInt("1632")
		const addresscMpdND = accounts[4]
		const uinto6enuC4 = BigInt("297")
		const addressTgTubKg = accounts[0]
		const uintiKIHzlk = BigInt("1365")
		const addressL62IU2m = accounts[0]
		const addresslaQiS5d = accounts[5]
		const uintaMtPPqZ = BigInt("208")
		const addressQFx6PDn = accounts[2]
		const uintfDyYR1a = BigInt("1948")
		const uintek23xX1 = BigInt("524")
		const addressDUDgyv5 = accounts[3]
		const uintH1mIVTz = BigInt("395")
		const addressgHhOHYj = accounts[1]
		const addressnHUO9Oh = accounts[1]
		const uintSushRfG = BigInt("400")
		const addressuiIiyFc = accounts[2]
		const uintyH89QbD = BigInt("1580")
		const address9zWm2U = accounts[0]
		const addressuq7L9tu = accounts[5]
		const addressOen8R0F = accounts[4]
		const addressTSk73Kw = accounts[2]
		const addressdTryJLs = accounts[3]
		await NALn05I96M.renounceAdmin.call({from: accounts[0]});
		await NALn05I96M.pause.call({from: accounts[0]});
		const uint256SKUVaP1 = await NALn05I96M.balanceOf.call(addresskjVP7ul, {from: accounts[2]});
		const boolOb0CKFi = await NALn05I96M.transfer.call(addresscMpdND, uintABNnTzc, {from: accounts[0]});
		const boolXNnjQv5 = await NALn05I96M.approve.call(addressTgTubKg, uinto6enuC4, {from: "0x0000000000000000000000000000000000000001"});
		await NALn05I96M.whenNotPaused.call({from: accounts[2]});
		const boolW2cILEb = await NALn05I96M.transferFrom.call(addresslaQiS5d, addressL62IU2m, uintiKIHzlk, {from: "0x0000000000000000000000000000000000000001"});
		const addressT0ahshh = await NALn05I96M.burnFrom.call(addressQFx6PDn, uintaMtPPqZ, {from: accounts[1]});
		const boolBQlPzhW = await NALn05I96M.transferWithLock.call(addressDUDgyv5, uintek23xX1, uintfDyYR1a, {from: accounts[3]});
		const boolDTspsSK = await NALn05I96M.transferFrom.call(addressnHUO9Oh, addressgHhOHYj, uintH1mIVTz, {from: accounts[0]});
		const addressKPKzoNc = await NALn05I96M.burnFrom.call(addressuiIiyFc, uintSushRfG, {from: accounts[2]});
		const boolKHB2kQg = await NALn05I96M.transferFrom.call(addressuq7L9tu, address9zWm2U, uintyH89QbD, {from: accounts[3]});
		const addressiE1vLg = await NALn05I96M.addAdmin.call(addressOen8R0F, {from: accounts[2]});
		const uint256ZGbhHs9 = await NALn05I96M.balanceOf.call(addressTSk73Kw, {from: accounts[1]});
		const addressLtdXZX0 = await NALn05I96M.notFrozen.call(addressdTryJLs, {from: accounts[3]});

		await expect(NALn05I96M.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})