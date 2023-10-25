const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAEayJPkZ = await TPA.new({from: accounts[2]});
		const uintvGJGzVa = BigInt("1723")
		const addressLQ1GWHd = accounts[1]
		const uintoluAJEe = BigInt("477")
		const addresszCRwG2w = accounts[4]
		const addressaTRozMI = accounts[2]
		const uintByihbuL = BigInt("1260")
		const addressp6toF4B = accounts[2]
		const addressgWlK5OV = accounts[1]
		await TPAEayJPkZ.unpause.call({from: accounts[2]});
		const boolD4gzPas = await TPAEayJPkZ.transfer.call(addressLQ1GWHd, uintvGJGzVa, {from: accounts[0]});
		const boolgg6ki1d = await TPAEayJPkZ.transfer.call(addresszCRwG2w, uintoluAJEe, {from: accounts[0]});
		const uint256U1tryyA = await TPAEayJPkZ.balanceOf.call(addressaTRozMI, {from: "0x0000000000000000000000000000000000000001"});
		const boolmnNCGE = await TPAEayJPkZ.transferFrom.call(addressgWlK5OV, addressp6toF4B, uintByihbuL, {from: accounts[4]});

		await expect(TPAEayJPkZ.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringxrOuCA3 = "IYC2BHbWOraXDeyL1wY8WE8521MaoSk0ARms1DKeCzXo3jlDuJyYysGoMbTdekcoxMVlS7wIK"
		const stringAsIIfU3 = "OF41p2AItKlZKXhOew0LIieYbTAD9YAp6W9YMR6ON9XZ7ZBQrz7SRDrwJdIvyLL5yMH2"
		const uintdGmEMZb = BigInt("5")
		const TPAfJSQVIJ = await TPA.new(stringxrOuCA3, stringAsIIfU3, uintdGmEMZb, {from: accounts[1]});
		const uintMbJQ85F = BigInt("1994")
		const addresstGut6zV = "0x0000000000000000000000000000000000000001"
		const addressT8vc4Y8 = accounts[5]
		const addressgIBehZ = accounts[2]
		const addressKSkABV = await TPAfJSQVIJ.burnFrom.call(addresstGut6zV, uintMbJQ85F, {from: accounts[3]});
		const addressckNTSLB = await TPAfJSQVIJ.upgradeTo.call(addressT8vc4Y8, {from: accounts[3]});
		const uint256zhAaaq = await TPAfJSQVIJ.balanceOf.call(addressgIBehZ, {from: accounts[5]});
		const boolPy3r4HQ = await TPAfJSQVIJ.paused.call({from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressWGj78I = accounts[3]
		const uint8BDW9syv = await TPAgNosiQ.decimals.call({from: accounts[5]});
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressWGj78I, {from: accounts[2]});

		assert.equal(uint256zr8eAWu, BigInt("0"))
		assert.equal(uint8BDW9syv, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAatwMZ9l = await TPA.new({from: accounts[2]});
		const uintUXZyZZ = BigInt("578")
		const addressVQ5d9ju = accounts[5]
		const uints8Id6h = BigInt("1103")
		const addressViGj8d7 = accounts[4]
		const boolpJd04QV = await TPAatwMZ9l.transfer.call(addressVQ5d9ju, uintUXZyZZ, {from: accounts[4]});
		const boolDiChEzH = await TPAatwMZ9l.transfer.call(addressViGj8d7, uints8Id6h, {from: accounts[1]});
		const uint8OHyQan = await TPAatwMZ9l.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAatwMZ9l.transfer.call(addressVQ5d9ju, uintUXZyZZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAatwMZ9l = await TPA.new({from: accounts[2]});
		const uintWQkFAWe = BigInt("1252")
		const addressgblVvCt = "0x0000000000000000000000000000000000000001"
		const addressBmnzOpj = accounts[0]
		const uintQNoa23P = BigInt("578")
		const addressi9WZLak = accounts[5]
		const addressW7Eqr5i = accounts[2]
		const uintg7CvpCc = BigInt("1099")
		const addressQIbr730 = accounts[4]
		const boolN3Py9lx = await TPAatwMZ9l.transferFrom.call(addressBmnzOpj, addressgblVvCt, uintWQkFAWe, {from: accounts[4]});
		const boolpJd04QV = await TPAatwMZ9l.transfer.call(addressi9WZLak, uintQNoa23P, {from: accounts[4]});
		const booltpveMWB = await TPAatwMZ9l.isOwner.call(addressW7Eqr5i, {from: accounts[1]});
		const boolDiChEzH = await TPAatwMZ9l.transfer.call(addressQIbr730, uintg7CvpCc, {from: accounts[1]});
		const uint8OHyQan = await TPAatwMZ9l.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAatwMZ9l.transferFrom.call(addressBmnzOpj, addressgblVvCt, uintWQkFAWe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const uint8Y3tBY = BigInt("698")
		const addressBTvxOH = accounts[1]
		const uintyPvS8ct = BigInt("464")
		const address9xAsdM = accounts[5]
		const addresshZMXOgb = accounts[3]
		const boolYGjAKLi = await TPAgNosiQ.decreaseAllowance.call(addressBTvxOH, uint8Y3tBY, {from: accounts[3]});
		const uint8BDW9syv = await TPAgNosiQ.decimals.call({from: accounts[5]});
		const stringsUtfKp9 = await TPAgNosiQ.symbol.call({from: accounts[1]});
		const boola8wwya6 = await TPAgNosiQ.transferFrom.call(addresshZMXOgb, address9xAsdM, uintyPvS8ct, {from: accounts[5]});

		await expect(TPAgNosiQ.decreaseAllowance.call(addressBTvxOH, uint8Y3tBY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAatwMZ9l = await TPA.new({from: accounts[2]});
		const uintxT3XTDy = BigInt("895")
		const addressmUjlshL = accounts[1]
		const uintEKXTmry = BigInt("578")
		const addressLuLe4vN = accounts[5]
		const uintpMS1QkI = BigInt("319")
		const addresseRTFBzY = accounts[4]
		const booluDcuWZA = await TPAatwMZ9l.transfer.call(addressmUjlshL, uintxT3XTDy, {from: accounts[2]});
		const boolpJd04QV = await TPAatwMZ9l.transfer.call(addressLuLe4vN, uintEKXTmry, {from: accounts[4]});
		const boolDiChEzH = await TPAatwMZ9l.transfer.call(addresseRTFBzY, uintpMS1QkI, {from: accounts[1]});
		const uint8OHyQan = await TPAatwMZ9l.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booluDcuWZA, true)
		await expect(TPAatwMZ9l.transfer.call(addressLuLe4vN, uintEKXTmry, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressUAIupb = accounts[5]
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressUAIupb, {from: accounts[2]});
		const stringR5QiDW1 = await TPAgNosiQ.symbol.call({from: accounts[0]});

		assert.equal(stringR5QiDW1, "TPA")
		assert.equal(uint256zr8eAWu, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressofotcmy = accounts[4]
		const uintBVSvCk9 = BigInt("1476")
		const addressYyd6PIr = accounts[2]
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressofotcmy, {from: accounts[2]});
		const boolndxW1yg = await TPAgNosiQ.increaseAllowance.call(addressYyd6PIr, uintBVSvCk9, {from: accounts[5]});

		assert.equal(boolndxW1yg, true)
		assert.equal(uint256zr8eAWu, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const uintoEdekY4 = BigInt("984")
		const addresstMglXQ = accounts[3]
		const addressNaccvKl = accounts[5]
		const addressw0kqS6 = accounts[0]
		const boolrNFZzSx = await TPAgNosiQ.approve.call(addresstMglXQ, uintoEdekY4, {from: accounts[0]});
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressNaccvKl, {from: accounts[2]});
		const boolB6h6Eyo = await TPAgNosiQ.isOwner.call(addressw0kqS6, {from: accounts[2]});

		assert.equal(boolB6h6Eyo, true)
		assert.equal(boolrNFZzSx, true)
		assert.equal(uint256zr8eAWu, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const uintQ4xqtbl = BigInt("702")
		const addressfllm1CI = accounts[2]
		const booll86rT7l = await TPAgNosiQ.approve.call(addressfllm1CI, uintQ4xqtbl, {from: accounts[4]});
		const uint8BDW9syv = await TPAgNosiQ.decimals.call({from: accounts[5]});
		await TPAgNosiQ.renounceAdmin.call({from: accounts[1]});

		assert.equal(booll86rT7l, true)
		assert.equal(uint8BDW9syv, BigInt("18"))
		await expect(TPAgNosiQ.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressRaAUfY = accounts[5]
		const addresso31jYco = accounts[1]
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressRaAUfY, {from: accounts[2]});
		const uint256vUrYqEy = await TPAgNosiQ.totalSupply.call({from: accounts[3]});
		const bool5jqVam = await TPAgNosiQ.freezeAccount.call(addresso31jYco, {from: accounts[0]});

		assert.equal(bool5jqVam, true)
		assert.equal(uint256vUrYqEy, BigInt("10000000000000000000000000000"))
		assert.equal(uint256zr8eAWu, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAatwMZ9l = await TPA.new({from: accounts[2]});
		const uintC31W5aM = BigInt("578")
		const addressLkyjj2 = accounts[5]
		const addressMIPpsVa = accounts[1]
		const uintG6i6W4U = BigInt("1103")
		const addressoTEDEb = accounts[4]
		await TPAatwMZ9l.onlyAdmin.call({from: accounts[3]});
		const boolpJd04QV = await TPAatwMZ9l.transfer.call(addressLkyjj2, uintC31W5aM, {from: accounts[4]});
		const uint256vt5fzcZ = await TPAatwMZ9l.balanceOf.call(addressMIPpsVa, {from: accounts[0]});
		const boolDiChEzH = await TPAatwMZ9l.transfer.call(addressoTEDEb, uintG6i6W4U, {from: accounts[1]});

		await expect(TPAatwMZ9l.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const uintztYYoBt = BigInt("213")
		const addressB6eBKgM = accounts[1]
		const addressRGf7VMV = accounts[5]
		const boolDsve5vu = await TPAgNosiQ.approve.call(addressB6eBKgM, uintztYYoBt, {from: accounts[1]});
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressRGf7VMV, {from: accounts[2]});
		await TPAgNosiQ.unpause.call({from: accounts[5]});

		assert.equal(boolDsve5vu, true)
		assert.equal(uint256zr8eAWu, BigInt("0"))
		await expect(TPAgNosiQ.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addresskoYEGZv = accounts[5]
		const uintGS3mvKJ = BigInt("376")
		const addressb8L4hN4 = accounts[1]
		const uintLGE0CCD = BigInt("658")
		const addressdugfIi4 = accounts[1]
		const addressqKu7ANj = accounts[1]
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addresskoYEGZv, {from: accounts[2]});
		const boolYCZbBrX = await TPAgNosiQ.increaseAllowance.call(addressb8L4hN4, uintGS3mvKJ, {from: accounts[0]});
		const addresskXOlpXM = await TPAgNosiQ.burnFrom.call(addressdugfIi4, uintLGE0CCD, {from: accounts[1]});
		const boolBrHVTkd = await TPAgNosiQ.unfreezeAccount.call(addressqKu7ANj, {from: accounts[4]});

		assert.equal(boolYCZbBrX, true)
		assert.equal(uint256zr8eAWu, BigInt("0"))
		await expect(TPAgNosiQ.burnFrom.call(addressdugfIi4, uintLGE0CCD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const uintLF4Me0U = BigInt("1818")
		const uint8BDW9syv = await TPAgNosiQ.decimals.call({from: accounts[5]});
		const uint256y2akmgK = await TPAgNosiQ.burn.call(uintLF4Me0U, {from: accounts[3]});

		assert.equal(uint8BDW9syv, BigInt("18"))
		await expect(TPAgNosiQ.burn.call(uintLF4Me0U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAatwMZ9l = await TPA.new({from: accounts[2]});
		const addressfJeLLH7 = accounts[3]
		const uint6qbzz3 = BigInt("1103")
		const addressDdYWSiB = accounts[5]
		const addressBhaFmR = await TPAatwMZ9l.addAdmin.call(addressfJeLLH7, {from: accounts[2]});
		const boolDiChEzH = await TPAatwMZ9l.transfer.call(addressDdYWSiB, uint6qbzz3, {from: accounts[1]});

		await expect(TPAatwMZ9l.transfer.call(addressDdYWSiB, uint6qbzz3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressYEXv3DP = accounts[2]
		const addressV5OebE0 = accounts[1]
		const uintEGFos8W = BigInt("1218")
		const addressXuLlv6Y = accounts[0]
		const addressJ3kCye = accounts[5]
		const uint256td45tw = await TPAgNosiQ.allowance.call(addressV5OebE0, addressYEXv3DP, {from: accounts[0]});
		const boolTfBZNKE = await TPAgNosiQ.transfer.call(addressXuLlv6Y, uintEGFos8W, {from: accounts[0]});
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressJ3kCye, {from: accounts[2]});

		assert.equal(boolTfBZNKE, true)
		assert.equal(uint256td45tw, BigInt("0"))
		assert.equal(uint256zr8eAWu, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAatwMZ9l = await TPA.new({from: accounts[2]});
		const uintKRWIVGL = BigInt("1103")
		const addressQNA7pNC = accounts[4]
		const stringuK9e9yt = await TPAatwMZ9l.name.call({from: accounts[1]});
		const boolDiChEzH = await TPAatwMZ9l.transfer.call(addressQNA7pNC, uintKRWIVGL, {from: accounts[1]});

		assert.equal(stringuK9e9yt, "TPA")
		await expect(TPAatwMZ9l.transfer.call(addressQNA7pNC, uintKRWIVGL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressHqqdQZ3 = accounts[0]
		const addressmITSxu = accounts[5]
		const booliNSYlb = await TPAgNosiQ.unfreezeAccount.call(addressHqqdQZ3, {from: accounts[0]});
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressmITSxu, {from: accounts[2]});

		await expect(TPAgNosiQ.unfreezeAccount.call(addressHqqdQZ3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressTWuZ33V = accounts[0]
		const uint8BDW9syv = await TPAgNosiQ.decimals.call({from: accounts[5]});
		const addressoGgNipR = await TPAgNosiQ.transferOwnership.call(addressTWuZ33V, {from: accounts[0]});

		assert.equal(uint8BDW9syv, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const uint89oF12 = BigInt("139")
		const addressZxRD0yN = accounts[1]
		const uintSwPKSaO = BigInt("1669")
		const addressSt73Fak = accounts[3]
		const addressuBwiyB = accounts[2]
		const boolTahusQ2 = await TPAgNosiQ.unlock.call(addressZxRD0yN, uint89oF12, {from: accounts[0]});
		const booldh8zwTa = await TPAgNosiQ.transferFrom.call(addressuBwiyB, addressSt73Fak, uintSwPKSaO, {from: accounts[4]});
		await TPAgNosiQ.onlyAdmin.call({from: accounts[4]});

		await expect(TPAgNosiQ.unlock.call(addressZxRD0yN, uint89oF12, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressDAvJHBq = accounts[2]
		const addresstAL5GY3 = accounts[1]
		const uintVXJ4aK = BigInt("1021")
		const addressllulIxE = accounts[3]
		const addressJesWWYx = accounts[2]
		const uint256v5vZAHl = await TPAgNosiQ.allowance.call(addresstAL5GY3, addressDAvJHBq, {from: accounts[3]});
		await TPAgNosiQ.pause.call({from: accounts[0]});
		const booldh8zwTa = await TPAgNosiQ.transferFrom.call(addressJesWWYx, addressllulIxE, uintVXJ4aK, {from: accounts[4]});

		assert.equal(uint256v5vZAHl, BigInt("0"))
		await expect(TPAgNosiQ.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressK6GTw6C = accounts[5]
		const uinttqW6Ry = BigInt("1587")
		const uinter8mkcN = BigInt("1868")
		const addresslxEmOmb = accounts[2]
		const uintLvTkkI5 = BigInt("1813")
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressK6GTw6C, {from: accounts[2]});
		const bool3oP1aL = await TPAgNosiQ.transferWithLock.call(addresslxEmOmb, uinter8mkcN, uinttqW6Ry, {from: accounts[0]});
		const uint256OVwCue = await TPAgNosiQ.burn.call(uintLvTkkI5, {from: accounts[0]});

		assert.equal(bool3oP1aL, true)
		assert.equal(uint256zr8eAWu, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAZ4PSNzV = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintb7aLmJY = BigInt("1420")
		const addressggGyowT = accounts[3]
		const uintUPfJzwI = BigInt("1967")
		const addressiGvfroe = accounts[5]
		const addressxoLpx5P = accounts[1]
		const uintW09MlEK = BigInt("1144")
		const addresszbJKIYI = accounts[5]
		const addressEjDkvAR = accounts[3]
		const uintJY8zksN = BigInt("656")
		const addressFLCsQrm = accounts[3]
		const boolP53KUT = await TPAZ4PSNzV.decreaseAllowance.call(addressggGyowT, uintb7aLmJY, {from: accounts[1]});
		const boolD0HRopl = await TPAZ4PSNzV.transferFrom.call(addressxoLpx5P, addressiGvfroe, uintUPfJzwI, {from: accounts[4]});
		const stringxn2XHa = await TPAZ4PSNzV.name.call({from: accounts[3]});
		const boolWL22WA5 = await TPAZ4PSNzV.transferFrom.call(addressEjDkvAR, addresszbJKIYI, uintW09MlEK, {from: accounts[0]});
		const boolPYJjvzI = await TPAZ4PSNzV.approve.call(addressFLCsQrm, uintJY8zksN, {from: accounts[3]});
		await TPAZ4PSNzV.pause.call({from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPAWve44qS = await TPA.new({from: accounts[5]});
		const uintONlbGaK = BigInt("1870")
		const addressT5Ithdm = accounts[4]
		const uintakZzW1U = BigInt("999")
		const addresspCDfPHX = accounts[5]
		const booleJ9AEe6 = await TPAWve44qS.paused.call({from: accounts[3]});
		const stringZl3NDCt = await TPAWve44qS.symbol.call({from: accounts[0]});
		const booly9ENmNi = await TPAWve44qS.approve.call(addressT5Ithdm, uintONlbGaK, {from: "0x0000000000000000000000000000000000000001"});
		const boolyxcjGmo = await TPAWve44qS.decreaseAllowance.call(addresspCDfPHX, uintakZzW1U, {from: accounts[3]});

		assert.equal(booleJ9AEe6, false)
		assert.equal(booly9ENmNi, true)
		assert.equal(stringZl3NDCt, "TPA")
		await expect(TPAWve44qS.decreaseAllowance.call(addresspCDfPHX, uintakZzW1U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAgNosiQ = await TPA.new({from: accounts[0]});
		const addressyqpcMJZ = accounts[5]
		const addressONpth7V = accounts[2]
		const addressOkSxgES = accounts[2]
		const uint256zr8eAWu = await TPAgNosiQ.balanceOf.call(addressyqpcMJZ, {from: accounts[2]});
		const uint256XOv35S = await TPAgNosiQ.balanceOf.call(addressONpth7V, {from: accounts[0]});
		const addressF0ybc7r = await TPAgNosiQ.removeAdmin.call(addressOkSxgES, {from: accounts[0]});

		assert.equal(uint256XOv35S, BigInt("0"))
		assert.equal(uint256zr8eAWu, BigInt("0"))
		await expect(TPAgNosiQ.removeAdmin.call(addressOkSxgES, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})