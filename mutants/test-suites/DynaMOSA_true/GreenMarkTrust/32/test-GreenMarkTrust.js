const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintEkx8mqC = BigInt("815")
		const stringxMKtgX = "p7UgEStXUDxd7BvjBaUeWTFzLtlgeinSpao5vpNPIkEKNdf"
		const stringE4dLkK = "HeDnYaOQve19jgQOsS1p1C6CpUzsxHQZj7QhcdA6sYgUFkj46MMjGPkioWnhYQFtzBn9Hs0VNKoPBsII"
		const GreenMarkTrustPy40O0T = await GreenMarkTrust.new(uintEkx8mqC, stringxMKtgX, stringE4dLkK, {from: accounts[3]});
		const uintIMQiAv = BigInt("1386")
		const addressvqDl1F = accounts[2]
		const uintUOOLhjP = BigInt("560")
		const addressC0QlxgU = "0x0000000000000000000000000000000000000001"
		const uintKH3Z0P = BigInt("1608")
		const addressVqXige = accounts[3]
		const addresseFphvhI = accounts[3]
		const uintIFdUJXe = BigInt("1207")
		const uintb4MDUH = BigInt("1016")
//		const boolmKdnalk = await GreenMarkTrustPy40O0T.burnFrom.call(addressvqDl1F, uintIMQiAv, {from: accounts[3]});
//		const boolZErvhSp = await GreenMarkTrustPy40O0T.transfer.call(addressC0QlxgU, uintUOOLhjP, {from: accounts[3]});
//		const booluziOyRd = await GreenMarkTrustPy40O0T.transferFrom.call(addresseFphvhI, addressVqXige, uintKH3Z0P, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqDyd4VC = await GreenMarkTrustPy40O0T.burn.call(uintIFdUJXe, {from: accounts[0]});
//		const booly7hZ9hp = await GreenMarkTrustPy40O0T.burn.call(uintb4MDUH, {from: accounts[1]});

		await expect(GreenMarkTrustPy40O0T.burnFrom.call(addressvqDl1F, uintIMQiAv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvHo6adh = BigInt("1085")
		const stringiyXNxPc = "yjFqYuAzY5NDQAzNRhaUEJCa9LbHdCFqKacU50vSdw6itqtQQqKAOa"
		const stringp5Xg2Sr = "0oVm0vicz6LPOE8cLghY65h7bRDrUnzcwUFoQnRlpptlY2aRavHGRs02qqznHb"
		const GreenMarkTrustzJRrh6x = await GreenMarkTrust.new(uintvHo6adh, stringiyXNxPc, stringp5Xg2Sr, {from: accounts[3]});
		const uintO2aSHuJ = BigInt("1")
		const addressnS6HcF6 = accounts[2]
		const addressKOajfGg = accounts[0]
		const uintTl4qnOB = BigInt("1459")
		const address62G96V = accounts[1]
		const uintagU35ZK = BigInt("1977")
		const addressRnxXvz = accounts[5]
		const addressNLR7aex = accounts[4]
		const uintNMLY0Gx = BigInt("1061")
		const addressSrb9rfK = accounts[0]
//		const boolZVLe7R = await GreenMarkTrustzJRrh6x.transferFrom.call(addressKOajfGg, addressnS6HcF6, uintO2aSHuJ, {from: accounts[3]});
//		const booleUSDVCa = await GreenMarkTrustzJRrh6x.approve.call(address62G96V, uintTl4qnOB, {from: accounts[3]});
//		const boolkBzD4rC = await GreenMarkTrustzJRrh6x.transferFrom.call(addressNLR7aex, addressRnxXvz, uintagU35ZK, {from: accounts[3]});
//		const boolBu5aqaI = await GreenMarkTrustzJRrh6x.burnFrom.call(addressSrb9rfK, uintNMLY0Gx, {from: accounts[1]});

		await expect(GreenMarkTrustzJRrh6x.transferFrom.call(addressKOajfGg, addressnS6HcF6, uintO2aSHuJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintOBpa97k = BigInt("1520")
		const stringBnb60Ji = "X0FBOv4LlWbq3I"
		const stringPedtRTu = "JPwBxWkF3LYM"
		const GreenMarkTrustrsQtiBw = await GreenMarkTrust.new(uintOBpa97k, stringBnb60Ji, stringPedtRTu, {from: accounts[2]});
		const uintEuW9BlI = BigInt("1034")
		const addressTkAXZeV = accounts[1]
		const byteV52SyEL = "0x0a011309051f0e040901041707111b1308030e1d1b1b1a111508001d090617"
		const uintKkvx4VJ = BigInt("293")
		const addressdrcggKS = accounts[3]
		const byteuSGYR8S = "0x080d1d06091d09161f140a15010713170b15180e191a"
		const uintymxVlKr = BigInt("1472")
		const addressLLIbisv = accounts[1]
		const boolOI6JPac = await GreenMarkTrustrsQtiBw.approve.call(addressTkAXZeV, uintEuW9BlI, {from: accounts[4]});
//		const boolrwPwAbs = await GreenMarkTrustrsQtiBw.approveAndCall.call(addressdrcggKS, uintKkvx4VJ, byteV52SyEL, {from: accounts[4]});
//		const boolZal30cS = await GreenMarkTrustrsQtiBw.approveAndCall.call(addressLLIbisv, uintymxVlKr, byteuSGYR8S, {from: accounts[5]});

		assert.equal(boolOI6JPac, true)
		await expect(GreenMarkTrustrsQtiBw.approveAndCall.call(addressdrcggKS, uintKkvx4VJ, byteV52SyEL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintPsgb7fs = BigInt("98")
		const stringno2cXJ = "wX3lgQFUOHlsJy9t7joKaUE1T543MKNJVexsqeM3EfpiGW8XqejiWTaDeKuoYA"
		const stringBHQaLBn = "VOfc7eHOQCLVNu"
		const GreenMarkTrustoKoUP1W = await GreenMarkTrust.new(uintPsgb7fs, stringno2cXJ, stringBHQaLBn, {from: "0x0000000000000000000000000000000000000001"});
		const uintTrN98h7 = BigInt("1666")
		const addressJixdyv0 = accounts[4]
		const uintul3ARxQ = BigInt("1623")
		const addressf35UmzK = accounts[1]
		const addressNxmvgD1 = accounts[1]
		const byteoIWhLaE = "0x120e031a16"
		const uintQdzWuXO = BigInt("1950")
		const addressYrav8F3 = accounts[1]
		const uintKkRz2RH = BigInt("0")
		const uintHYqndmR = BigInt("763")
		const boolsNYlsCY = await GreenMarkTrustoKoUP1W.burnFrom.call(addressJixdyv0, uintTrN98h7, {from: accounts[0]});
		const boolHQEMhD = await GreenMarkTrustoKoUP1W.transferFrom.call(addressNxmvgD1, addressf35UmzK, uintul3ARxQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolimPp1Cs = await GreenMarkTrustoKoUP1W.approveAndCall.call(addressYrav8F3, uintQdzWuXO, byteoIWhLaE, {from: accounts[1]});
		const booljbq6PRQ = await GreenMarkTrustoKoUP1W.burn.call(uintKkRz2RH, {from: accounts[1]});
		const boolX37TBfX = await GreenMarkTrustoKoUP1W.burn.call(uintHYqndmR, {from: accounts[0]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintUW7QRQ = BigInt("595")
		const stringRjEFqNi = "pecaq7"
		const stringTCmlKcU = "gPXPiV58UyTOaepDedCbxjNh"
		const GreenMarkTrustGuAdlJ = await GreenMarkTrust.new(uintUW7QRQ, stringRjEFqNi, stringTCmlKcU, {from: accounts[0]});
		const uintUcYh1je = BigInt("1593")
		const addressAUDauNf = accounts[0]
		const uintuIhsrEq = BigInt("2017")
		const addressmbl4xv4 = accounts[2]
		const uintIBkVi98 = BigInt("162")
		const addressqATOdy = accounts[1]
		const uintdOoPPuS = BigInt("565")
		const addressBEFGFsM = accounts[4]
		const booliKt2CB0 = await GreenMarkTrustGuAdlJ.approve.call(addressAUDauNf, uintUcYh1je, {from: "0x0000000000000000000000000000000000000001"});
		const booltSYfIgl = await GreenMarkTrustGuAdlJ.approve.call(addressmbl4xv4, uintuIhsrEq, {from: accounts[3]});
		const booljAlOKpX = await GreenMarkTrustGuAdlJ.approve.call(addressqATOdy, uintIBkVi98, {from: accounts[4]});
//		const boolS4Wtnfh = await GreenMarkTrustGuAdlJ.transfer.call(addressBEFGFsM, uintdOoPPuS, {from: accounts[2]});

		assert.equal(booliKt2CB0, true)
		assert.equal(booljAlOKpX, true)
		assert.equal(booltSYfIgl, true)
		await expect(GreenMarkTrustGuAdlJ.transfer.call(addressBEFGFsM, uintdOoPPuS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintE7CbN0C = BigInt("1092")
		const stringQmXRFP3 = "uyAAxzWgHnS4z31"
		const stringcXsMSoJ = "b6a1y2d9RDlzHWlOQa6lLp5QeyTsvM8ua8HKBE9Lv7w7bPtSpn9ATDiEApOUVbqATAv4PEnB47H96Sdikc7ruLGVmjIJ8Ca9"
		const GreenMarkTruste2dlt8w = await GreenMarkTrust.new(uintE7CbN0C, stringQmXRFP3, stringcXsMSoJ, {from: accounts[3]});
		const uintJxIRgu2 = BigInt("1201")
		const uintGoNDk0H = BigInt("1758")
		const addressJvux6eU = accounts[4]
		const byteSY4BHlw = "0x091f12"
		const uintxxKymsg = BigInt("691")
		const addressQcCFMxj = accounts[4]
		const byteUwooYub = "0x03190f0b0910150e0420051e10120d05031d0b0613181d1b1a0d"
		const uintsSTinqb = BigInt("1799")
		const addressBR4G2JH = accounts[0]
		const byteAjEMHW = "0x10080818050e1e"
		const uintmzPOyF = BigInt("263")
		const addressEmzQcfX = accounts[3]
		const boolMLNP5NI = await GreenMarkTruste2dlt8w.burn.call(uintJxIRgu2, {from: accounts[3]});
		const boolI35Z8AZ = await GreenMarkTruste2dlt8w.approve.call(addressJvux6eU, uintGoNDk0H, {from: accounts[0]});
//		const boolSVVavMV = await GreenMarkTruste2dlt8w.approveAndCall.call(addressQcCFMxj, uintxxKymsg, byteSY4BHlw, {from: accounts[0]});
//		const boolzu79b9 = await GreenMarkTruste2dlt8w.approveAndCall.call(addressBR4G2JH, uintsSTinqb, byteUwooYub, {from: accounts[5]});
//		const boolrfw0KEW = await GreenMarkTruste2dlt8w.approveAndCall.call(addressEmzQcfX, uintmzPOyF, byteAjEMHW, {from: accounts[0]});

		assert.equal(boolI35Z8AZ, true)
		assert.equal(boolMLNP5NI, true)
		await expect(GreenMarkTruste2dlt8w.approveAndCall.call(addressQcCFMxj, uintxxKymsg, byteSY4BHlw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintFHEdI7e = BigInt("1648")
		const stringjRzt9Km = "3DIWxJxYLVxdy5put7LS5rSCqJjQw7pn2WA3ty6vhzZ5Tu4TVYvmcHQCNoefoaxbJmec4uGnydLQ"
		const stringwdIDoI0 = "InmgjgKGi4cFHDMQss48ML5kRqYC4MIOpYotMdByBygBXCsxTo7jEDDwvCN4dWBf6eR7DNAM6"
		const GreenMarkTrustNpXGjO = await GreenMarkTrust.new(uintFHEdI7e, stringjRzt9Km, stringwdIDoI0, {from: accounts[0]});
		const uintAUruIrK = BigInt("861")
		const addressE316AN = accounts[0]
		const uintfv5zaUm = BigInt("1729")
		const byterbJ18h = "0x1c021208141417001107091c1f080d1809"
		const uintAhLW8w = BigInt("806")
		const addressdQi88xo = accounts[3]
		const uintH4zNpPE = BigInt("1616")
		const addresspRlro6c = accounts[4]
//		const boolyLQNm09 = await GreenMarkTrustNpXGjO.burnFrom.call(addressE316AN, uintAUruIrK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolU5xgpld = await GreenMarkTrustNpXGjO.burn.call(uintfv5zaUm, {from: accounts[2]});
//		const boolhKEgHr = await GreenMarkTrustNpXGjO.approveAndCall.call(addressdQi88xo, uintAhLW8w, byterbJ18h, {from: accounts[4]});
//		const boolxY1raAa = await GreenMarkTrustNpXGjO.burnFrom.call(addresspRlro6c, uintH4zNpPE, {from: accounts[2]});

		await expect(GreenMarkTrustNpXGjO.burnFrom.call(addressE316AN, uintAUruIrK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintTs6cu78 = BigInt("774")
		const stringNibrGE5 = "bd8dTaGomAehnX3H1EvL3teOxRAurd7Np3YTnPCPLiCySS7vdbcp5JKjopHNbqSy3C4fi0J"
		const stringaPixkg2 = "FKgyKgEneGxUi7XHRjWxWwqIhNosOETmyLyC6f13STd6KlVblr"
		const GreenMarkTrustb1E6XQC = await GreenMarkTrust.new(uintTs6cu78, stringNibrGE5, stringaPixkg2, {from: accounts[0]});
		const uintY3t7qcA = BigInt("416")
		const addresstBdDH6I = accounts[3]
		const uinte9KXtBx = BigInt("12")
		const addressAFGySk7 = "0x0000000000000000000000000000000000000001"
		const uintTs1F2Il = BigInt("1392")
		const addressySNUyWu = accounts[1]
		const addressfW7M8mh = accounts[3]
		const uintkIoNWC9 = BigInt("1841")
		const addressvVaxEEN = accounts[4]
		const uintGr9tHA = BigInt("1674")
		const addressmIN081J = accounts[2]
		const addressR77PbL = accounts[1]
		const boolv1wqhP = await GreenMarkTrustb1E6XQC.transfer.call(addresstBdDH6I, uintY3t7qcA, {from: accounts[0]});
//		const boolhaxbbiB = await GreenMarkTrustb1E6XQC.transfer.call(addressAFGySk7, uinte9KXtBx, {from: accounts[4]});
//		const boolEUfKpAq = await GreenMarkTrustb1E6XQC.transferFrom.call(addressfW7M8mh, addressySNUyWu, uintTs1F2Il, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbj9WRTV = await GreenMarkTrustb1E6XQC.approve.call(addressvVaxEEN, uintkIoNWC9, {from: accounts[3]});
//		const boolVzG5NCX = await GreenMarkTrustb1E6XQC.transferFrom.call(addressR77PbL, addressmIN081J, uintGr9tHA, {from: accounts[3]});

		assert.equal(boolv1wqhP, true)
		await expect(GreenMarkTrustb1E6XQC.transfer.call(addressAFGySk7, uinte9KXtBx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})