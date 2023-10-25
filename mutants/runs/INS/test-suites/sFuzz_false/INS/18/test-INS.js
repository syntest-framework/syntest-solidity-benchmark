const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uinthTocCXD = BigInt("2034")
		const stringniXZ9W0 = "e3AvQsAis6scXUIAUq2XxoVkhwCpgtQpBY130nlfGBSc"
		const stringt3eY2Q = "16ZWCZPr9jvBZ1V2Pr6JBshWPHS"
		const INSRngfQG = await INS.new(uinthTocCXD, stringniXZ9W0, stringt3eY2Q, {from: accounts[3]});
		const byteTcKZdMl = "0x140507021e0900121f08000402031b011017201909030b190e1013161e13"
		const uinthxlIW0 = BigInt("237")
		const addressf9sBmw6 = accounts[2]
		const uintOa5vp4L = BigInt("1977")
		const uintfwhjN9F = BigInt("893")
		const boolFQGpJED = await INSRngfQG.approveAndCall.call(addressf9sBmw6, uinthxlIW0, byteTcKZdMl, {from: accounts[2]});
		const boolb94CgFq = await INSRngfQG.burn.call(uintOa5vp4L, {from: accounts[0]});
		const boolY6FX71b = await INSRngfQG.burn.call(uintfwhjN9F, {from: accounts[3]});

		await expect(INSRngfQG.approveAndCall.call(addressf9sBmw6, uinthxlIW0, byteTcKZdMl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintONDYSBB = BigInt("1897")
		const stringq10uewI = "hfojLwOhrFfcXhgiKHcgD9fpIRscaPy4ypaUBeq20mTZfbpowzwh3XTGv6epGXTil"
		const stringAzfKwSj = "6qw0L4c7D6nnmkCjSfBodGzOODmYZom"
		const INSMnIgcq1 = await INS.new(uintONDYSBB, stringq10uewI, stringAzfKwSj, {from: accounts[3]});
		const uintwqjV6P = BigInt("1315")
		const addressSb3bOQg = accounts[1]
		const addresslpWGEDK = accounts[4]
		const uintNVa7eWj = BigInt("578")
		const uintFOZmIR7 = BigInt("487")
		const addressFZiWq5n = accounts[0]
		const addressjUtiJfF = accounts[4]
		const byteCS9rEi1 = "0x17011812160516000e0d1c1e11180b1d05011e1a"
		const uintCAl4zE2 = BigInt("516")
		const address1UZ3KR = accounts[0]
		const boolsd4dqK = await INSMnIgcq1.transferFrom.call(addresslpWGEDK, addressSb3bOQg, uintwqjV6P, {from: accounts[2]});
		const boolmeVI2D6 = await INSMnIgcq1.burn.call(uintNVa7eWj, {from: accounts[4]});
		const boolFy3COh = await INSMnIgcq1.transferFrom.call(addressjUtiJfF, addressFZiWq5n, uintFOZmIR7, {from: accounts[4]});
		const boolpLNMU2a = await INSMnIgcq1.approveAndCall.call(address1UZ3KR, uintCAl4zE2, byteCS9rEi1, {from: accounts[1]});

		await expect(INSMnIgcq1.transferFrom.call(addresslpWGEDK, addressSb3bOQg, uintwqjV6P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintLYvKkv = BigInt("1518")
		const stringWgJmw1 = "HbryAOClDSWEuFPIpbsvVLvRlf1Qj7nsKbpGxc8NPNEVdGnSani1ebaPzF4IG2rehSJeKaWVaBCR2yRh2WclHmJZ"
		const stringNXIUh1x = "ao22j24gp3aoZySAWuA5kMwocpMYjHTOyNfcThiOU1u1hVWNewYuiYCJcSckNZtttFtNpHF5y4"
		const INSGc9BPYm = await INS.new(uintLYvKkv, stringWgJmw1, stringNXIUh1x, {from: accounts[4]});
		const uintZyK9p9 = BigInt("1611")
		const addressOWeduj = accounts[2]
		const uintQn8sqvD = BigInt("1951")
		const addressOGkf2gW = "0x0000000000000000000000000000000000000001"
		const uintrZcFYbd = BigInt("1257")
		const addressdSRfIad = accounts[1]
		const uintd3lrAYq = BigInt("1895")
		const boolkMbOuhM = await INSGc9BPYm.approve.call(addressOWeduj, uintZyK9p9, {from: accounts[0]});
		const booliyrgiN = await INSGc9BPYm.burnFrom.call(addressOGkf2gW, uintQn8sqvD, {from: accounts[5]});
		const boolCDkM61u = await INSGc9BPYm.burnFrom.call(addressdSRfIad, uintrZcFYbd, {from: accounts[0]});
		const boolbbrJdk1 = await INSGc9BPYm.burn.call(uintd3lrAYq, {from: accounts[4]});

		assert.equal(boolkMbOuhM, true)
		await expect(INSGc9BPYm.burnFrom.call(addressOGkf2gW, uintQn8sqvD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintZEBrb0 = BigInt("1621")
		const stringa60ylQK = "QPr8iK8PFYkrltd9hz9i8EmPGmq"
		const stringw07IufT = "glxnqijjDAlFnSMfjCjkbJgYbMWJjRArcSb21TjfbbeYEQd"
		const INSuRfNNv5 = await INS.new(uintZEBrb0, stringa60ylQK, stringw07IufT, {from: accounts[3]});
		const uintoV5BMdh = BigInt("1902")
		const addresslhM0SC = accounts[3]
		const uintDigpDnD = BigInt("79")
		const addressx7smph = accounts[1]
		const addressLGZiIdF = accounts[4]
		const uintUQ1gY8q = BigInt("434")
		const addressNJdiOFU = accounts[0]
		const byteAx5KyNB = "0x201d070b031b081a1a110e11070a17021e181d090411120116141915"
		const uintBPbOVS0 = BigInt("287")
		const addressyZO0ql = accounts[4]
		const uintxdCQNLR = BigInt("1654")
		const addressuVjE2Xm = accounts[2]
		const booliToNUgK = await INSuRfNNv5.transfer.call(addresslhM0SC, uintoV5BMdh, {from: accounts[5]});
		const boolNXGUdkm = await INSuRfNNv5.transferFrom.call(addressLGZiIdF, addressx7smph, uintDigpDnD, {from: accounts[4]});
		const boolQURrk8y = await INSuRfNNv5.approve.call(addressNJdiOFU, uintUQ1gY8q, {from: accounts[1]});
		const boolbQAl6d = await INSuRfNNv5.approveAndCall.call(addressyZO0ql, uintBPbOVS0, byteAx5KyNB, {from: accounts[3]});
		const boolrEh6nzf = await INSuRfNNv5.burnFrom.call(addressuVjE2Xm, uintxdCQNLR, {from: accounts[4]});

		await expect(INSuRfNNv5.transfer.call(addresslhM0SC, uintoV5BMdh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintCbbDwNZ = BigInt("1073")
		const stringpIzP0F = "kBKcVJC2VOfFq5qCkm6MIiQUkubGeHxU8TNvhKMuMoraRgj8It4wlmY1dThEBYyM6CAfpWyxu"
		const stringlZGv0u7 = "Dpm2pzwF3sARaVJm"
		const INSwVVUJo = await INS.new(uintCbbDwNZ, stringpIzP0F, stringlZGv0u7, {from: "0x0000000000000000000000000000000000000001"});
		const uintqqY3R9U = BigInt("68")
		const uintY5vp2RV = BigInt("1563")
		const addressJqwyma = "0x0000000000000000000000000000000000000001"
		const uintialazcy = BigInt("106")
		const addressnHl7COb = accounts[2]
		const uintfGsoALi = BigInt("1457")
		const addressr3NfAPi = accounts[4]
		const boolCkEFtv7 = await INSwVVUJo.burn.call(uintqqY3R9U, {from: accounts[3]});
		const boolEHiaWOa = await INSwVVUJo.transfer.call(addressJqwyma, uintY5vp2RV, {from: accounts[0]});
		const boolLtcFa7I = await INSwVVUJo.approve.call(addressnHl7COb, uintialazcy, {from: accounts[0]});
		const boolRSzTxuC = await INSwVVUJo.approve.call(addressr3NfAPi, uintfGsoALi, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for INS', async () => {
		const uintK98C1Th = BigInt("2034")
		const stringniXZ9W0 = "e3AvQsAis6scXUIAUq2XxoVkhwCpgtQpBY130nlfGBSc"
		const stringt3eY2Q = "16ZWCZPr9jvBZ1V2Pr6JBshWPHS"
		const INSRngfQG = await INS.new(uintK98C1Th, stringniXZ9W0, stringt3eY2Q, {from: accounts[3]});
		const uinthkvmINV = BigInt("893")
		const boolY6FX71b = await INSRngfQG.burn.call(uinthkvmINV, {from: accounts[3]});

		assert.equal(boolY6FX71b, true)
	});
})