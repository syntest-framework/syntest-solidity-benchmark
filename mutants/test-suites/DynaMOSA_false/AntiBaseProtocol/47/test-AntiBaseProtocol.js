const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringdLDia16 = "8xkAZetnIs6mYgexz"
		const stringijLASO1 = "5ahNqJqdcQs4T4WqK"
		const uintd1Sf4ab = BigInt("62")
		const AntiBaseProtocolwHpfzMg = await AntiBaseProtocol.new(stringdLDia16, stringijLASO1, uintd1Sf4ab, {from: "0x0000000000000000000000000000000000000001"});
		const uintwyQmjE9 = BigInt("259")
		const addressLvX6ms2 = accounts[5]
		const uintm85GtiN = BigInt("1435")
		const addressBS0So7Q = accounts[2]
		const uintRH1HAYc = BigInt("801")
		const addressE8Zkzk = accounts[1]
		const addressajXi1kq = await AntiBaseProtocolwHpfzMg._mint.call(addressLvX6ms2, uintwyQmjE9, {from: accounts[0]});
		const boolROekMi0 = await AntiBaseProtocolwHpfzMg.increaseAllowance.call(addressBS0So7Q, uintm85GtiN, {from: accounts[1]});
		const uint8Xm5GqBT = await AntiBaseProtocolwHpfzMg.decimals.call({from: accounts[0]});
		const addressJO8polJ = await AntiBaseProtocolwHpfzMg.burnFrom.call(addressE8Zkzk, uintRH1HAYc, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPU8EhiY = await AntiBaseProtocol.new({from: accounts[4]});
		const addressn1ecaYH = accounts[2]
		const uintQxAibEr = BigInt("837")
		const addressuh1Agso = accounts[4]
		const addressgcOR3CO = accounts[0]
		const addressfOwfknj = accounts[1]
		const uintvgUNq7Q = BigInt("11")
		const addressUcuev7K = accounts[4]
		const addressJfafB6H = accounts[0]
		const uintwIB3VID = BigInt("865")
		const addressjbqxGuM = accounts[4]
		const uint256kao3WmV = await AntiBaseProtocolPU8EhiY.balanceOf.call(addressn1ecaYH, {from: accounts[3]});
//		await AntiBaseProtocolPU8EhiY.onlyOwner.call({from: accounts[1]});
//		const addressreDWvHM = await AntiBaseProtocolPU8EhiY._mint.call(addressuh1Agso, uintQxAibEr, {from: accounts[3]});
//		const uint2561L2Drc = await AntiBaseProtocolPU8EhiY.allowance.call(addressfOwfknj, addressgcOR3CO, {from: accounts[5]});
//		const boolH7zLdzr = await AntiBaseProtocolPU8EhiY.transferFrom.call(addressJfafB6H, addressUcuev7K, uintvgUNq7Q, {from: accounts[5]});
//		const booliP8stYJ = await AntiBaseProtocolPU8EhiY.transfer.call(addressjbqxGuM, uintwIB3VID, {from: accounts[0]});

		assert.equal(uint256kao3WmV, BigInt("0"))
		await expect(AntiBaseProtocolPU8EhiY.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintNEXW6N7 = BigInt("162")
		const addressHByYrKN = accounts[3]
		const uintGjIBfm = BigInt("520")
		const addresslYPD9Kl = accounts[0]
//		const boolhhpXgDb = await AntiBaseProtocolWb9N4zV.decreaseAllowance.call(addressHByYrKN, uintNEXW6N7, {from: accounts[4]});
//		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addresslYPD9Kl, uintGjIBfm, {from: accounts[2]});

		await expect(AntiBaseProtocolWb9N4zV.decreaseAllowance.call(addressHByYrKN, uintNEXW6N7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolzugV5b4 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintHEcFvpb = BigInt("866")
		const uintnevHmtc = BigInt("1300")
		const addressoZmAmue = accounts[1]
		const uintkRI64DO = BigInt("412")
		const addressitxWpt = accounts[5]
		const uintsbVWG5Y = BigInt("1884")
		const addressX7T5Vkb = accounts[5]
//		const uint256NcxNPQv = await AntiBaseProtocolzugV5b4.burn.call(uintHEcFvpb, {from: accounts[5]});
//		const boolo7XkerO = await AntiBaseProtocolzugV5b4.approve.call(addressoZmAmue, uintnevHmtc, {from: accounts[4]});
//		const boolRGl8VBk = await AntiBaseProtocolzugV5b4.approve.call(addressitxWpt, uintkRI64DO, {from: accounts[4]});
//		const booluH2bALT = await AntiBaseProtocolzugV5b4.increaseAllowance.call(addressX7T5Vkb, uintsbVWG5Y, {from: accounts[0]});
//		await AntiBaseProtocolzugV5b4.onlyOwner.call({from: accounts[2]});

		await expect(AntiBaseProtocolzugV5b4.burn.call(uintHEcFvpb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolkUOyVNd = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEYVHibu = accounts[3]
		const uintwdaelmC = BigInt("1858")
		const boolWj2fteh = await AntiBaseProtocolkUOyVNd.isOwner.call({from: accounts[3]});
		const addresss1LzqLN = await AntiBaseProtocolkUOyVNd._transferOwnership.call(addressEYVHibu, {from: accounts[4]});
		await AntiBaseProtocolkUOyVNd.renounceOwnership.call({from: accounts[1]});
		const uint256WDS1AqK = await AntiBaseProtocolkUOyVNd.findRewardFee.call(uintwdaelmC, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintSCPtuEF = BigInt("162")
		const addressIS8XgDE = accounts[3]
		const uintnCS3CQM = BigInt("2019")
		const addressgO0I4X8 = "0x0000000000000000000000000000000000000001"
		const addressveZ9nhX = accounts[2]
		const uintsIIEnbm = BigInt("1866")
		const address3vZTTx = accounts[3]
		const addressqGzB9nB = "0x0000000000000000000000000000000000000001"
		const uintaURwaUD = BigInt("520")
		const addressBCRJr9h = accounts[0]
		const boolfYrMaGh = await AntiBaseProtocolWb9N4zV.isOwner.call({from: accounts[2]});
//		const boolhhpXgDb = await AntiBaseProtocolWb9N4zV.decreaseAllowance.call(addressIS8XgDE, uintSCPtuEF, {from: accounts[4]});
//		const boolgikZ6rd = await AntiBaseProtocolWb9N4zV.transferFrom.call(addressveZ9nhX, addressgO0I4X8, uintnCS3CQM, {from: accounts[4]});
//		const boolgQm5yFB = await AntiBaseProtocolWb9N4zV.transferFrom.call(addressqGzB9nB, address3vZTTx, uintsIIEnbm, {from: accounts[3]});
//		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressBCRJr9h, uintaURwaUD, {from: accounts[2]});

		assert.equal(boolfYrMaGh, false)
		await expect(AntiBaseProtocolWb9N4zV.decreaseAllowance.call(addressIS8XgDE, uintSCPtuEF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoldpJD6F7 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintNsEqyOX = BigInt("1036")
		const addresstW73Ng5 = accounts[2]
		const addressreg0vMm = accounts[3]
		const uintN9n2lFG = BigInt("1286")
		const addressf8a7PyI = accounts[4]
		const addressoVagPIc = accounts[0]
		const uintbLvvi3M = BigInt("160")
		const uintxxqUKzM = BigInt("1962")
		const addressRyfjFt8 = accounts[4]
		const uintZv42bdI = BigInt("986")
//		const boolcUaVlIp = await AntiBaseProtocoldpJD6F7.transferFrom.call(addressreg0vMm, addresstW73Ng5, uintNsEqyOX, {from: accounts[2]});
//		const boolTAY5aOs = await AntiBaseProtocoldpJD6F7.transferFrom.call(addressoVagPIc, addressf8a7PyI, uintN9n2lFG, {from: accounts[2]});
//		await AntiBaseProtocoldpJD6F7.renounceOwnership.call({from: accounts[4]});
//		const uint256Vi6NdWa = await AntiBaseProtocoldpJD6F7.findBurnFee.call(uintbLvvi3M, {from: accounts[1]});
//		const boolhqCZp2n = await AntiBaseProtocoldpJD6F7.approve.call(addressRyfjFt8, uintxxqUKzM, {from: accounts[0]});
//		const uint256DjQF1cP = await AntiBaseProtocoldpJD6F7.findBurnFee.call(uintZv42bdI, {from: accounts[0]});

		await expect(AntiBaseProtocoldpJD6F7.transferFrom.call(addressreg0vMm, addresstW73Ng5, uintNsEqyOX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoldpJD6F7 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintoQ4knHc = BigInt("1267")
		const addresstAoi8gS = accounts[0]
		const uintvMAJQ7u = BigInt("1036")
		const addresspeOFhbs = accounts[2]
		const addressJbG0Joy = accounts[3]
		const uintZT3dUHT = BigInt("1286")
		const addressJoNXLlw = accounts[4]
		const addressENoLDaJ = accounts[0]
		const uintULTfWzb = BigInt("160")
		const uint30E8hS = BigInt("955")
//		const addresse4XWQqE = await AntiBaseProtocoldpJD6F7.burnFrom.call(addresstAoi8gS, uintoQ4knHc, {from: accounts[1]});
//		const boolcUaVlIp = await AntiBaseProtocoldpJD6F7.transferFrom.call(addressJbG0Joy, addresspeOFhbs, uintvMAJQ7u, {from: accounts[2]});
//		const boolTAY5aOs = await AntiBaseProtocoldpJD6F7.transferFrom.call(addressENoLDaJ, addressJoNXLlw, uintZT3dUHT, {from: accounts[2]});
//		await AntiBaseProtocoldpJD6F7.renounceOwnership.call({from: accounts[4]});
//		await AntiBaseProtocoldpJD6F7.requestGas.call({from: accounts[4]});
//		const uint256Vi6NdWa = await AntiBaseProtocoldpJD6F7.findBurnFee.call(uintULTfWzb, {from: accounts[1]});
//		const stringiYeKbyD = await AntiBaseProtocoldpJD6F7.name.call({from: accounts[4]});
//		const uint256DjQF1cP = await AntiBaseProtocoldpJD6F7.findBurnFee.call(uint30E8hS, {from: accounts[0]});

		await expect(AntiBaseProtocoldpJD6F7.burnFrom.call(addresstAoi8gS, uintoQ4knHc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintwxI7mF = BigInt("520")
		const addresssON12T = accounts[0]
		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addresssON12T, uintwxI7mF, {from: accounts[2]});

		assert.equal(bool01WgWm, true)
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintwb6h9UD = BigInt("1940")
		const addresspxlwqq = accounts[0]
		const uintQD98rW3 = BigInt("1263")
		const addresseMlm8n = accounts[1]
		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addresspxlwqq, uintwb6h9UD, {from: accounts[2]});
		const stringGcP2Ecs = await AntiBaseProtocolWb9N4zV.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolz4GTUml = await AntiBaseProtocolWb9N4zV.transfer.call(addresseMlm8n, uintQD98rW3, {from: accounts[5]});

		assert.equal(bool01WgWm, true)
		assert.equal(stringGcP2Ecs, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolWb9N4zV.transfer.call(addresseMlm8n, uintQD98rW3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoldx4YRsf = await AntiBaseProtocol.new({from: accounts[3]});
		const uintbuvQmrj = BigInt("963")
		const address3xbFks = accounts[0]
		const uintPbfQsVm = BigInt("1661")
		const addressxn44fz = accounts[3]
//		await AntiBaseProtocoldx4YRsf.renounceOwnership.call({from: accounts[3]});
//		const boolxQkmY6A = await AntiBaseProtocoldx4YRsf.isOwner.call({from: accounts[1]});
//		const boolwzvECU = await AntiBaseProtocoldx4YRsf.decreaseAllowance.call(address3xbFks, uintbuvQmrj, {from: accounts[5]});
//		await AntiBaseProtocoldx4YRsf.requestGas.call({from: accounts[5]});
//		const addressUX2wUgQ = await AntiBaseProtocoldx4YRsf._mint.call(addressxn44fz, uintPbfQsVm, {from: accounts[2]});

		await expect(AntiBaseProtocoldx4YRsf.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintaS1T82d = BigInt("1476")
		const addressSBDK9I = accounts[0]
		const uint6Nef7j = BigInt("1597")
		const addressWbtaOn3 = accounts[1]
		const string0bdEl9 = await AntiBaseProtocolWb9N4zV.symbol.call({from: accounts[3]});
		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressSBDK9I, uintaS1T82d, {from: accounts[2]});
//		const boolLCntnpK = await AntiBaseProtocolWb9N4zV.decreaseAllowance.call(addressWbtaOn3, uint6Nef7j, {from: accounts[0]});

		assert.equal(bool01WgWm, true)
		assert.equal(string0bdEl9, "ABASE")
		await expect(AntiBaseProtocolWb9N4zV.decreaseAllowance.call(addressWbtaOn3, uint6Nef7j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintmxdpxjj = BigInt("1940")
		const addressM842v0x = accounts[0]
		const uintlVj5dVd = BigInt("801")
		const uintfI4AV35 = BigInt("481")
		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressM842v0x, uintmxdpxjj, {from: accounts[2]});
		const stringNjo7VTL = await AntiBaseProtocolWb9N4zV.symbol.call({from: accounts[0]});
		const uint256VvzY1j = await AntiBaseProtocolWb9N4zV.findRewardFee.call(uintlVj5dVd, {from: accounts[0]});
		const uint256RmRO5Ng = await AntiBaseProtocolWb9N4zV.findRewardFee.call(uintfI4AV35, {from: accounts[3]});

		assert.equal(bool01WgWm, true)
		assert.equal(stringNjo7VTL, "ABASE")
		assert.equal(uint256RmRO5Ng, BigInt("25"))
		assert.equal(uint256VvzY1j, BigInt("45"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintJfJSrUw = BigInt("475")
		const addressgX8iaK = accounts[4]
		const uintgYVNACF = BigInt("1178")
		const addressgTlyusf = "0x0000000000000000000000000000000000000001"
		const addresssHGdvXX = accounts[4]
		const uinthPJPPcs = BigInt("539")
		const addressElTDHhJ = accounts[0]
		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(addressgX8iaK, uintJfJSrUw, {from: accounts[1]});
//		const boolXpISfOv = await AntiBaseProtocolWb9N4zV.transferFrom.call(addresssHGdvXX, addressgTlyusf, uintgYVNACF, {from: "0x0000000000000000000000000000000000000001"});
//		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressElTDHhJ, uinthPJPPcs, {from: accounts[2]});

		assert.equal(boolB2YdfHN, true)
		await expect(AntiBaseProtocolWb9N4zV.transferFrom.call(addresssHGdvXX, addressgTlyusf, uintgYVNACF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintaT8bBJN = BigInt("1940")
		const addressspXrEUx = accounts[0]
		const uinttLIEQ7d = BigInt("1816")
		const addressv8pNTz = accounts[3]
		const uintdDz62tJ = BigInt("1263")
		const addressy5HnC56 = accounts[3]
		const uint54vsro = BigInt("481")
		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressspXrEUx, uintaT8bBJN, {from: accounts[2]});
		const stringvfbMAvl = await AntiBaseProtocolWb9N4zV.symbol.call({from: accounts[2]});
		const boolQYwoDFK = await AntiBaseProtocolWb9N4zV.increaseAllowance.call(addressv8pNTz, uinttLIEQ7d, {from: "0x0000000000000000000000000000000000000001"});
//		const boolz4GTUml = await AntiBaseProtocolWb9N4zV.transfer.call(addressy5HnC56, uintdDz62tJ, {from: accounts[5]});
//		const uint256RmRO5Ng = await AntiBaseProtocolWb9N4zV.findRewardFee.call(uint54vsro, {from: accounts[3]});

		assert.equal(bool01WgWm, true)
		assert.equal(boolQYwoDFK, true)
		assert.equal(stringvfbMAvl, "ABASE")
		await expect(AntiBaseProtocolWb9N4zV.transfer.call(addressy5HnC56, uintdDz62tJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintrToibVK = BigInt("980")
		const uintellXxIu = BigInt("475")
		const addressdrLWxDD = accounts[4]
		const addressPiPrKxR = accounts[2]
		const uintlhQPA5 = BigInt("1178")
		const addresssciBOGI = "0x0000000000000000000000000000000000000001"
		const address8XLji6 = accounts[4]
		const uint256B1in7T = await AntiBaseProtocolWb9N4zV.findRewardFee.call(uintrToibVK, {from: accounts[2]});
		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(addressdrLWxDD, uintellXxIu, {from: accounts[1]});
		const uint8wjW7FdN = await AntiBaseProtocolWb9N4zV.decimals.call({from: accounts[0]});
//		const addresspFFkm3x = await AntiBaseProtocolWb9N4zV._transferOwnership.call(addressPiPrKxR, {from: accounts[0]});
//		const boolXpISfOv = await AntiBaseProtocolWb9N4zV.transferFrom.call(address8XLji6, addresssciBOGI, uintlhQPA5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolB2YdfHN, true)
		assert.equal(uint256B1in7T, BigInt("50"))
		assert.equal(uint8wjW7FdN, BigInt("18"))
		await expect(AntiBaseProtocolWb9N4zV._transferOwnership.call(addressPiPrKxR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintWsp4vI = BigInt("623")
		const addressPwmzSIH = accounts[4]
		const uintbx8bVf = BigInt("1167")
		const uintpwRlqJw = BigInt("520")
		const addresslaPlLR = accounts[1]
//		await AntiBaseProtocolWb9N4zV.renounceOwnership.call({from: accounts[4]});
//		const boolUf5NaQD = await AntiBaseProtocolWb9N4zV.approve.call(addressPwmzSIH, uintWsp4vI, {from: accounts[1]});
//		const uint256jkq0Gz = await AntiBaseProtocolWb9N4zV.burn.call(uintbx8bVf, {from: accounts[1]});
//		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addresslaPlLR, uintpwRlqJw, {from: accounts[2]});

		await expect(AntiBaseProtocolWb9N4zV.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintBUUZy3 = BigInt("475")
		const address02l2x0 = accounts[4]
		const uintNCa1rKu = BigInt("547")
		const addressWz4KRrT = accounts[1]
		const address0odryW = accounts[4]
		const addressoQovkuR = accounts[2]
		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(address02l2x0, uintBUUZy3, {from: accounts[1]});
		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressWz4KRrT, uintNCa1rKu, {from: accounts[2]});
		const uint256lKZXJPP = await AntiBaseProtocolWb9N4zV.allowance.call(addressoQovkuR, address0odryW, {from: accounts[3]});

		assert.equal(bool01WgWm, true)
		assert.equal(boolB2YdfHN, true)
		assert.equal(uint256lKZXJPP, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const addressy2WDtJ = accounts[3]
		const uintmkDQsP = BigInt("475")
		const addressU70SdDl = accounts[5]
		const uint256ZHAwNv6 = await AntiBaseProtocolWb9N4zV.totalSupply.call({from: accounts[2]});
//		const addressBVRIh0e = await AntiBaseProtocolWb9N4zV._transferOwnership.call(addressy2WDtJ, {from: accounts[1]});
//		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(addressU70SdDl, uintmkDQsP, {from: accounts[1]});

		assert.equal(uint256ZHAwNv6, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolWb9N4zV._transferOwnership.call(addressy2WDtJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintP1oKZV = BigInt("475")
		const addressi3TQbNi = accounts[4]
		const uintL51jS1 = BigInt("553")
		const addressLTV0zPO = accounts[0]
		const addressjfGKMHy = accounts[3]
		const stringMWLxRw8 = await AntiBaseProtocolWb9N4zV.symbol.call({from: accounts[0]});
		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(addressi3TQbNi, uintP1oKZV, {from: accounts[1]});
		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressLTV0zPO, uintL51jS1, {from: accounts[2]});
		const addressrwXfF4V = await AntiBaseProtocolWb9N4zV.transferOwnership.call(addressjfGKMHy, {from: accounts[1]});

		assert.equal(bool01WgWm, true)
		assert.equal(boolB2YdfHN, true)
		assert.equal(stringMWLxRw8, "ABASE")
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintwXCuCzL = BigInt("475")
		const addressN8rXYPi = accounts[4]
		const uintGgDa2rr = BigInt("1178")
		const addresshxzzds0 = "0x0000000000000000000000000000000000000001"
		const addressbd8Pfgn = accounts[4]
		const uintUAzHENn = BigInt("892")
		const address1m0Bj6 = accounts[2]
		const uintJATPSL = BigInt("539")
		const addressDle3oj = accounts[3]
		const uintjMfqa5f = BigInt("782")
		const addressqn7FuA7 = accounts[2]
		const address21qoP1 = "0x0000000000000000000000000000000000000001"
		const addressK1Kj4w = await AntiBaseProtocolWb9N4zV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(addressN8rXYPi, uintwXCuCzL, {from: accounts[1]});
//		await AntiBaseProtocolWb9N4zV.onlyOwner.call({from: accounts[5]});
//		const boolXpISfOv = await AntiBaseProtocolWb9N4zV.transferFrom.call(addressbd8Pfgn, addresshxzzds0, uintGgDa2rr, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjNYMG7D = await AntiBaseProtocolWb9N4zV._mint.call(address1m0Bj6, uintUAzHENn, {from: accounts[0]});
//		const boolgE1qWI4 = await AntiBaseProtocolWb9N4zV.isOwner.call({from: accounts[1]});
//		const bool01WgWm = await AntiBaseProtocolWb9N4zV.approve.call(addressDle3oj, uintJATPSL, {from: accounts[2]});
//		const booll0ra26A = await AntiBaseProtocolWb9N4zV.transferFrom.call(address21qoP1, addressqn7FuA7, uintjMfqa5f, {from: accounts[1]});

		assert.equal(addressK1Kj4w, 0xd1b8E36D64599D72677Fd865afc7B9abaaE1269C)
		assert.equal(boolB2YdfHN, true)
		await expect(AntiBaseProtocolWb9N4zV.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintD5KaCdq = BigInt("475")
		const address5CWVkX = accounts[5]
		const uint9tzSp5 = BigInt("1863")
		const addresszJcly9J = "0x0000000000000000000000000000000000000000"
		const uint0UCzQN = BigInt("131")
		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(address5CWVkX, uintD5KaCdq, {from: accounts[1]});
//		const boolqpTf2H = await AntiBaseProtocolWb9N4zV.transfer.call(addresszJcly9J, uint9tzSp5, {from: accounts[1]});
//		const uint256OZoSVXJ = await AntiBaseProtocolWb9N4zV.findBurnFee.call(uint0UCzQN, {from: accounts[5]});
//		const addressjsIcRw8 = await AntiBaseProtocolWb9N4zV.owner.call({from: accounts[1]});

		assert.equal(boolB2YdfHN, true)
		await expect(AntiBaseProtocolWb9N4zV.transfer.call(addresszJcly9J, uint9tzSp5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintIGxEON = BigInt("475")
		const addressywsdk5Z = accounts[6]
		const uintvH5WpIW = BigInt("1863")
		const addressgunBxbo = "0x0000000000000000000000000000000000000001"
		const uintxSDKPaT = BigInt("153")
		const addressr7aHr61 = accounts[3]
		const addressZm2CwV = accounts[1]
		const uintZd57V7l = BigInt("1607")
		const uintty0OWgj = BigInt("118")
		const boolB2YdfHN = await AntiBaseProtocolWb9N4zV.transfer.call(addressywsdk5Z, uintIGxEON, {from: accounts[1]});
		const boolqpTf2H = await AntiBaseProtocolWb9N4zV.transfer.call(addressgunBxbo, uintvH5WpIW, {from: accounts[1]});
//		const boolPURMNNA = await AntiBaseProtocolWb9N4zV.transferFrom.call(addressZm2CwV, addressr7aHr61, uintxSDKPaT, {from: accounts[1]});
//		const uint2564Gx1wx = await AntiBaseProtocolWb9N4zV.findBurnFee.call(uintZd57V7l, {from: accounts[2]});
//		const uint256OZoSVXJ = await AntiBaseProtocolWb9N4zV.findBurnFee.call(uintty0OWgj, {from: accounts[5]});

		assert.equal(boolB2YdfHN, true)
		assert.equal(boolqpTf2H, true)
		await expect(AntiBaseProtocolWb9N4zV.transferFrom.call(addressZm2CwV, addressr7aHr61, uintxSDKPaT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWb9N4zV = await AntiBaseProtocol.new({from: accounts[1]});
		const uintcewqaG4 = BigInt("1918")
		const addressYgQ3s2 = accounts[1]
		const uintziMWps = BigInt("85")
		const addressOJXVu6f = accounts[2]
//		const addressGK7LcJP = await AntiBaseProtocolWb9N4zV.burnFrom.call(addressYgQ3s2, uintcewqaG4, {from: accounts[4]});
//		const boolCEigbei = await AntiBaseProtocolWb9N4zV.transfer.call(addressOJXVu6f, uintziMWps, {from: accounts[1]});
//		await AntiBaseProtocolWb9N4zV.onlyOwner.call({from: accounts[2]});

		await expect(AntiBaseProtocolWb9N4zV.burnFrom.call(addressYgQ3s2, uintcewqaG4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})