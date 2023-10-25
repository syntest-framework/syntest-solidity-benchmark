const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintWnkz8CE = BigInt("264")
		const stringUchnDFI = "aXLC7oqHY"
		const stringsFYfT07 = "6zxVhxJlENUQftgk3HOOxggMECHaaQnnpuYmGIvmSPqicF"
		const GFCJrrIK0a = await GFC.new(uintWnkz8CE, stringUchnDFI, stringsFYfT07, {from: accounts[1]});
		const uintIndjz38 = BigInt("197")
		const addressxgtkEKd = accounts[0]
		const addressYaMEDO1 = accounts[0]
		const uintOJgzeEP = BigInt("1443")
		const addressHHciDgG = accounts[2]
//		const boolQhHy4P = await GFCJrrIK0a.transferFrom.call(addressYaMEDO1, addressxgtkEKd, uintIndjz38, {from: accounts[4]});
//		const boolFE6AF55 = await GFCJrrIK0a.burnFrom.call(addressHHciDgG, uintOJgzeEP, {from: accounts[0]});

		await expect(GFCJrrIK0a.transferFrom.call(addressYaMEDO1, addressxgtkEKd, uintIndjz38, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintzzOizG = BigInt("1173")
		const stringAiel40e = "AclfmUw3oLCD5z1mbUqXXs8rw5"
		const stringffprzVt = "fenlYbGwSDTusuNRxkLbEQKbcyUyiuLCjrhydhDfGFo7R2A5WsrCWqmhdU7T4xFbR6eYjx2GC"
		const GFCnopPaCC = await GFC.new(uintzzOizG, stringAiel40e, stringffprzVt, {from: accounts[2]});
		const uintQvrhU9L = BigInt("342")
		const addressypJirAn = accounts[4]
		const bytezuuZ5zr = "0x0f1016191312061008070e14000d141a180b201a0712060909031c1c0e071c"
		const uintpbe1U5U = BigInt("945")
		const addressUouOd15 = accounts[2]
		const uintUotPfj = BigInt("317")
//		const boolszTbEfo = await GFCnopPaCC.burnFrom.call(addressypJirAn, uintQvrhU9L, {from: accounts[4]});
//		const boolMPfvq8l = await GFCnopPaCC.approveAndCall.call(addressUouOd15, uintpbe1U5U, bytezuuZ5zr, {from: accounts[4]});
//		const boollRh17Lz = await GFCnopPaCC.burn.call(uintUotPfj, {from: accounts[2]});

		await expect(GFCnopPaCC.burnFrom.call(addressypJirAn, uintQvrhU9L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintMCaLzP = BigInt("246")
		const stringFJxv5R = "rRuTk8IPrrlfgEYxHKIsy4JNYIRq1llZfu"
		const stringTE3SB0t = "PNQKGvV"
		const GFCsm129Jk = await GFC.new(uintMCaLzP, stringFJxv5R, stringTE3SB0t, {from: accounts[4]});
		const byteDbnUCsm = "0x1a04181817130a171518"
		const uintBCC2L01 = BigInt("934")
		const addressDQNnqd1 = "0x0000000000000000000000000000000000000001"
		const uintKWgHtw7 = BigInt("302")
		const addressvmYwygc = accounts[4]
		const uintTtwazDz = BigInt("1919")
		const addressATvAhvh = accounts[2]
//		const boolUA9udVV = await GFCsm129Jk.approveAndCall.call(addressDQNnqd1, uintBCC2L01, byteDbnUCsm, {from: accounts[1]});
//		const boolXtRjk4 = await GFCsm129Jk.burnFrom.call(addressvmYwygc, uintKWgHtw7, {from: accounts[4]});
//		const boolHcGD7pW = await GFCsm129Jk.burnFrom.call(addressATvAhvh, uintTtwazDz, {from: accounts[4]});

		await expect(GFCsm129Jk.approveAndCall.call(addressDQNnqd1, uintBCC2L01, byteDbnUCsm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintNQwy4Yl = BigInt("1450")
		const stringzWDkdnE = "aEpAZiDtFD8Iu1SazBGfaBoixiScNhGUurQnA0Umr3mqi1MV"
		const stringqM0xAHr = "BYyN7hESK9EQw8tUrWx5MvRsATzTGs5vI9PqB6oOpcQQz3kADDKloRosguUaDmn5axRRBetMGF1MW2jkaVDM7LG"
		const GFCgi4AGjB = await GFC.new(uintNQwy4Yl, stringzWDkdnE, stringqM0xAHr, {from: accounts[3]});
		const uintNmH89ZN = BigInt("1135")
		const uintFLZJql = BigInt("1740")
		const addresssbQaJt = accounts[3]
		const addressKFcmKLM = accounts[3]
		const uintz11e9c7 = BigInt("1320")
		const addresskDysOsn = accounts[0]
		const byteBEYdu4C = "0x141a"
		const uintA1B7qBU = BigInt("406")
		const addressENje7RX = accounts[3]
//		const boolQsIGtkk = await GFCgi4AGjB.burn.call(uintNmH89ZN, {from: accounts[5]});
//		const boolOIxPIM2 = await GFCgi4AGjB.transferFrom.call(addressKFcmKLM, addresssbQaJt, uintFLZJql, {from: accounts[2]});
//		const boolra66y78 = await GFCgi4AGjB.burnFrom.call(addresskDysOsn, uintz11e9c7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolA642CF9 = await GFCgi4AGjB.approveAndCall.call(addressENje7RX, uintA1B7qBU, byteBEYdu4C, {from: accounts[3]});

		await expect(GFCgi4AGjB.burn.call(uintNmH89ZN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintr5cewPn = BigInt("264")
		const stringUchnDFI = "aXLC7oqHY"
		const stringsFYfT07 = "6zxVhxJlENUQftgk3HOOxggMECHaaQnnpuYmGIvmSPqicF"
		const GFCJrrIK0a = await GFC.new(uintr5cewPn, stringUchnDFI, stringsFYfT07, {from: accounts[1]});
		const uintMfOKWk = BigInt("1172")
		const addressvUEwUl = accounts[0]
		const uintn5xQtw7 = BigInt("197")
		const addressdJcIZi7 = accounts[1]
		const addressDyfXm6a = accounts[0]
		const bytefazwnbb = "0x020d140a021b1f1c0d1f1316200906011e0913110a"
		const uinthDEkCuS = BigInt("1239")
		const addressePyJ3Wk = accounts[2]
		const uintnp37Osf = BigInt("1443")
		const addressvODUZgT = accounts[2]
//		const boolBcPfoP = await GFCJrrIK0a.transfer.call(addressvUEwUl, uintMfOKWk, {from: accounts[0]});
//		const boolQhHy4P = await GFCJrrIK0a.transferFrom.call(addressDyfXm6a, addressdJcIZi7, uintn5xQtw7, {from: accounts[4]});
//		const boolnOFQqnq = await GFCJrrIK0a.approveAndCall.call(addressePyJ3Wk, uinthDEkCuS, bytefazwnbb, {from: accounts[1]});
//		const boolFE6AF55 = await GFCJrrIK0a.burnFrom.call(addressvODUZgT, uintnp37Osf, {from: accounts[0]});

		await expect(GFCJrrIK0a.transfer.call(addressvUEwUl, uintMfOKWk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintxbKNThs = BigInt("1798")
		const stringnK6QGVF = "WwyFCPpkFvyUF9gZsKrKAUGgnVAn286NRrPEwG3g7jU9TfX8jPCdg"
		const stringZbr7pcj = "M6rbncz61YjwyGFq9FGAqXXAygQKfzROtqHcGs"
		const GFCkJlUwJc = await GFC.new(uintxbKNThs, stringnK6QGVF, stringZbr7pcj, {from: "0x0000000000000000000000000000000000000001"});
		const uintT7u0Nrx = BigInt("37")
		const uintL9pX1uF = BigInt("178")
		const addressnMJmi3y = accounts[0]
		const byteHBRaP1 = "0x030c1209201608"
		const uintu9XckO = BigInt("1804")
		const addressel98fto = accounts[3]
		const boolECrBvq7 = await GFCkJlUwJc.burn.call(uintT7u0Nrx, {from: accounts[1]});
		const booluY5OLwL = await GFCkJlUwJc.approve.call(addressnMJmi3y, uintL9pX1uF, {from: accounts[3]});
		const bool5d0c0R = await GFCkJlUwJc.approveAndCall.call(addressel98fto, uintu9XckO, byteHBRaP1, {from: accounts[0]});
	});
})