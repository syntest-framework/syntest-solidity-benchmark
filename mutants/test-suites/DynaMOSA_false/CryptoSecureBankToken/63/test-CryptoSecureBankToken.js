const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintn3qVlDT = BigInt("540")
		const uintklLbwAo = BigInt("279")
		const addressFDgpAAm = accounts[0]
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintn3qVlDT, {from: accounts[4]});
		const boolkRx96d4 = await CryptoSecureBankTokendOnJHdJ.approve.call(addressFDgpAAm, uintklLbwAo, {from: accounts[5]});

		assert.equal(boolkRx96d4, true)
		assert.equal(boolnv2eFvn, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEj0zZhT = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressw7DNohQ = accounts[5]
		const uintG1bQkDr = BigInt("318")
		const addressPVLHTEb = accounts[4]
		const uintMFcrUQE = BigInt("401")
		const uintOqlEK6i = BigInt("1749")
//		const addressZB6TEbE = await CryptoSecureBankTokenEj0zZhT.addBlackList.call(addressw7DNohQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfQMXjuU = await CryptoSecureBankTokenEj0zZhT.approve.call(addressPVLHTEb, uintG1bQkDr, {from: accounts[4]});
//		await CryptoSecureBankTokenEj0zZhT.unpause.call({from: accounts[3]});
//		const uintSTYcR4X = await CryptoSecureBankTokenEj0zZhT.setParams.call(uintOqlEK6i, uintMFcrUQE, {from: accounts[3]});

		await expect(CryptoSecureBankTokenEj0zZhT.addBlackList.call(addressw7DNohQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyjJRY0h = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressuH7eGzn = accounts[4]
		const addressWQ0iktC = accounts[1]
		const uintGIzTOeq = BigInt("1815")
		const addressAYeqVu = accounts[2]
		const addressEXAU6Zi = accounts[0]
//		const addressyuNv1wl = await CryptoSecureBankTokenyjJRY0h.destroyBlackFunds.call(addressuH7eGzn, {from: accounts[4]});
//		const addresscdLUJ3A = await CryptoSecureBankTokenyjJRY0h.addBlackList.call(addressWQ0iktC, {from: accounts[0]});
//		const boolZOtrke9 = await CryptoSecureBankTokenyjJRY0h.approve.call(addressAYeqVu, uintGIzTOeq, {from: accounts[0]});
//		const addressIJUpHT7 = await CryptoSecureBankTokenyjJRY0h.getOwner.call({from: accounts[1]});
//		const boolinHPggK = await CryptoSecureBankTokenyjJRY0h.getBlackListStatus.call(addressEXAU6Zi, {from: accounts[1]});
//		await CryptoSecureBankTokenyjJRY0h.whenNotPaused.call({from: accounts[2]});

		await expect(CryptoSecureBankTokenyjJRY0h.destroyBlackFunds.call(addressuH7eGzn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAC1SP1s = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintXad1GR = BigInt("369")
		const addressi1ZnQTs = accounts[4]
		const addressKOt2f5 = accounts[4]
		const addresswUG2ZSj = accounts[2]
		const uintVkavj7z = BigInt("1720")
//		const booloIvB4oB = await CryptoSecureBankTokenAC1SP1s.transferFrom.call(addressKOt2f5, addressi1ZnQTs, uintXad1GR, {from: accounts[0]});
//		const addressZrD2Ssn = await CryptoSecureBankTokenAC1SP1s.transferOwnership.call(addresswUG2ZSj, {from: accounts[3]});
//		const uint4gyMAy = await CryptoSecureBankTokenAC1SP1s.onlyPayloadSize.call(uintVkavj7z, {from: accounts[4]});
//		await CryptoSecureBankTokenAC1SP1s.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenAC1SP1s.transferFrom.call(addressKOt2f5, addressi1ZnQTs, uintXad1GR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNwZktMX = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressCUTMJlG = accounts[0]
		const addresssDks5Ah = accounts[0]
		const uintqndSTD = BigInt("1916")
		const addresslPeitph = accounts[1]
		const addressz1QldsT = accounts[2]
//		const addresseLLzQ8 = await CryptoSecureBankTokenNwZktMX.transferOwnership.call(addressCUTMJlG, {from: "0x0000000000000000000000000000000000000001"});
//		const address4r6KFb = await CryptoSecureBankTokenNwZktMX.addBlackList.call(addresssDks5Ah, {from: accounts[3]});
//		const boolwGH13Bd = await CryptoSecureBankTokenNwZktMX.approve.call(addresslPeitph, uintqndSTD, {from: "0x0000000000000000000000000000000000000001"});
//		const uintRgkUhjT = await CryptoSecureBankTokenNwZktMX.balanceOf.call(addressz1QldsT, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokenNwZktMX.whenPaused.call({from: accounts[4]});

		await expect(CryptoSecureBankTokenNwZktMX.transferOwnership.call(addressCUTMJlG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenJmX3uv = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaDEP5I = accounts[3]
		const uintvi7pf6c = BigInt("656")
		const addressYPy2iRj = accounts[0]
		const boolMvC7lLy = await CryptoSecureBankTokenJmX3uv.getBlackListStatus.call(addressaDEP5I, {from: accounts[0]});
		const addressnGmNHN1 = await CryptoSecureBankTokenJmX3uv.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUlXK0l = await CryptoSecureBankTokenJmX3uv.transfer.call(addressYPy2iRj, uintvi7pf6c, {from: accounts[3]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankToken2jcSQX = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressmQexVaA = accounts[5]
		const addressr8LqLf = accounts[3]
		const addressAk4WuXh = accounts[2]
		const uintdPKD4sE = BigInt("2006")
		const addressF7aAnxZ = accounts[0]
		const uintBRbxGlG = await CryptoSecureBankToken2jcSQX.balanceOf.call(addressmQexVaA, {from: accounts[0]});
		const addresshRpCWpU = await CryptoSecureBankToken2jcSQX.addBlackList.call(addressr8LqLf, {from: accounts[3]});
//		const addressFVVYcDs = await CryptoSecureBankToken2jcSQX.setOwner2.call(addressAk4WuXh, {from: accounts[4]});
//		await CryptoSecureBankToken2jcSQX.unpause.call({from: accounts[2]});
//		const boolPCijoJg = await CryptoSecureBankToken2jcSQX.transfer.call(addressF7aAnxZ, uintdPKD4sE, {from: accounts[3]});

		assert.equal(uintBRbxGlG, BigInt("0"))
		await expect(CryptoSecureBankToken2jcSQX.setOwner2.call(addressAk4WuXh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCCCTTL5 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresswdlmGii = accounts[1]
		const addressvXC2wc = accounts[1]
		const addressEIF3hDb = accounts[3]
		const uintOG3ZGVM = BigInt("213")
		const addressEcxdOMW = accounts[5]
		const uintnLYif7y = await CryptoSecureBankTokenCCCTTL5.allowance.call(addressvXC2wc, addresswdlmGii, {from: accounts[2]});
//		const addresslLoNkAt = await CryptoSecureBankTokenCCCTTL5.removeBlackList.call(addressEIF3hDb, {from: accounts[5]});
//		const boolmcGfaKf = await CryptoSecureBankTokenCCCTTL5.redeem.call(uintOG3ZGVM, {from: accounts[2]});
//		const addresstxs04il = await CryptoSecureBankTokenCCCTTL5.destroyBlackFunds.call(addressEcxdOMW, {from: accounts[2]});

		assert.equal(uintnLYif7y, BigInt("0"))
		await expect(CryptoSecureBankTokenCCCTTL5.removeBlackList.call(addressEIF3hDb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uinte9CSFkv = BigInt("540")
		const uintQGA4eAb = BigInt("365")
		const addresswJlrtqC = accounts[2]
		const uintILDFplI = BigInt("96")
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uinte9CSFkv, {from: accounts[4]});
//		const boolMj435D4 = await CryptoSecureBankTokendOnJHdJ.transfer.call(addresswJlrtqC, uintQGA4eAb, {from: accounts[0]});
//		const boolpPXeJXj = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintILDFplI, {from: accounts[3]});

		assert.equal(boolnv2eFvn, true)
		await expect(CryptoSecureBankTokendOnJHdJ.transfer.call(addresswJlrtqC, uintQGA4eAb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenOjRwRGL = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintdqlGGPO = BigInt("1255")
		const addressQbYpCXp = accounts[2]
//		const uint0x5OSy = await CryptoSecureBankTokenOjRwRGL.onlyPayloadSize.call(uintdqlGGPO, {from: accounts[0]});
//		const uintddWhq9y = await CryptoSecureBankTokenOjRwRGL.totalSupply.call({from: accounts[3]});
//		const uintPhz48eC = await CryptoSecureBankTokenOjRwRGL.balanceOf.call(addressQbYpCXp, {from: accounts[4]});

		await expect(CryptoSecureBankTokenOjRwRGL.onlyPayloadSize.call(uintdqlGGPO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintkRwHZbL = BigInt("540")
		const uinttiCIjje = BigInt("434")
		const uintmbBUGgF = BigInt("983")
		const uintOhTPuJy = BigInt("365")
		const addressuzFjE9W = accounts[2]
		const uintabKZtWE = BigInt("96")
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintkRwHZbL, {from: accounts[4]});
//		const uintH74lq8j = await CryptoSecureBankTokendOnJHdJ.setParams.call(uintmbBUGgF, uinttiCIjje, {from: accounts[4]});
//		const boolMj435D4 = await CryptoSecureBankTokendOnJHdJ.transfer.call(addressuzFjE9W, uintOhTPuJy, {from: accounts[0]});
//		await CryptoSecureBankTokendOnJHdJ.whenNotPaused.call({from: accounts[0]});
//		const boolpPXeJXj = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintabKZtWE, {from: accounts[3]});

		assert.equal(boolnv2eFvn, true)
		await expect(CryptoSecureBankTokendOnJHdJ.setParams.call(uintmbBUGgF, uinttiCIjje, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenSJc5Z5p = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressfiI3D8h = accounts[0]
		const addressH1CQHoA = accounts[3]
		const uintmQaSIYk = BigInt("1857")
		const addresspryCaoQ = accounts[4]
		const addressvlTqFTk = accounts[3]
		const uintoxgpYeg = await CryptoSecureBankTokenSJc5Z5p.totalSupply.call({from: accounts[3]});
//		const addressfBJhs1 = await CryptoSecureBankTokenSJc5Z5p.transferOwnership.call(addressfiI3D8h, {from: accounts[1]});
//		const addressu2Sntyz = await CryptoSecureBankTokenSJc5Z5p.addBlackList.call(addressH1CQHoA, {from: accounts[0]});
//		const boolE5smPs3 = await CryptoSecureBankTokenSJc5Z5p.transferFrom.call(addressvlTqFTk, addresspryCaoQ, uintmQaSIYk, {from: accounts[2]});

		assert.equal(uintoxgpYeg, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenSJc5Z5p.transferOwnership.call(addressfiI3D8h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintd4t0zcH = BigInt("492")
		const addressyRRAP1A = accounts[4]
		const uintlzZvsz9 = BigInt("279")
		const addressAi7IkMk = accounts[0]
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintd4t0zcH, {from: accounts[4]});
		const addressZKWVJVs = await CryptoSecureBankTokendOnJHdJ.transferOwnership.call(addressyRRAP1A, {from: accounts[4]});
		const boolkRx96d4 = await CryptoSecureBankTokendOnJHdJ.approve.call(addressAi7IkMk, uintlzZvsz9, {from: accounts[5]});

		assert.equal(boolkRx96d4, true)
		assert.equal(boolnv2eFvn, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintg0BzFLD = BigInt("540")
		const uintbEWU5vn = BigInt("174")
		const addresskdxnwF = accounts[1]
		const addresshbNH8mq = accounts[3]
		const uintVKWL6wf = BigInt("273")
		const addressOGyvFoK = accounts[0]
		const addressz3FigRM = accounts[2]
		const addressWxGwv5c = await CryptoSecureBankTokendOnJHdJ.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintg0BzFLD, {from: accounts[4]});
//		const bool5flxw1 = await CryptoSecureBankTokendOnJHdJ.transferFrom.call(addresshbNH8mq, addresskdxnwF, uintbEWU5vn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkRx96d4 = await CryptoSecureBankTokendOnJHdJ.approve.call(addressOGyvFoK, uintVKWL6wf, {from: accounts[5]});
//		const addressePXrMje = await CryptoSecureBankTokendOnJHdJ.setOwner2.call(addressz3FigRM, {from: accounts[3]});
//		await CryptoSecureBankTokendOnJHdJ.pause.call({from: accounts[0]});

		assert.equal(addressWxGwv5c, 0xf89d5A9Cad88ae2767014362E85e33c562cb9b14)
		assert.equal(boolnv2eFvn, true)
		await expect(CryptoSecureBankTokendOnJHdJ.transferFrom.call(addresshbNH8mq, addresskdxnwF, uintbEWU5vn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressKCNfnNd = accounts[0]
		const uintKSkM91I = BigInt("540")
		const boolBhdTV0v = await CryptoSecureBankTokendOnJHdJ.getBlackListStatus.call(addressKCNfnNd, {from: accounts[4]});
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintKSkM91I, {from: accounts[4]});

		assert.equal(boolBhdTV0v, false)
		assert.equal(boolnv2eFvn, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintp7hYIGi = BigInt("564")
		const uintth2MDjm = BigInt("596")
		const addressty1lyon = accounts[4]
		const uintQyHhss6 = BigInt("365")
		const addressu5czhTp = accounts[2]
		const uintbCnPMSn = BigInt("969")
		const addressLnvVEP = accounts[5]
		const uintknYs8q = BigInt("96")
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintp7hYIGi, {from: accounts[4]});
		const boolfYgpXY = await CryptoSecureBankTokendOnJHdJ.transfer.call(addressty1lyon, uintth2MDjm, {from: accounts[4]});
//		const boolMj435D4 = await CryptoSecureBankTokendOnJHdJ.transfer.call(addressu5czhTp, uintQyHhss6, {from: accounts[0]});
//		await CryptoSecureBankTokendOnJHdJ.pause.call({from: accounts[2]});
//		await CryptoSecureBankTokendOnJHdJ.whenNotPaused.call({from: accounts[0]});
//		const boolKgLe27l = await CryptoSecureBankTokendOnJHdJ.transfer.call(addressLnvVEP, uintbCnPMSn, {from: accounts[0]});
//		const boolpPXeJXj = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintknYs8q, {from: accounts[3]});

		assert.equal(boolfYgpXY, true)
		assert.equal(boolnv2eFvn, true)
		await expect(CryptoSecureBankTokendOnJHdJ.transfer.call(addressu5czhTp, uintQyHhss6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintQzhcDuA = BigInt("1525")
		const addressnENfFE0 = "0x0000000000000000000000000000000000000001"
		const uintdPsV4a = BigInt("540")
		const addressHW4wrNf = "0x00000000000000000000000000000000000000-1"
		const addressWsDLH2v = accounts[1]
		const uint79yKSs = BigInt("174")
		const addresseGETOs2 = accounts[1]
		const addressLaPzkfU = accounts[1]
		const uintjmH0OI9 = BigInt("273")
		const addressgM4ua8o = accounts[0]
		const addressXRibCG = accounts[2]
		const uintmMh3rvx = BigInt("1220")
		const addressoaCIc4f = accounts[0]
		const uintnZw0hYo = BigInt("1170")
		const addresspmndZEv = accounts[3]
		const addressUoA6RFJ = accounts[0]
		const boolqIsPBBJ = await CryptoSecureBankTokendOnJHdJ.approve.call(addressnENfFE0, uintQzhcDuA, {from: accounts[3]});
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintdPsV4a, {from: accounts[4]});
//		const uintgxonMOr = await CryptoSecureBankTokendOnJHdJ.balanceOf.call(addressHW4wrNf, {from: "0x0000000000000000000000000000000000000001"});
//		const uintOcq5YoD = await CryptoSecureBankTokendOnJHdJ.balanceOf.call(addressWsDLH2v, {from: accounts[0]});
//		const bool5flxw1 = await CryptoSecureBankTokendOnJHdJ.transferFrom.call(addressLaPzkfU, addresseGETOs2, uint79yKSs, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkRx96d4 = await CryptoSecureBankTokendOnJHdJ.approve.call(addressgM4ua8o, uintjmH0OI9, {from: accounts[5]});
//		const addressePXrMje = await CryptoSecureBankTokendOnJHdJ.setOwner2.call(addressXRibCG, {from: accounts[3]});
//		await CryptoSecureBankTokendOnJHdJ.pause.call({from: accounts[0]});
//		const boolmE4PMSf = await CryptoSecureBankTokendOnJHdJ.approve.call(addressoaCIc4f, uintmMh3rvx, {from: accounts[1]});
//		const boolm9ivr83 = await CryptoSecureBankTokendOnJHdJ.transferFrom.call(addressUoA6RFJ, addresspmndZEv, uintnZw0hYo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnv2eFvn, true)
		assert.equal(boolqIsPBBJ, true)
		await expect(CryptoSecureBankTokendOnJHdJ.balanceOf.call(addressHW4wrNf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintD6lLtjk = BigInt("568")
		const addressLVvVIQk = accounts[0]
		const uintYUt2BJ8 = BigInt("279")
		const addressgD34qBy = accounts[0]
		const boolnv2eFvn = await CryptoSecureBankTokendOnJHdJ.redeem.call(uintD6lLtjk, {from: accounts[4]});
		const addresssXJGXH = await CryptoSecureBankTokendOnJHdJ.setOwner2.call(addressLVvVIQk, {from: accounts[4]});
		const boolkRx96d4 = await CryptoSecureBankTokendOnJHdJ.approve.call(addressgD34qBy, uintYUt2BJ8, {from: accounts[5]});

		assert.equal(boolkRx96d4, true)
		assert.equal(boolnv2eFvn, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHY6HaAs = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressHDHZm0Z = accounts[1]
		const uintzAkHRja = BigInt("224")
		const addressQo7ga5K = accounts[0]
		const addressUDczlaZ = accounts[2]
		const addressiqxdp6h = await CryptoSecureBankTokenHY6HaAs.getOwner.call({from: accounts[2]});
//		await CryptoSecureBankTokenHY6HaAs.pause.call({from: accounts[2]});
//		const addressdLQ75CF = await CryptoSecureBankTokenHY6HaAs.transferOwnership.call(addressHDHZm0Z, {from: "0x0000000000000000000000000000000000000001"});
//		const boolK71fAdV = await CryptoSecureBankTokenHY6HaAs.transfer.call(addressQo7ga5K, uintzAkHRja, {from: accounts[5]});
//		const uintlynpTh7 = await CryptoSecureBankTokenHY6HaAs.balanceOf.call(addressUDczlaZ, {from: accounts[2]});

		assert.equal(addressiqxdp6h, 0x6F780c180Cd1B9e872842f84fac1435d439dbD66)
		await expect(CryptoSecureBankTokenHY6HaAs.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenCCCTTL5 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressNAl6F7v = accounts[1]
		const addressUBGpBj = accounts[1]
		const addressiOR0ADd = accounts[0]
		const uintqDNhgv = BigInt("1843")
		const addressy6MCwzn = accounts[4]
		const uintnLYif7y = await CryptoSecureBankTokenCCCTTL5.allowance.call(addressUBGpBj, addressNAl6F7v, {from: accounts[2]});
		const addressCrntb2 = await CryptoSecureBankTokenCCCTTL5.removeBlackList.call(addressiOR0ADd, {from: accounts[3]});
		const boolsJBTpNi = await CryptoSecureBankTokenCCCTTL5.approve.call(addressy6MCwzn, uintqDNhgv, {from: accounts[3]});

		assert.equal(boolsJBTpNi, true)
		assert.equal(uintnLYif7y, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendOnJHdJ = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressejMbrWe = accounts[1]
		const addressJv7hVf = accounts[1]
		const uintXgIfHC = BigInt("641")
		const addressybieha = accounts[6]
		const uintKbSIDYO = BigInt("403")
		const addressBpsWYmA = accounts[1]
		const uintHSBja5 = BigInt("1664")
		const addressjWExRr = accounts[0]
		const addresspC2fl61 = accounts[5]
		const uintTMabv0e = await CryptoSecureBankTokendOnJHdJ.allowance.call(addressJv7hVf, addressejMbrWe, {from: accounts[0]});
		const boolMJfJb7M = await CryptoSecureBankTokendOnJHdJ.transfer.call(addressybieha, uintXgIfHC, {from: accounts[4]});
		const booldi7ncg = await CryptoSecureBankTokendOnJHdJ.transfer.call(addressBpsWYmA, uintKbSIDYO, {from: accounts[4]});
		const boolkRx96d4 = await CryptoSecureBankTokendOnJHdJ.approve.call(addressjWExRr, uintHSBja5, {from: accounts[5]});
		const boolYFeuwal = await CryptoSecureBankTokendOnJHdJ.deprecate.call(addresspC2fl61, {from: accounts[4]});

		assert.equal(boolMJfJb7M, true)
		assert.equal(boolYFeuwal, true)
		assert.equal(booldi7ncg, true)
		assert.equal(boolkRx96d4, true)
		assert.equal(uintTMabv0e, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokena9sNUGD = await CryptoSecureBankToken.new({from: accounts[0]});
		const uinttE4BN5b = BigInt("0")
		const addressVzyWUqv = accounts[6]
		const boolaMcIiuO = await CryptoSecureBankTokena9sNUGD.transfer.call(addressVzyWUqv, uinttE4BN5b, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaMcIiuO, true)
	});
})