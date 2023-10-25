const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressQKIuh77 = accounts[2]
		const ControllerrBWJDv0 = await Controller.new(addressQKIuh77, {from: accounts[1]});
		const addressC3kui5L = accounts[0]
		const addressN36P1Tn = "0x0000000000000000000000000000000000000001"
		const addressw6IYPD7 = accounts[3]
		const addressX39x5x1 = accounts[0]
		const address1arTiH = accounts[0]
		const addresstFrhYTq = accounts[4]
		const addressLHuT26r = await ControllerrBWJDv0.setConverter.call(addressw6IYPD7, addressN36P1Tn, addressC3kui5L, {from: accounts[0]});
		const uintILka9mB = await ControllerrBWJDv0.balanceOf.call(addressX39x5x1, {from: accounts[1]});
		const addressjnj4FL = await ControllerrBWJDv0.setStrategy.call(addresstFrhYTq, address1arTiH, {from: accounts[5]});

		await expect(ControllerrBWJDv0.setConverter.call(addressw6IYPD7, addressN36P1Tn, addressC3kui5L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressr1p0nRu = accounts[3]
		const ControllerStmlhqv = await Controller.new(addressr1p0nRu, {from: accounts[4]});
		const uintYOURC7I = BigInt("1043")
		const addressMDbOBhJ = accounts[3]
		const addressx4fsAAU = accounts[0]
		const uintTcIckj = await ControllerStmlhqv.setSplit.call(uintYOURC7I, {from: "0x0000000000000000000000000000000000000001"});
		const addressBCtaXHL = await ControllerStmlhqv.setVault.call(addressx4fsAAU, addressMDbOBhJ, {from: accounts[4]});

		await expect(ControllerStmlhqv.setSplit.call(uintYOURC7I, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressksuSmLq = accounts[5]
		const ControllerFgssTWd = await Controller.new(addressksuSmLq, {from: accounts[0]});
		const addressulE7UGH = accounts[1]
		const addressXNw5BI3 = accounts[4]
		const addressIXlr1zB = accounts[1]
		const addressymPi30a = accounts[3]
		const addressNrTYhW5 = accounts[4]
		const addressAMFJe0w = await ControllerFgssTWd.setOneSplit.call(addressulE7UGH, {from: accounts[5]});
		const addressKrjL77k = await ControllerFgssTWd.withdrawAll.call(addressXNw5BI3, {from: accounts[0]});
		const addressnTznM9Z = await ControllerFgssTWd.approveStrategy.call(addressymPi30a, addressIXlr1zB, {from: accounts[4]});
		const addressUWfd7j8 = await ControllerFgssTWd.setGovernance.call(addressNrTYhW5, {from: accounts[5]});

		await expect(ControllerFgssTWd.setOneSplit.call(addressulE7UGH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslMRbbMV = accounts[1]
		const ControllerrLN242p = await Controller.new(addresslMRbbMV, {from: accounts[0]});
		const uintWNO74fw = BigInt("1649")
		const addresstCD0cVp = accounts[4]
		const addressmFxMuFv = accounts[0]
		const uintn1plMaV = BigInt("1031")
		const addressvBPdFf = accounts[4]
		const addressWhKN2kM = accounts[3]
		const addressOa0S3wQ = accounts[1]
		const addresspWVCIHk = accounts[0]
		const addressWzbIccl = accounts[3]
		const addressnXDgYP3 = accounts[4]
		const uintwRFQhSe = BigInt("52")
		const addressw51TSjk = accounts[3]
		const uintZLYKz8 = await ControllerrLN242p.getExpectedReturn.call(addressmFxMuFv, addresstCD0cVp, uintWNO74fw, {from: accounts[3]});
		const uintZfKtpNt = await ControllerrLN242p.getExpectedReturn.call(addressWhKN2kM, addressvBPdFf, uintn1plMaV, {from: accounts[5]});
		const addressX23Qu1c = await ControllerrLN242p.setConverter.call(addressWzbIccl, addresspWVCIHk, addressOa0S3wQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressMYOftCm = await ControllerrLN242p.setGovernance.call(addressnXDgYP3, {from: accounts[2]});
		const addressr7Dn6Op = await ControllerrLN242p.withdraw.call(addressw51TSjk, uintwRFQhSe, {from: accounts[4]});

		await expect(ControllerrLN242p.getExpectedReturn.call(addressmFxMuFv, addresstCD0cVp, uintWNO74fw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnp3q8Ix = accounts[3]
		const ControllerCojasDs = await Controller.new(addressnp3q8Ix, {from: accounts[1]});
		const addressYoTd0Zd = accounts[0]
		const addressHCYPfbU = accounts[4]
		const address87JH2H = accounts[2]
		const uintG02pJL = BigInt("974")
		const addressgFCwYYK = accounts[4]
		const address2agXqQ = await ControllerCojasDs.setStrategist.call(addressYoTd0Zd, {from: accounts[1]});
		const addressmPN9Idf = await ControllerCojasDs.approveStrategy.call(address87JH2H, addressHCYPfbU, {from: accounts[2]});
		const addressXsCDDW8 = await ControllerCojasDs.withdraw.call(addressgFCwYYK, uintG02pJL, {from: accounts[1]});

		await expect(ControllerCojasDs.approveStrategy.call(address87JH2H, addressHCYPfbU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressviTwzIM = accounts[3]
		const ControllermyYXRNr = await Controller.new(addressviTwzIM, {from: accounts[0]});
		const addressB8Z42gK = "0x0000000000000000000000000000000000000001"
		const addressFjS49jj = accounts[2]
		const addressYtduonB = accounts[0]
		const addressGSni2ec = accounts[5]
		const addressuL1mAoS = accounts[2]
		const addressoccFeDL = accounts[0]
		const addressm0mSr62 = accounts[1]
		const uintozEAZQG = BigInt("1423")
		const addresslzASlFH = accounts[5]
		const addresshdgOaRr = accounts[2]
		const addressJGWPLTv = await ControllermyYXRNr.setGovernance.call(addressB8Z42gK, {from: accounts[0]});
		const address1IE0qv = await ControllermyYXRNr.setRewards.call(addressFjS49jj, {from: accounts[1]});
		const addressNpogyK2 = await ControllermyYXRNr.setVault.call(addressGSni2ec, addressYtduonB, {from: accounts[3]});
		const addressnO5MdJP = await ControllermyYXRNr.setConverter.call(addressm0mSr62, addressoccFeDL, addressuL1mAoS, {from: accounts[1]});
		const uintYoFU2Gk = await ControllermyYXRNr.getExpectedReturn.call(addresshdgOaRr, addresslzASlFH, uintozEAZQG, {from: accounts[1]});

		await expect(ControllermyYXRNr.setRewards.call(addressFjS49jj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressL9ENRFa = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressL9ENRFa, {from: accounts[3]});
		const addresswdvvQAb = accounts[5]
		const addresspF4pBNK = accounts[1]
		const addressc69B18K = accounts[2]
		const addressM4rpjOa = accounts[1]
		const uinthJsVRFq = BigInt("359")
		const addressZme5Jc2 = accounts[4]
		const addressTbmZaPL = await Controllerky1NT1.setStrategy.call(addresspF4pBNK, addresswdvvQAb, {from: accounts[2]});
		const addressqNi1ZLB = await Controllerky1NT1.approveStrategy.call(addressM4rpjOa, addressc69B18K, {from: accounts[0]});
		const addressN0RDmba = await Controllerky1NT1.inCaseTokensGetStuck.call(addressZme5Jc2, uinthJsVRFq, {from: accounts[1]});

		await expect(Controllerky1NT1.setStrategy.call(addresspF4pBNK, addresswdvvQAb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyp0LHfa = accounts[3]
		const ControllerT6v1HYQ = await Controller.new(addressyp0LHfa, {from: accounts[1]});
		const uinthQYe24q = BigInt("516")
		const addressY9YknD = accounts[0]
		const addressCBgWxhl = accounts[1]
		const addressO3imblt = accounts[1]
		const addressltiDcTa = accounts[2]
		const addressD3hXHrl = accounts[5]
		const addressGQ0IpTg = await ControllerT6v1HYQ.yearn.call(addressCBgWxhl, addressY9YknD, uinthQYe24q, {from: accounts[4]});
		const addressIdKka0j = await ControllerT6v1HYQ.setStrategy.call(addressltiDcTa, addressO3imblt, {from: accounts[4]});
		const uintZn3JMM = await ControllerT6v1HYQ.balanceOf.call(addressD3hXHrl, {from: accounts[4]});

		await expect(ControllerT6v1HYQ.yearn.call(addressCBgWxhl, addressY9YknD, uinthQYe24q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEDvjGsC = accounts[3]
		const ControllerjBBFxKx = await Controller.new(addressEDvjGsC, {from: accounts[2]});
		const uintYSTfAJs = BigInt("337")
		const address87jJgE = accounts[0]
		const addressIYCPgdI = accounts[4]
		const addresstULTt13 = accounts[5]
		const addressGq88kwC = await ControllerjBBFxKx.earn.call(address87jJgE, uintYSTfAJs, {from: accounts[5]});
		const addressNoTco6E = await ControllerjBBFxKx.setOneSplit.call(addressIYCPgdI, {from: accounts[4]});
		const addressH822EMj = await ControllerjBBFxKx.withdrawAll.call(addresstULTt13, {from: accounts[2]});

		await expect(ControllerjBBFxKx.earn.call(address87jJgE, uintYSTfAJs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBkqIMkK = accounts[3]
		const ControllerCojasDs = await Controller.new(addressBkqIMkK, {from: accounts[1]});
		const addressr3wEXQO = "0x0000000000000000000000000000000000000001"
		const addressqZPFQNU = accounts[0]
		const uintvSXbpfG = BigInt("974")
		const addressSMJ0W9f = accounts[4]
		const addressqm3vbAl = await ControllerCojasDs.withdrawAll.call(addressr3wEXQO, {from: accounts[3]});
		const address2agXqQ = await ControllerCojasDs.setStrategist.call(addressqZPFQNU, {from: accounts[1]});
		const addressXsCDDW8 = await ControllerCojasDs.withdraw.call(addressSMJ0W9f, uintvSXbpfG, {from: accounts[1]});

		await expect(ControllerCojasDs.withdrawAll.call(addressr3wEXQO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSXpOOk = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressSXpOOk, {from: accounts[3]});
		const uintLRe51tu = BigInt("869")
		const addressuqt0sG1 = accounts[1]
		const addressG0Z71CM = accounts[0]
		const addressfh97dhV = accounts[5]
		const addresssaO7Fq = accounts[1]
		const addressWtGQMJE = accounts[3]
		const addressaSyaNbA = accounts[2]
		const addresspuS3iTA = await Controllerky1NT1.inCaseTokensGetStuck.call(addressuqt0sG1, uintLRe51tu, {from: accounts[4]});
		const addressvGmvob = await Controllerky1NT1.setRewards.call(addressG0Z71CM, {from: accounts[2]});
		const addressTbmZaPL = await Controllerky1NT1.setStrategy.call(addresssaO7Fq, addressfh97dhV, {from: accounts[2]});
		const addressqNi1ZLB = await Controllerky1NT1.approveStrategy.call(addressaSyaNbA, addressWtGQMJE, {from: accounts[0]});

		await expect(Controllerky1NT1.inCaseTokensGetStuck.call(addressuqt0sG1, uintLRe51tu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLVxeaPm = accounts[5]
		const ControllerFgssTWd = await Controller.new(addressLVxeaPm, {from: accounts[0]});
		const addressj1xWfw = accounts[3]
		const addressLxRC3fY = accounts[3]
		const addressfVyXq4H = accounts[1]
		const addressADxJKPr = accounts[4]
		const addressSBv5NnP = accounts[4]
		const addresstzNlkE6 = await ControllerFgssTWd.setVault.call(addressLxRC3fY, addressj1xWfw, {from: accounts[4]});
		const addressAMFJe0w = await ControllerFgssTWd.setOneSplit.call(addressfVyXq4H, {from: accounts[5]});
		const addressKrjL77k = await ControllerFgssTWd.withdrawAll.call(addressADxJKPr, {from: accounts[0]});
		const addressUWfd7j8 = await ControllerFgssTWd.setGovernance.call(addressSBv5NnP, {from: accounts[5]});

		await expect(ControllerFgssTWd.setVault.call(addressLxRC3fY, addressj1xWfw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressO65fyVN = accounts[0]
		const Controller3ACCkt = await Controller.new(addressO65fyVN, {from: accounts[1]});
		const uintCfG0i96 = BigInt("523")
		const addressKvrusnt = accounts[3]
		const addressezBPpQM = accounts[1]
		const addressKKIR37 = accounts[1]
		const addressplJkgV = accounts[3]
		const addressuP9OT1H = accounts[3]
		const addressx7sRS46 = accounts[3]
		const addressFsvLsg8 = accounts[0]
		const addressc4M3zqd = await Controller3ACCkt.yearn.call(addressezBPpQM, addressKvrusnt, uintCfG0i96, {from: accounts[1]});
		const addressiBKArot = await Controller3ACCkt.setOneSplit.call(addressKKIR37, {from: accounts[1]});
		const addressaZ0SSsF = await Controller3ACCkt.setOneSplit.call(addressplJkgV, {from: accounts[4]});
		const addressfC84g5x = await Controller3ACCkt.revokeStrategy.call(addressx7sRS46, addressuP9OT1H, {from: accounts[2]});
		const addressSp5kyZN = await Controller3ACCkt.setOneSplit.call(addressFsvLsg8, {from: accounts[4]});

		await expect(Controller3ACCkt.yearn.call(addressezBPpQM, addressKvrusnt, uintCfG0i96, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressR2dbOLN = accounts[2]
		const Controlleri0L6KjP = await Controller.new(addressR2dbOLN, {from: "0x0000000000000000000000000000000000000001"});
		const addressVZNEx3S = accounts[1]
		const addressMVLHxeY = accounts[0]
		const uintP5Uzrby = BigInt("896")
		const addresssuBc2I1 = accounts[0]
		const addressRGHmEmQ = accounts[1]
		const uintrlCNjAV = BigInt("661")
		const addresss0Fc8UI = accounts[2]
		const addressyJZoRD = accounts[0]
		const addressmxFkTMk = accounts[0]
		const uintJaq1DXR = BigInt("968")
		const addressq6nZO1O = accounts[0]
		const addressPgCkHte = accounts[4]
		const addressHmA1o3C = await Controlleri0L6KjP.setVault.call(addressMVLHxeY, addressVZNEx3S, {from: "0x0000000000000000000000000000000000000001"});
		const uintJQ9PlT9 = await Controlleri0L6KjP.getExpectedReturn.call(addressRGHmEmQ, addresssuBc2I1, uintP5Uzrby, {from: accounts[1]});
		const addressrk2ZnrM = await Controlleri0L6KjP.withdraw.call(addresss0Fc8UI, uintrlCNjAV, {from: accounts[2]});
		const addressAd5wpxq = await Controlleri0L6KjP.setVault.call(addressmxFkTMk, addressyJZoRD, {from: accounts[0]});
		const addresszB9eBd2 = await Controlleri0L6KjP.yearn.call(addressPgCkHte, addressq6nZO1O, uintJaq1DXR, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const addressknD1qeE = accounts[2]
		const ControllerrBWJDv0 = await Controller.new(addressknD1qeE, {from: accounts[1]});
		const addressAzbdbpc = accounts[0]
		const addressmA0WZd9 = accounts[0]
		const addressLQrFirC = accounts[4]
		const uintILka9mB = await ControllerrBWJDv0.balanceOf.call(addressAzbdbpc, {from: accounts[1]});
		const addressjnj4FL = await ControllerrBWJDv0.setStrategy.call(addressLQrFirC, addressmA0WZd9, {from: accounts[5]});

		await expect(ControllerrBWJDv0.balanceOf.call(addressAzbdbpc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslqNAKjx = accounts[3]
		const ControllerjBBFxKx = await Controller.new(addresslqNAKjx, {from: accounts[2]});
		const addressvkqG1dl = accounts[5]
		const addressH822EMj = await ControllerjBBFxKx.withdrawAll.call(addressvkqG1dl, {from: accounts[2]});

		await expect(ControllerjBBFxKx.withdrawAll.call(addressvkqG1dl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUwMeSJi = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressUwMeSJi, {from: accounts[3]});
		const addressFkZ5YQS = accounts[1]
		const addressvEKGjgq = accounts[2]
		const address6MUGdF = accounts[2]
		const uintE9KbfpH = BigInt("869")
		const addresss33Q9Ek = accounts[1]
		const addressMpdGKvY = accounts[1]
		const addressKBMzGvX = accounts[5]
		const addresscmgl2hu = accounts[1]
		const addressAUreatx = await Controllerky1NT1.setConverter.call(address6MUGdF, addressvEKGjgq, addressFkZ5YQS, {from: accounts[3]});
		const addresspuS3iTA = await Controllerky1NT1.inCaseTokensGetStuck.call(addresss33Q9Ek, uintE9KbfpH, {from: accounts[4]});
		const addressvGmvob = await Controllerky1NT1.setRewards.call(addressMpdGKvY, {from: accounts[2]});
		const addressTbmZaPL = await Controllerky1NT1.setStrategy.call(addresscmgl2hu, addressKBMzGvX, {from: accounts[2]});

		await expect(Controllerky1NT1.inCaseTokensGetStuck.call(addresss33Q9Ek, uintE9KbfpH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address63lCQj = accounts[4]
		const Controllerky1NT1 = await Controller.new(address63lCQj, {from: accounts[3]});
		const uintwEo2NKQ = BigInt("70")
		const addressYkhLTR6 = accounts[3]
		const addressfKVgRrH = accounts[2]
		const addressRtFQAP5 = accounts[3]
		const addressVoDPkmG = accounts[0]
		const addressZoAcoB2 = accounts[2]
		const addressQiLaiE3 = accounts[0]
		const addressRtjmKyr = await Controllerky1NT1.withdraw.call(addressYkhLTR6, uintwEo2NKQ, {from: accounts[0]});
		const addressqNi1ZLB = await Controllerky1NT1.approveStrategy.call(addressRtFQAP5, addressfKVgRrH, {from: accounts[0]});
		const addressca5uKav = await Controllerky1NT1.setStrategist.call(addressVoDPkmG, {from: accounts[0]});
		const addressjXoa9DS = await Controllerky1NT1.revokeStrategy.call(addressQiLaiE3, addressZoAcoB2, {from: accounts[0]});

		await expect(Controllerky1NT1.withdraw.call(addressYkhLTR6, uintwEo2NKQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLhprkEQ = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressLhprkEQ, {from: accounts[3]});
		const addressnRa6upA = accounts[0]
		const addressd5uRvpn = accounts[0]
		const addressz20NmGS = accounts[2]
		const addresstMfBgtx = accounts[4]
		const addressdC6xAa = await Controllerky1NT1.inCaseStrategyTokenGetStuck.call(addressd5uRvpn, addressnRa6upA, {from: accounts[2]});
		const addressqNi1ZLB = await Controllerky1NT1.approveStrategy.call(addresstMfBgtx, addressz20NmGS, {from: accounts[0]});

		await expect(Controllerky1NT1.inCaseStrategyTokenGetStuck.call(addressd5uRvpn, addressnRa6upA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressg9ws5tk = accounts[0]
		const ControlleroZMTtXC = await Controller.new(addressg9ws5tk, {from: accounts[2]});
		const addresst6w3Gm5 = accounts[2]
		const addresskUcDXe0 = accounts[3]
		const uintNF6PaFj = BigInt("949")
		const addressRF3ZlWA = accounts[0]
		const addressgp3hrD4 = accounts[1]
		const addressT9z2SDq = accounts[1]
		const addresszt12TcH = accounts[0]
		const addressjccF2DV = accounts[2]
		const addresseFW0BUK = await ControlleroZMTtXC.revokeStrategy.call(addresskUcDXe0, addresst6w3Gm5, {from: accounts[1]});
		const addressyc7Lamb = await ControlleroZMTtXC.yearn.call(addressgp3hrD4, addressRF3ZlWA, uintNF6PaFj, {from: accounts[1]});
		const addresso5UWyPa = await ControlleroZMTtXC.revokeStrategy.call(addresszt12TcH, addressT9z2SDq, {from: accounts[4]});
		const uinteBItXqY = await ControlleroZMTtXC.balanceOf.call(addressjccF2DV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControlleroZMTtXC.revokeStrategy.call(addresskUcDXe0, addresst6w3Gm5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMg1gjm2 = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressMg1gjm2, {from: accounts[3]});
		const addressTV2REL = accounts[0]
		const addressebMkLiY = accounts[0]
		const addressQXRK5MW = accounts[0]
		const addressVPKlNXD = accounts[1]
		const addressK9dtIf9 = accounts[5]
		const addressPihIDHB = accounts[5]
		const addresszE4wVz = await Controllerky1NT1.inCaseStrategyTokenGetStuck.call(addressebMkLiY, addressTV2REL, {from: accounts[3]});
		const addressmGTU1Z = await Controllerky1NT1.setStrategy.call(addressVPKlNXD, addressQXRK5MW, {from: accounts[1]});
		const addressbSF81DT = await Controllerky1NT1.setOneSplit.call(addressK9dtIf9, {from: accounts[2]});
		const addressINb0Ina = await Controllerky1NT1.setGovernance.call(addressPihIDHB, {from: accounts[4]});

		await expect(Controllerky1NT1.inCaseStrategyTokenGetStuck.call(addressebMkLiY, addressTV2REL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressu1rnLnN = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressu1rnLnN, {from: accounts[3]});
		const addressfdb22yc = accounts[0]
		const addressUTxb4Ex = accounts[3]
		const addressoBvkYeh = accounts[1]
		const addressiIqtIHO = accounts[4]
		const uintljwU9Rp = BigInt("1210")
		const addressGoWqSzr = accounts[3]
		const addressP8DUfAk = accounts[3]
		const uint0xmZhC = BigInt("855")
		const addressKCmVz7I = await Controllerky1NT1.setStrategist.call(addressfdb22yc, {from: accounts[3]});
		const addressRSYKV9R = await Controllerky1NT1.revokeStrategy.call(addressoBvkYeh, addressUTxb4Ex, {from: accounts[3]});
		const addressbSF81DT = await Controllerky1NT1.setOneSplit.call(addressiIqtIHO, {from: accounts[2]});
		const addressAV2k3k = await Controllerky1NT1.yearn.call(addressP8DUfAk, addressGoWqSzr, uintljwU9Rp, {from: "0x0000000000000000000000000000000000000001"});
		const uintxvuhA7Y = await Controllerky1NT1.setSplit.call(uint0xmZhC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerky1NT1.setOneSplit.call(addressiIqtIHO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxXG43fS = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressxXG43fS, {from: accounts[3]});
		const addressjVAgKq = accounts[5]
		const addressfSyiKiC = accounts[4]
		const uintGiUZtXo = BigInt("867")
		const addressqu4fmg = accounts[1]
		const addressRcaoBtW = await Controllerky1NT1.setStrategy.call(addressfSyiKiC, addressjVAgKq, {from: accounts[3]});
		const addresspuS3iTA = await Controllerky1NT1.inCaseTokensGetStuck.call(addressqu4fmg, uintGiUZtXo, {from: accounts[4]});

		await expect(Controllerky1NT1.setStrategy.call(addressfSyiKiC, addressjVAgKq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshGJ4eg2 = accounts[3]
		const ControllerStmlhqv = await Controller.new(addresshGJ4eg2, {from: accounts[4]});
		const addressDy4bzCI = "0x0000000000000000000000000000000000000001"
		const uintkDLeIS = BigInt("1052")
		const addresstIfFVML = await ControllerStmlhqv.setOneSplit.call(addressDy4bzCI, {from: accounts[4]});
		const uintTcIckj = await ControllerStmlhqv.setSplit.call(uintkDLeIS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerStmlhqv.setSplit.call(uintkDLeIS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address4VOLhd = accounts[0]
		const Controller3ACCkt = await Controller.new(address4VOLhd, {from: accounts[1]});
		const addressGovKPkN = accounts[3]
		const uint2CLenm = BigInt("523")
		const addressjPK617 = accounts[4]
		const addressinvA7Uy = accounts[2]
		const addressfoI5TEn = accounts[4]
		const addressw3GnOsz = accounts[0]
		const addressHZ9Az1u = await Controller3ACCkt.setRewards.call(addressGovKPkN, {from: accounts[1]});
		const addressc4M3zqd = await Controller3ACCkt.yearn.call(addressinvA7Uy, addressjPK617, uint2CLenm, {from: accounts[1]});
		const addressCSTJVbW = await Controller3ACCkt.setStrategy.call(addressw3GnOsz, addressfoI5TEn, {from: accounts[0]});

		await expect(Controller3ACCkt.yearn.call(addressinvA7Uy, addressjPK617, uint2CLenm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmAHTFta = accounts[4]
		const Controllerky1NT1 = await Controller.new(addressmAHTFta, {from: accounts[3]});
		const uintzN5bivk = BigInt("1129")
		const address6cVweI = accounts[4]
		const uintTvAxOUI = BigInt("886")
		const addressUx0x07D = accounts[1]
		const uintJ4OpT3w = BigInt("1427")
		const addressy4aNxIA = accounts[5]
		const addressF06SKuM = accounts[5]
		const addressxFYlmW = await Controllerky1NT1.inCaseTokensGetStuck.call(address6cVweI, uintzN5bivk, {from: accounts[3]});
		const addressAxruPrq = await Controllerky1NT1.earn.call(addressUx0x07D, uintTvAxOUI, {from: accounts[4]});
		const uintbHvtp2 = await Controllerky1NT1.setSplit.call(uintJ4OpT3w, {from: accounts[4]});
		const addressRcaoBtW = await Controllerky1NT1.setStrategy.call(addressF06SKuM, addressy4aNxIA, {from: accounts[3]});

		await expect(Controllerky1NT1.inCaseTokensGetStuck.call(address6cVweI, uintzN5bivk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressq3ofA7Y = accounts[3]
		const ControllerjBBFxKx = await Controller.new(addressq3ofA7Y, {from: accounts[2]});
		const addressQWykCTH = accounts[5]
		const addressCIjH5dL = accounts[1]
		const uintHLhC8IM = BigInt("709")
		const addressNQmnVGT = accounts[0]
		const uinti0hrRX9 = BigInt("1568")
		const addressH3mwi79 = "0x0000000000000000000000000000000000000001"
		const addressefPehCl = accounts[4]
		const addressM2DIXAL = await ControllerjBBFxKx.approveStrategy.call(addressCIjH5dL, addressQWykCTH, {from: accounts[2]});
		const addressafLot5J = await ControllerjBBFxKx.withdraw.call(addressNQmnVGT, uintHLhC8IM, {from: accounts[1]});
		const addressZXguC3F = await ControllerjBBFxKx.yearn.call(addressefPehCl, addressH3mwi79, uinti0hrRX9, {from: accounts[2]});

		await expect(ControllerjBBFxKx.withdraw.call(addressNQmnVGT, uintHLhC8IM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvZsez9t = accounts[3]
		const ControllerjBBFxKx = await Controller.new(addressvZsez9t, {from: accounts[2]});
		const uintwXzg4v3 = BigInt("935")
		const uintxtPt7zk = BigInt("633")
		const addresssWAAYzB = accounts[1]
		const addressKjD7bWA = accounts[4]
		const uinttdeuBAj = BigInt("337")
		const addresss7sH4N = accounts[2]
		const uintw0g9kTv = await ControllerjBBFxKx.setSplit.call(uintwXzg4v3, {from: accounts[2]});
		const addressXqzKDTI = await ControllerjBBFxKx.yearn.call(addressKjD7bWA, addresssWAAYzB, uintxtPt7zk, {from: accounts[1]});
		const addressGq88kwC = await ControllerjBBFxKx.earn.call(addresss7sH4N, uinttdeuBAj, {from: accounts[5]});

		await expect(ControllerjBBFxKx.yearn.call(addressKjD7bWA, addresssWAAYzB, uintxtPt7zk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKdZKjmb = accounts[4]
		const ControllerR2BcvVP = await Controller.new(addressKdZKjmb, {from: accounts[1]});
		const addressU9Aab6q = accounts[1]
		const addressbWJnQ6 = accounts[3]
		const addressE3Ag5tq = accounts[3]
		const addresssMnFq5g = accounts[4]
		const addresshYjRV7s = accounts[4]
		const uintYc5NQ2E = BigInt("1987")
		const addresslzz0WLr = await ControllerR2BcvVP.setVault.call(addressbWJnQ6, addressU9Aab6q, {from: accounts[1]});
		const addressPIyoqPq = await ControllerR2BcvVP.setConverter.call(addresshYjRV7s, addresssMnFq5g, addressE3Ag5tq, {from: accounts[3]});
		const uintPj8rtUf = await ControllerR2BcvVP.setSplit.call(uintYc5NQ2E, {from: accounts[2]});

		await expect(ControllerR2BcvVP.setConverter.call(addresshYjRV7s, addresssMnFq5g, addressE3Ag5tq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})