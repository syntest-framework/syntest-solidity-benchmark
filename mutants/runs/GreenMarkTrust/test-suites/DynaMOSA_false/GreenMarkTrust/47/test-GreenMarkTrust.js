const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintpKA4Ety = BigInt("1865")
		const stringKhRW3M = "MBeSfkbr7S9Om4tfes"
		const stringEg44IKv = "iFJu3cFTIyZ7HJCyD"
		const GreenMarkTrustJoX53Je = await GreenMarkTrust.new(uintpKA4Ety, stringKhRW3M, stringEg44IKv, {from: "0x0000000000000000000000000000000000000001"});
		const bytevX4gqiD = "0x070411200512011c110a07031c15190814071304170715031c"
		const uintaRyjdna = BigInt("1752")
		const addressArZ27Yw = accounts[3]
		const uintlNx8Ncf = BigInt("385")
		const addressCFcRINQ = accounts[3]
		const uintJHDsbd = BigInt("450")
		const addressrsKM71v = accounts[4]
		const addressTixpUCB = accounts[3]
		const uintqRX9STz = BigInt("1411")
		const addressFH35jOn = accounts[2]
		const addresspTivnKB = accounts[4]
		const uintW2Ae7gt = BigInt("164")
		const addressrfATSRs = "0x0000000000000000000000000000000000000001"
		const boolIWDUJGs = await GreenMarkTrustJoX53Je.approveAndCall.call(addressArZ27Yw, uintaRyjdna, bytevX4gqiD, {from: accounts[2]});
		const boolDGLiLPC = await GreenMarkTrustJoX53Je.approve.call(addressCFcRINQ, uintlNx8Ncf, {from: accounts[2]});
		const boollDVjTbg = await GreenMarkTrustJoX53Je.transferFrom.call(addressTixpUCB, addressrsKM71v, uintJHDsbd, {from: accounts[4]});
		const boolyRfCIjZ = await GreenMarkTrustJoX53Je.transferFrom.call(addresspTivnKB, addressFH35jOn, uintqRX9STz, {from: "0x0000000000000000000000000000000000000001"});
		const boolHuXqsE = await GreenMarkTrustJoX53Je.approve.call(addressrfATSRs, uintW2Ae7gt, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GreenMarkTrust', async () => {
		const uintHDAWMwT = BigInt("536")
		const stringJhOTDBP = "Slwq8SXia0VqVHyY1AhnavrgS4vutTYS4ysC7r4g8jBNPUHakJPjyW1b5z7LAxMy6wlJMsc6wa1Mj8Gmadi6Id0f8Dm3qilumE"
		const stringhxFA5Pn = "W3TqoFVBof5aTiQsOaQqbJGM6Hsj7z7az4gn90BjqJ28jhALoZaWoD7Ghacr"
		const GreenMarkTrustaBNJvRs = await GreenMarkTrust.new(uintHDAWMwT, stringJhOTDBP, stringhxFA5Pn, {from: accounts[1]});
		const byteHnKFtpO = "0x0a200414090e061a07090d1405131318041f0d1c1520110f200115"
		const uintBnQD0o9 = BigInt("2024")
		const addressVtGVtv = accounts[1]
		const bytew0ckT4t = "0x141301191f061a0918180e19"
		const uintuznAhco = BigInt("390")
		const addressmShhrpn = accounts[1]
		const byteRKVT3rV = "0x1319170e010d180e0b1f1a14020f"
		const uintu12EKuj = BigInt("310")
		const addressYOwHFBf = accounts[1]
		const uintKjvN7iw = BigInt("387")
		const addressQOMBijE = accounts[3]
		const addressmALu7dy = accounts[0]
		const uintXQDVPFb = BigInt("633")
		const addressqGCeKpG = accounts[1]
		const boolz6amxNV = await GreenMarkTrustaBNJvRs.approveAndCall.call(addressVtGVtv, uintBnQD0o9, byteHnKFtpO, {from: accounts[0]});
		const boolCE411En = await GreenMarkTrustaBNJvRs.approveAndCall.call(addressmShhrpn, uintuznAhco, bytew0ckT4t, {from: accounts[3]});
		const boolU4NKgFQ = await GreenMarkTrustaBNJvRs.approveAndCall.call(addressYOwHFBf, uintu12EKuj, byteRKVT3rV, {from: accounts[3]});
		const boolvh7SWV1 = await GreenMarkTrustaBNJvRs.transferFrom.call(addressmALu7dy, addressQOMBijE, uintKjvN7iw, {from: accounts[2]});
		const boolChfk5z1 = await GreenMarkTrustaBNJvRs.transfer.call(addressqGCeKpG, uintXQDVPFb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustaBNJvRs.approveAndCall.call(addressVtGVtv, uintBnQD0o9, byteHnKFtpO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintd6XgIu5 = BigInt("208")
		const stringm1m5IHU = "DDWzwzFE0erFPyhcXbfRbaA78fdWjeNSFEaUJn5aWzFYLSXPG6zt2W6ZhLozbE5fY3KTj9EDGFf8Y9fReGaA6frJ9PKs5KqnLF"
		const stringv7J4Pz0 = "gFa5cvWRISD2UFKCHGRXYzrYNfGc6IVjfamOZvjuAorTGuJrMDdMxcdsRmSYEcIXZ9m9lfwrbZmqr8"
		const GreenMarkTrustVscqiwj = await GreenMarkTrust.new(uintd6XgIu5, stringm1m5IHU, stringv7J4Pz0, {from: accounts[2]});
		const uintUtopPIo = BigInt("560")
		const uintCPr2Oxe = BigInt("1790")
		const addresso8HW41r = accounts[4]
		const addressl2n75Mt = accounts[1]
		const uintSPauRpF = BigInt("802")
		const addresseOvCHiR = accounts[1]
		const uintm9ARkPj = BigInt("1773")
		const addresszCvNLdP = accounts[1]
		const uintkGopv8j = BigInt("1569")
		const boolq7Y7Z5B = await GreenMarkTrustVscqiwj.burn.call(uintUtopPIo, {from: accounts[2]});
		const booliZ9B6F = await GreenMarkTrustVscqiwj.transferFrom.call(addressl2n75Mt, addresso8HW41r, uintCPr2Oxe, {from: accounts[3]});
		const boolC09wTdE = await GreenMarkTrustVscqiwj.approve.call(addresseOvCHiR, uintSPauRpF, {from: "0x0000000000000000000000000000000000000001"});
		const boollRc2Etl = await GreenMarkTrustVscqiwj.burnFrom.call(addresszCvNLdP, uintm9ARkPj, {from: accounts[3]});
		const boolzcyo4G = await GreenMarkTrustVscqiwj.burn.call(uintkGopv8j, {from: accounts[0]});

		assert.equal(boolq7Y7Z5B, true)
		await expect(GreenMarkTrustVscqiwj.transferFrom.call(addressl2n75Mt, addresso8HW41r, uintCPr2Oxe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintFOKZkG = BigInt("315")
		const stringmbXQvPN = "FSnBM7pQyuaqhmn5piDJWuwAYrBJsOlshloG5ENnWOnX4B1eRnUsSCfkIlSDBOWIpY2RRQ30yQc3OfYKtQASa49LwYcrb"
		const stringZFgXr4S = "mJUEBuwyrKFjDSG2yLws7IlKNYqm41rOwYEUKTNqCD6mMBr2LTRIC"
		const GreenMarkTrustOOHCs4a = await GreenMarkTrust.new(uintFOKZkG, stringmbXQvPN, stringZFgXr4S, {from: accounts[4]});
		const uintwp6hzN = BigInt("1586")
		const addressHeUutjL = accounts[5]
		const uintizXFqGl = BigInt("312")
		const addresso3HHfI = accounts[3]
		const boolTJglBW7 = await GreenMarkTrustOOHCs4a.transfer.call(addressHeUutjL, uintwp6hzN, {from: accounts[2]});
		const boolEC4YPdZ = await GreenMarkTrustOOHCs4a.approve.call(addresso3HHfI, uintizXFqGl, {from: accounts[1]});

		await expect(GreenMarkTrustOOHCs4a.transfer.call(addressHeUutjL, uintwp6hzN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintAeZRbuQ = BigInt("1066")
		const stringAvA3OI1 = "0OPT9f6ujtPMryCSh11kSXjGv7X783UwhyGjZKZdbaDEtGStOqLvzlMdojD"
		const string3UhPxY = "laMYHxZkyldGwLtkAOVooULl3MnCBDyTMJXAchF5r6gTsskfW1aWrLOrcLQYHS4Ed"
		const GreenMarkTrustJ3CFu7g = await GreenMarkTrust.new(uintAeZRbuQ, stringAvA3OI1, string3UhPxY, {from: accounts[3]});
		const uintLPkNVYg = BigInt("577")
		const addressnSEkFg8 = accounts[0]
		const uintdJiO0Ob = BigInt("2033")
		const addresskL8fWI7 = accounts[0]
		const boolw8CV8aQ = await GreenMarkTrustJ3CFu7g.burnFrom.call(addressnSEkFg8, uintLPkNVYg, {from: accounts[5]});
		const boolXa9eOQv = await GreenMarkTrustJ3CFu7g.approve.call(addresskL8fWI7, uintdJiO0Ob, {from: accounts[0]});

		await expect(GreenMarkTrustJ3CFu7g.burnFrom.call(addressnSEkFg8, uintLPkNVYg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})