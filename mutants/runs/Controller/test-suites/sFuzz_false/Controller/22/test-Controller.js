const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressKQig18m = "0x0000000000000000000000000000000000000001"
		const Controllerqiht1C = await Controller.new(addressKQig18m, {from: accounts[0]});
		const addressX24mp8H = "0x0000000000000000000000000000000000000001"
		const addressNAs1y0x = "0x0000000000000000000000000000000000000001"
		const addressjZ8ZO1O = "0x0000000000000000000000000000000000000001"
		const uintxEALH07 = BigInt("1660")
		const addressGbIW0Wj = accounts[1]
		const addresskkUmkk = accounts[0]
		const addressKPT8FuK = accounts[3]
		const addressPBlY7nW = await Controllerqiht1C.setConverter.call(addressjZ8ZO1O, addressNAs1y0x, addressX24mp8H, {from: accounts[3]});
		const addressVAt24l0 = await Controllerqiht1C.earn.call(addressGbIW0Wj, uintxEALH07, {from: accounts[2]});
		const addressj6NUkT0 = await Controllerqiht1C.setVault.call(addressKPT8FuK, addresskkUmkk, {from: accounts[2]});

		await expect(Controllerqiht1C.setConverter.call(addressjZ8ZO1O, addressNAs1y0x, addressX24mp8H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnCKCLRW = accounts[0]
		const ControllerbdYUL04 = await Controller.new(addressnCKCLRW, {from: accounts[1]});
		const uintRpFDDoH = BigInt("198")
		const addresszo32wyl = accounts[0]
		const uintmd0ViTm = BigInt("1964")
		const addressU06VNJe = accounts[2]
		const addressydLlVf = accounts[4]
		const addressaTqXks = accounts[4]
		const uintPGmHldc = BigInt("1622")
		const uintp7dgkce = await ControllerbdYUL04.setSplit.call(uintRpFDDoH, {from: accounts[3]});
		const addressMdVZQ6W = await ControllerbdYUL04.setStrategist.call(addresszo32wyl, {from: accounts[4]});
		const uintD60XMX = await ControllerbdYUL04.getExpectedReturn.call(addressydLlVf, addressU06VNJe, uintmd0ViTm, {from: accounts[0]});
		const addressjGdKG1k = await ControllerbdYUL04.setRewards.call(addressaTqXks, {from: accounts[2]});
		const uintiNdRKLF = await ControllerbdYUL04.setSplit.call(uintPGmHldc, {from: accounts[2]});

		await expect(ControllerbdYUL04.setSplit.call(uintRpFDDoH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHCR6jlY = accounts[2]
		const ControllerxeEZa8R = await Controller.new(addressHCR6jlY, {from: accounts[1]});
		const uintviKBW5k = BigInt("1165")
		const addressF9LXwi = accounts[1]
		const addressbRXqmAZ = accounts[5]
		const addresszMwNkNm = "0x0000000000000000000000000000000000000001"
		const uintVp9gqZ = BigInt("2032")
		const addressfXVwMwV = accounts[3]
		const addresssMyliOs = accounts[4]
		const addresssqJjA8 = accounts[3]
		const addressFuZtNZD = accounts[3]
		const addresswjC1rot = accounts[2]
		const address0sHkMZ = await ControllerxeEZa8R.earn.call(addressF9LXwi, uintviKBW5k, {from: accounts[5]});
		const addressA1kkKMm = await ControllerxeEZa8R.inCaseStrategyTokenGetStuck.call(addresszMwNkNm, addressbRXqmAZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressE5Ne7yd = await ControllerxeEZa8R.withdraw.call(addressfXVwMwV, uintVp9gqZ, {from: accounts[3]});
		const addressTEOAc7B = await ControllerxeEZa8R.setRewards.call(addresssMyliOs, {from: accounts[4]});
		const addressbSSvvvr = await ControllerxeEZa8R.withdrawAll.call(addresssqJjA8, {from: accounts[1]});
		const addressYBT0Hc = await ControllerxeEZa8R.approveStrategy.call(addresswjC1rot, addressFuZtNZD, {from: accounts[2]});

		await expect(ControllerxeEZa8R.earn.call(addressF9LXwi, uintviKBW5k, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXIrrGEJ = accounts[5]
		const ControllerIeEUZQe = await Controller.new(addressXIrrGEJ, {from: accounts[3]});
		const addresswH2uCSC = accounts[0]
		const uintxllAM9u = BigInt("230")
		const addressmlsnDXc = accounts[3]
		const addressVdft6Cl = accounts[0]
		const addressEiXf7u7 = accounts[3]
		const addressQKMZfpr = accounts[1]
		const uintCjyIJpz = BigInt("30")
		const addressibioteZ = accounts[2]
		const addressBZGnB6o = accounts[3]
		const addressc5mjbJd = accounts[2]
		const addressAOqKVeZ = accounts[2]
		const addresspdNDblm = accounts[2]
		const address30ZIR2 = await ControllerIeEUZQe.setStrategist.call(addresswH2uCSC, {from: accounts[1]});
		const addressLNRWfeZ = await ControllerIeEUZQe.yearn.call(addressVdft6Cl, addressmlsnDXc, uintxllAM9u, {from: accounts[5]});
		const addresseyX1H5Q = await ControllerIeEUZQe.setStrategy.call(addressQKMZfpr, addressEiXf7u7, {from: accounts[0]});
		const addressfnigwBv = await ControllerIeEUZQe.yearn.call(addressBZGnB6o, addressibioteZ, uintCjyIJpz, {from: accounts[3]});
		const addressRyW2m71 = await ControllerIeEUZQe.withdrawAll.call(addressc5mjbJd, {from: "0x0000000000000000000000000000000000000001"});
		const addresskNtxg2y = await ControllerIeEUZQe.setVault.call(addresspdNDblm, addressAOqKVeZ, {from: accounts[1]});

		await expect(ControllerIeEUZQe.setStrategist.call(addresswH2uCSC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresst5k0Z1I = accounts[3]
		const ControllerPn8Ze04 = await Controller.new(addresst5k0Z1I, {from: accounts[4]});
		const addressqQEAbLx = accounts[4]
		const addressgIp9fQh = "0x0000000000000000000000000000000000000001"
		const addressaWynYdz = accounts[0]
		const uintTINSIMs = BigInt("1551")
		const addresslnjmsOu = accounts[1]
		const addressmirAr5m = accounts[5]
		const addressfQ7C6gx = await ControllerPn8Ze04.setStrategist.call(addressqQEAbLx, {from: accounts[4]});
		const addressDcI2eL5 = await ControllerPn8Ze04.setGovernance.call(addressgIp9fQh, {from: "0x0000000000000000000000000000000000000001"});
		const uintHxtBJec = await ControllerPn8Ze04.balanceOf.call(addressaWynYdz, {from: accounts[1]});
		const addressHFxGpRi = await ControllerPn8Ze04.earn.call(addresslnjmsOu, uintTINSIMs, {from: accounts[4]});
		const addressWxuI9kO = await ControllerPn8Ze04.setStrategist.call(addressmirAr5m, {from: accounts[4]});

		await expect(ControllerPn8Ze04.setGovernance.call(addressgIp9fQh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspTNABUZ = accounts[0]
		const Controllerv0JVSR3 = await Controller.new(addresspTNABUZ, {from: accounts[0]});
		const uintsysRBOR = BigInt("1010")
		const address8slWAk = accounts[2]
		const addressDjjCOh1 = accounts[5]
		const addressoaXcwyt = accounts[1]
		const uintVG2XBDO = BigInt("1499")
		const addressrzHy5j = accounts[1]
		const addressHwpWBVC = accounts[2]
		const addresstsy6lV = accounts[4]
		const uintVePya8e = BigInt("1092")
		const addressbHKGU8D = accounts[2]
		const addresscvpGQMF = await Controllerv0JVSR3.withdraw.call(address8slWAk, uintsysRBOR, {from: accounts[3]});
		const addressi7YB3yy = await Controllerv0JVSR3.setVault.call(addressoaXcwyt, addressDjjCOh1, {from: accounts[0]});
		const uintWsU58BH = await Controllerv0JVSR3.getExpectedReturn.call(addressHwpWBVC, addressrzHy5j, uintVG2XBDO, {from: accounts[5]});
		const uintN2qu3OY = await Controllerv0JVSR3.balanceOf.call(addresstsy6lV, {from: accounts[3]});
		const addressnfx2J6H = await Controllerv0JVSR3.earn.call(addressbHKGU8D, uintVePya8e, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerv0JVSR3.withdraw.call(address8slWAk, uintsysRBOR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRLjCnFS = accounts[1]
		const Controllerpd7mVi0 = await Controller.new(addressRLjCnFS, {from: "0x0000000000000000000000000000000000000001"});
		const uintv5a0CaU = BigInt("543")
		const addressxNn7rLP = accounts[0]
		const addressADFQqIX = accounts[2]
		const addressBCfx8QT = accounts[0]
		const address1cQfMI = accounts[2]
		const addressTtmc9Ld = accounts[3]
		const addressJsALlGq = accounts[0]
		const uintaMfUz1k = await Controllerpd7mVi0.getExpectedReturn.call(addressADFQqIX, addressxNn7rLP, uintv5a0CaU, {from: accounts[1]});
		const addressYirkz6Y = await Controllerpd7mVi0.setConverter.call(addressTtmc9Ld, address1cQfMI, addressBCfx8QT, {from: accounts[0]});
		const addressZI5EQgN = await Controllerpd7mVi0.withdrawAll.call(addressJsALlGq, {from: accounts[4]});
	});

	it('test for Controller', async () => {
		const addressC9BEqy = "0x0000000000000000000000000000000000000001"
		const Controllerqiht1C = await Controller.new(addressC9BEqy, {from: accounts[0]});
		const addressMEZRmZ = accounts[4]
		const addresstTuIR9g = accounts[5]
		const addressLIorSeo = "0x0000000000000000000000000000000000000001"
		const addressTR3qHRE = "0x0000000000000000000000000000000000000001"
		const addressUbcUabS = "0x0000000000000000000000000000000000000001"
		const uinttQ4hVC = BigInt("1660")
		const addressrdWDhaj = accounts[1]
		const uintK87SNiy = BigInt("167")
		const addressZfAGnkw = accounts[4]
		const addressiNHyWH = accounts[1]
		const addressGQp6Wfi = accounts[0]
		const addressNOdmp7 = accounts[3]
		const addresslehSXZl = await Controllerqiht1C.setVault.call(addresstTuIR9g, addressMEZRmZ, {from: accounts[1]});
		const addressPBlY7nW = await Controllerqiht1C.setConverter.call(addressUbcUabS, addressTR3qHRE, addressLIorSeo, {from: accounts[3]});
		const addressVAt24l0 = await Controllerqiht1C.earn.call(addressrdWDhaj, uinttQ4hVC, {from: accounts[2]});
		const uintP0if1L = await Controllerqiht1C.getExpectedReturn.call(addressiNHyWH, addressZfAGnkw, uintK87SNiy, {from: accounts[2]});
		const addressj6NUkT0 = await Controllerqiht1C.setVault.call(addressNOdmp7, addressGQp6Wfi, {from: accounts[2]});

		await expect(Controllerqiht1C.setVault.call(addresstTuIR9g, addressMEZRmZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRZujiR = "0x0000000000000000000000000000000000000001"
		const Controllerqiht1C = await Controller.new(addressRZujiR, {from: accounts[0]});
		const addressS3ninSx = accounts[5]
		const addressc3qEtHe = accounts[0]
		const addresshAmV7Nv = "0x0000000000000000000000000000000000000001"
		const addressoHkeTvg = "0x0000000000000000000000000000000000000001"
		const addressvie89uV = "0x0000000000000000000000000000000000000001"
		const addressyermBo2 = accounts[2]
		const uintSRPVzU = BigInt("1660")
		const addressBz8xUzI = accounts[1]
		const addressFnuk74C = accounts[3]
		const addresstW3CKML = accounts[2]
		const addressu0pHNUp = accounts[0]
		const addressA166zPK = accounts[3]
		const addressMf1vviw = await Controllerqiht1C.approveStrategy.call(addressc3qEtHe, addressS3ninSx, {from: accounts[0]});
		const addressPBlY7nW = await Controllerqiht1C.setConverter.call(addressvie89uV, addressoHkeTvg, addresshAmV7Nv, {from: accounts[3]});
		const addressAsNYFSM = await Controllerqiht1C.withdrawAll.call(addressyermBo2, {from: accounts[1]});
		const addressVAt24l0 = await Controllerqiht1C.earn.call(addressBz8xUzI, uintSRPVzU, {from: accounts[2]});
		const addressh6UYyrQ = await Controllerqiht1C.approveStrategy.call(addresstW3CKML, addressFnuk74C, {from: accounts[2]});
		const addressj6NUkT0 = await Controllerqiht1C.setVault.call(addressA166zPK, addressu0pHNUp, {from: accounts[2]});

		await expect(Controllerqiht1C.setConverter.call(addressvie89uV, addressoHkeTvg, addresshAmV7Nv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYPxgjd = "0x0000000000000000000000000000000000000001"
		const Controllerqiht1C = await Controller.new(addressYPxgjd, {from: accounts[0]});
		const addressijcUDEA = accounts[3]
		const addressnagk5O = "0x0000000000000000000000000000000000000001"
		const addressBIQPms = "0x0000000000000000000000000000000000000001"
		const addressm79mAkE = "0x0000000000000000000000000000000000000001"
		const uintU8RP80n = BigInt("1660")
		const addressb9Dh0BK = accounts[1]
		const addressJz9j8Uf = accounts[0]
		const addressYf3ruyb = accounts[3]
		const addressgAyMwHl = await Controllerqiht1C.withdrawAll.call(addressijcUDEA, {from: "0x0000000000000000000000000000000000000001"});
		const addressPBlY7nW = await Controllerqiht1C.setConverter.call(addressm79mAkE, addressBIQPms, addressnagk5O, {from: accounts[3]});
		const addressVAt24l0 = await Controllerqiht1C.earn.call(addressb9Dh0BK, uintU8RP80n, {from: accounts[2]});
		const addressj6NUkT0 = await Controllerqiht1C.setVault.call(addressYf3ruyb, addressJz9j8Uf, {from: accounts[2]});

		await expect(Controllerqiht1C.withdrawAll.call(addressijcUDEA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressf2kvvvo = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressf2kvvvo, {from: accounts[1]});
		const uint8Z0dPL = BigInt("668")
		const addressc8fJRXX = accounts[1]
		const addressuJwiGrb = accounts[1]
		const addressT63qkzs = accounts[0]
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addressuJwiGrb, addressc8fJRXX, uint8Z0dPL, {from: accounts[1]});
		const addressQwUZujx = await ControllerIH4zMwV.setGovernance.call(addressT63qkzs, {from: accounts[1]});

		await expect(ControllerIH4zMwV.yearn.call(addressuJwiGrb, addressc8fJRXX, uint8Z0dPL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZt0MXkW = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressZt0MXkW, {from: accounts[1]});
		const addressh0z6k9e = accounts[3]
		const uintmTzVMUY = BigInt("668")
		const address8R2G7a = accounts[1]
		const addressViQ27FF = accounts[1]
		const address7rZdGM = accounts[0]
		const uintxnxNu1w = await ControllerIH4zMwV.balanceOf.call(addressh0z6k9e, {from: accounts[1]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addressViQ27FF, address8R2G7a, uintmTzVMUY, {from: accounts[1]});
		const addressQwUZujx = await ControllerIH4zMwV.setGovernance.call(address7rZdGM, {from: accounts[1]});

		await expect(ControllerIH4zMwV.balanceOf.call(addressh0z6k9e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfoQaiD = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressfoQaiD, {from: accounts[1]});
		const addressg8DiMp6 = accounts[2]
		const addressmuw12VE = accounts[4]
		const uintzzawJD = BigInt("1319")
		const addresskr8bvp7 = accounts[3]
		const addressLjwv1wb = accounts[4]
		const uintUcGvoLW = BigInt("1597")
		const addresswBWhhq = accounts[1]
		const addresspS14Ie = accounts[1]
		const addresscJMXyLi = accounts[1]
		const addressL9k2C7T = await ControllerIH4zMwV.setStrategy.call(addressmuw12VE, addressg8DiMp6, {from: "0x0000000000000000000000000000000000000001"});
		const addressrNKoC8d = await ControllerIH4zMwV.yearn.call(addressLjwv1wb, addresskr8bvp7, uintzzawJD, {from: accounts[0]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addresspS14Ie, addresswBWhhq, uintUcGvoLW, {from: accounts[1]});
		const addressQwUZujx = await ControllerIH4zMwV.setGovernance.call(addresscJMXyLi, {from: accounts[1]});

		await expect(ControllerIH4zMwV.setStrategy.call(addressmuw12VE, addressg8DiMp6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address3ezqNI = accounts[4]
		const ControllerYy8Oudh = await Controller.new(address3ezqNI, {from: accounts[4]});
		const uintUAZVo14 = BigInt("1913")
		const addressIPSEiGp = accounts[1]
		const addressxHzbkxL = accounts[5]
		const addresssQB27ey = accounts[3]
		const addressOcjXhu8 = accounts[0]
		const uintRIlFrM = BigInt("1407")
		const addressepIsebu = accounts[1]
		const uintNA3XH1j = BigInt("1502")
		const addressYYmLShO = accounts[5]
		const addresscKCfdF8 = accounts[0]
		const addressSWCGkXh = await ControllerYy8Oudh.inCaseTokensGetStuck.call(addressIPSEiGp, uintUAZVo14, {from: "0x0000000000000000000000000000000000000001"});
		const addressVqeOBF9 = await ControllerYy8Oudh.setOneSplit.call(addressxHzbkxL, {from: accounts[4]});
		const addressAnwI4p = await ControllerYy8Oudh.setVault.call(addressOcjXhu8, addresssQB27ey, {from: accounts[3]});
		const addressRBHrcIQ = await ControllerYy8Oudh.withdraw.call(addressepIsebu, uintRIlFrM, {from: accounts[2]});
		const addressYICLWY = await ControllerYy8Oudh.yearn.call(addresscKCfdF8, addressYYmLShO, uintNA3XH1j, {from: accounts[2]});

		await expect(ControllerYy8Oudh.inCaseTokensGetStuck.call(addressIPSEiGp, uintUAZVo14, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFxOVjHx = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressFxOVjHx, {from: accounts[1]});
		const uintThRh8Nh = BigInt("803")
		const addresszIZSXJc = accounts[1]
		const addressjvb8Xfi = accounts[4]
		const uintZogeqIw = BigInt("668")
		const addressK7rUAba = accounts[1]
		const addresspgqV6l = accounts[1]
		const uintIfKVsy8 = await ControllerIH4zMwV.getExpectedReturn.call(addressjvb8Xfi, addresszIZSXJc, uintThRh8Nh, {from: accounts[3]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addresspgqV6l, addressK7rUAba, uintZogeqIw, {from: accounts[1]});

		await expect(ControllerIH4zMwV.getExpectedReturn.call(addressjvb8Xfi, addresszIZSXJc, uintThRh8Nh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbsEXfdc = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressbsEXfdc, {from: accounts[1]});
		const addressxvtUt2v = accounts[2]
		const uintZ8rkNBM = BigInt("668")
		const addressJRoX3TJ = accounts[2]
		const addressY6DEhlJ = accounts[1]
		const addressAVHuIzS = accounts[0]
		const addressv5gRMqE = "0x0000000000000000000000000000000000000001"
		const addresskDUrf2q = await ControllerIH4zMwV.setOneSplit.call(addressxvtUt2v, {from: accounts[0]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addressY6DEhlJ, addressJRoX3TJ, uintZ8rkNBM, {from: accounts[1]});
		const addressENJfuc = await ControllerIH4zMwV.approveStrategy.call(addressv5gRMqE, addressAVHuIzS, {from: accounts[1]});

		await expect(ControllerIH4zMwV.setOneSplit.call(addressxvtUt2v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmGmqub7 = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressmGmqub7, {from: accounts[1]});
		const addresstNET9ke = accounts[2]
		const addressyK81Uo = accounts[3]
		const addressbaygjJi = accounts[0]
		const addressLeazyK3 = accounts[3]
		const addressw81U4Ah = accounts[0]
		const uintc6WYB0E = BigInt("668")
		const addressJ9KeZFh = accounts[1]
		const addressju70Pk = accounts[2]
		const addressMXP86Nt = await ControllerIH4zMwV.revokeStrategy.call(addressyK81Uo, addresstNET9ke, {from: accounts[2]});
		const addressMhvLiX3 = await ControllerIH4zMwV.setConverter.call(addressw81U4Ah, addressLeazyK3, addressbaygjJi, {from: accounts[0]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addressju70Pk, addressJ9KeZFh, uintc6WYB0E, {from: accounts[1]});

		await expect(ControllerIH4zMwV.revokeStrategy.call(addressyK81Uo, addresstNET9ke, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQZUXRxa = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressQZUXRxa, {from: accounts[1]});
		const addressOGmjSK = accounts[4]
		const addressXsQjlY1 = accounts[3]
		const addressOf2i8J0 = accounts[1]
		const uintvpjR2b = BigInt("668")
		const addressbvHTC12 = accounts[1]
		const addressJStXwqa = accounts[1]
		const addressA8EL7j7 = await ControllerIH4zMwV.inCaseStrategyTokenGetStuck.call(addressXsQjlY1, addressOGmjSK, {from: accounts[4]});
		const addressCOMc4q9 = await ControllerIH4zMwV.setStrategist.call(addressOf2i8J0, {from: accounts[1]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addressJStXwqa, addressbvHTC12, uintvpjR2b, {from: accounts[1]});

		await expect(ControllerIH4zMwV.inCaseStrategyTokenGetStuck.call(addressXsQjlY1, addressOGmjSK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJD89kv4 = accounts[5]
		const ControlleriHWjebD = await Controller.new(addressJD89kv4, {from: accounts[2]});
		const uintg199LYt = BigInt("1503")
		const addressT6Ou4lI = accounts[4]
		const addressoo99SsO = accounts[0]
		const addressLSnlVRF = accounts[2]
		const addresswru8NBH = accounts[1]
		const addressEQP95O = accounts[4]
		const addressGUSRL4l = accounts[2]
		const addressVmm5Jqd = accounts[0]
		const uintMR3ClrT = BigInt("2013")
		const addressdB6pUk = accounts[4]
		const addressnZtTkT5 = accounts[5]
		const addresshmekp1y = accounts[4]
		const addresssOcI1lQ = await ControlleriHWjebD.inCaseTokensGetStuck.call(addressT6Ou4lI, uintg199LYt, {from: accounts[2]});
		const addressITb57VS = await ControlleriHWjebD.setConverter.call(addresswru8NBH, addressLSnlVRF, addressoo99SsO, {from: accounts[4]});
		const addressWCasQx7 = await ControlleriHWjebD.setStrategy.call(addressGUSRL4l, addressEQP95O, {from: accounts[4]});
		const addressngGptdi = await ControlleriHWjebD.setOneSplit.call(addressVmm5Jqd, {from: accounts[2]});
		const addressdxiyVU = await ControlleriHWjebD.earn.call(addressdB6pUk, uintMR3ClrT, {from: accounts[4]});
		const addressmklQDkt = await ControlleriHWjebD.approveStrategy.call(addresshmekp1y, addressnZtTkT5, {from: accounts[0]});

		await expect(ControlleriHWjebD.inCaseTokensGetStuck.call(addressT6Ou4lI, uintg199LYt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVAknOX9 = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressVAknOX9, {from: accounts[1]});
		const addressLZLtIj = accounts[3]
		const addresso0fxj5K = accounts[4]
		const uintGwNZVCQ = BigInt("668")
		const addressMBxchcv = accounts[2]
		const address8qhHf4 = accounts[1]
		const addressC6vt3hs = await ControllerIH4zMwV.setStrategist.call(addressLZLtIj, {from: accounts[1]});
		const addressHup3XPt = await ControllerIH4zMwV.setRewards.call(addresso0fxj5K, {from: accounts[4]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(address8qhHf4, addressMBxchcv, uintGwNZVCQ, {from: accounts[1]});

		await expect(ControllerIH4zMwV.setRewards.call(addresso0fxj5K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPr8BgBK = accounts[1]
		const ControllerIH4zMwV = await Controller.new(addressPr8BgBK, {from: accounts[1]});
		const addressRnYLZWD = accounts[2]
		const addressHmklKI3 = accounts[4]
		const uintnfcySbL = BigInt("668")
		const addressjGC1wUV = accounts[2]
		const addressqK4fakP = accounts[1]
		const addressNrBGJJ = await ControllerIH4zMwV.setStrategy.call(addressHmklKI3, addressRnYLZWD, {from: accounts[1]});
		const addressTzI5hhb = await ControllerIH4zMwV.yearn.call(addressqK4fakP, addressjGC1wUV, uintnfcySbL, {from: accounts[1]});

		await expect(ControllerIH4zMwV.setStrategy.call(addressHmklKI3, addressRnYLZWD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})