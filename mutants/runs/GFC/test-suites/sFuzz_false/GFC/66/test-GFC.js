const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintLCLJobh = BigInt("1660")
		const stringkZK4PwE = "OSs2XqgsvDe"
		const stringzEJuW8K = "ib"
		const GFCjX3sPKq = await GFC.new(uintLCLJobh, stringkZK4PwE, stringzEJuW8K, {from: accounts[2]});
		const uintn0sE5Sh = BigInt("1442")
		const addresstLE5x82 = accounts[3]
		const uintRHMvPpx = BigInt("1675")
		const uintSoyqJa3 = BigInt("1890")
		const uintRAWGJB = BigInt("805")
		const uintBUC43A = BigInt("238")
		const address5urfoz = accounts[5]
		const uintti6wtGW = BigInt("1577")
		const addressm6O5Eqx = "0x0000000000000000000000000000000000000001"
		const boolPNmhvZL = await GFCjX3sPKq.transfer.call(addresstLE5x82, uintn0sE5Sh, {from: accounts[0]});
		const boolhEkhVVE = await GFCjX3sPKq.burn.call(uintRHMvPpx, {from: accounts[1]});
		const boolJsFYQV3 = await GFCjX3sPKq.burn.call(uintSoyqJa3, {from: accounts[0]});
		const boolb5O2XXr = await GFCjX3sPKq.burn.call(uintRAWGJB, {from: "0x0000000000000000000000000000000000000001"});
		const booldbjPwam = await GFCjX3sPKq.approve.call(address5urfoz, uintBUC43A, {from: accounts[4]});
		const boolTt82Z2 = await GFCjX3sPKq.approve.call(addressm6O5Eqx, uintti6wtGW, {from: accounts[0]});

		await expect(GFCjX3sPKq.transfer.call(addresstLE5x82, uintn0sE5Sh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintvIN2kv5 = BigInt("1691")
		const stringl63sOMt = "Ho4ZYIDSp"
		const stringuenjN2a = "OfeqPRDHCMeRzCKO4RkYzGf0b7WSyF0vrYoL"
		const GFCiAR5Lcs = await GFC.new(uintvIN2kv5, stringl63sOMt, stringuenjN2a, {from: accounts[0]});
		const uintofvYbS = BigInt("1594")
		const addressx9TLvX4 = accounts[3]
		const byteCizCQNe = "0x15070710170c0a0806121c17181a"
		const uintOJnnwFj = BigInt("1326")
		const addressxlAlgtN = accounts[4]
		const uintfayKfuC = BigInt("1891")
		const uintkF0cRkk = BigInt("1552")
		const addresssHEt6aB = accounts[5]
		const bytejVvPe4k = "0x071c0700000e130d090c1904110918040d1600011f0c1b"
		const uintSRqGVF6 = BigInt("1233")
		const addressS1lcDnt = accounts[1]
		const booliPBFckV = await GFCiAR5Lcs.burnFrom.call(addressx9TLvX4, uintofvYbS, {from: accounts[3]});
		const boolWFc4Vcy = await GFCiAR5Lcs.approveAndCall.call(addressxlAlgtN, uintOJnnwFj, byteCizCQNe, {from: accounts[1]});
		const boolc2SSsxK = await GFCiAR5Lcs.burn.call(uintfayKfuC, {from: "0x0000000000000000000000000000000000000001"});
		const boolYkY5HzZ = await GFCiAR5Lcs.burnFrom.call(addresssHEt6aB, uintkF0cRkk, {from: accounts[2]});
		const boold72UVPz = await GFCiAR5Lcs.approveAndCall.call(addressS1lcDnt, uintSRqGVF6, bytejVvPe4k, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCiAR5Lcs.burnFrom.call(addressx9TLvX4, uintofvYbS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintArl5cIU = BigInt("1544")
		const stringPa9RZYb = "qnLkLpTa"
		const stringmHuK0Yq = "jJdVmYqedgpk6NSVC99QW95fmg3zuA84audLassZNHtkWtDWvZzocI1q3enH687KLTQCyWN047xcUSmpawqym4V"
		const GFCpC4gGSz = await GFC.new(uintArl5cIU, stringPa9RZYb, stringmHuK0Yq, {from: accounts[0]});
		const uintgbsKnXJ = BigInt("689")
		const addressBCm8jF = accounts[0]
		const addressIlgRQzN = accounts[3]
		const uintyuohmhV = BigInt("1971")
		const addressR8AaZxU = accounts[0]
		const boolUtBxBg = await GFCpC4gGSz.transferFrom.call(addressIlgRQzN, addressBCm8jF, uintgbsKnXJ, {from: accounts[0]});
		const boolcFBXxj = await GFCpC4gGSz.burnFrom.call(addressR8AaZxU, uintyuohmhV, {from: accounts[0]});

		await expect(GFCpC4gGSz.transferFrom.call(addressIlgRQzN, addressBCm8jF, uintgbsKnXJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintfKTSbH2 = BigInt("1785")
		const stringzOrghjv = "YWra1x7EVWnxn4bpEhAhdgOx4cQ13kiWXc369BEEL7EnhNcPxEHDnSrNIynswhl3BwrVAlJHZqmVp"
		const stringzOswmSZ = "SgIGFIQftWrcqzbvYJrpjB5PW1ppodDzk91miPMNcldvLGJasr18MqZsDM806RCK4ofH9IVEeEYHukQXUY0s94"
		const GFCMAA1us = await GFC.new(uintfKTSbH2, stringzOrghjv, stringzOswmSZ, {from: accounts[3]});
		const uintutAD7WJ = BigInt("1929")
		const addressE2NrAwA = accounts[3]
		const uintjh9GAje = BigInt("437")
		const addresszYLRWiS = accounts[2]
		const boolnxRQNR = await GFCMAA1us.approve.call(addressE2NrAwA, uintutAD7WJ, {from: accounts[5]});
		const boolbBpPmMr = await GFCMAA1us.burnFrom.call(addresszYLRWiS, uintjh9GAje, {from: accounts[0]});

		assert.equal(boolnxRQNR, true)
		await expect(GFCMAA1us.burnFrom.call(addresszYLRWiS, uintjh9GAje, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintWzfkUHQ = BigInt("1410")
		const stringF8F6Rys = "Km6l2CZNNkgx6o"
		const stringc0gQQQG = "CEqPM0PbfT8rZpCVCa8mztgTrT3XVVlq1KWdOg3zTl8iAnGU5VzJNeFsV8"
		const GFC1IxO5m = await GFC.new(uintWzfkUHQ, stringF8F6Rys, stringc0gQQQG, {from: accounts[3]});
		const uintETQcpsu = BigInt("513")
		const addressTPSS4Ju = accounts[3]
		const uintBdWbTcn = BigInt("1368")
		const uintiYarJje = BigInt("1615")
		const addressoBRhCxT = accounts[3]
		const boolzPIpM6 = await GFC1IxO5m.approve.call(addressTPSS4Ju, uintETQcpsu, {from: accounts[1]});
		const boolikfsqo8 = await GFC1IxO5m.burn.call(uintBdWbTcn, {from: accounts[3]});
		const boolzh8fon7 = await GFC1IxO5m.transfer.call(addressoBRhCxT, uintiYarJje, {from: accounts[2]});

		assert.equal(boolikfsqo8, true)
		assert.equal(boolzPIpM6, true)
		await expect(GFC1IxO5m.transfer.call(addressoBRhCxT, uintiYarJje, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintcxOglkv = BigInt("2032")
		const stringXGBPCyQ = "bjuUKaPI0NxEn1TbpiNNs7zlYnWa9hXUCU45qmBtFY13wovfbKCG7VI93NjRhTtSHBJ6KBaVebsGidAVEGSoSxnz8oSP9eLx9D3"
		const stringUCPkvwR = "jJVcgJ17LO2YlrVZBnpdjYGxjIoPuZPWCouNVQ2ufRpGU5IOSz4MbTQ2V1WZTJ3y1Rha2zw"
		const GFCGP0M3f7 = await GFC.new(uintcxOglkv, stringXGBPCyQ, stringUCPkvwR, {from: accounts[2]});
		const byteFBwhsDY = "0x181f0e06060e2013160a1b0a070a011c04"
		const uintqLhjLgy = BigInt("1107")
		const addressJbkpETJ = accounts[4]
		const uintHLbOhRq = BigInt("1064")
		const addressdyr1M8t = accounts[3]
		const boolpwV7ZML = await GFCGP0M3f7.approveAndCall.call(addressJbkpETJ, uintqLhjLgy, byteFBwhsDY, {from: accounts[0]});
		const boolqb0rQlu = await GFCGP0M3f7.approve.call(addressdyr1M8t, uintHLbOhRq, {from: accounts[3]});

		await expect(GFCGP0M3f7.approveAndCall.call(addressJbkpETJ, uintqLhjLgy, byteFBwhsDY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintDaPgKXJ = BigInt("927")
		const stringIlCo2KE = "okVSVd"
		const stringyW9FUTM = "QPHjQqrGPfoSE9vJYJqiMH"
		const GFCxiZyfYo = await GFC.new(uintDaPgKXJ, stringIlCo2KE, stringyW9FUTM, {from: "0x0000000000000000000000000000000000000001"});
		const uintzleIJxl = BigInt("405")
		const uintiGEmufx = BigInt("732")
		const addressCq7sNAJ = accounts[3]
		const address2IWfUc = accounts[4]
		const byteIaaVc3c = "0x09121614010a1d0d190e00010f131f1b1613091412"
		const uint2NJU8d = BigInt("38")
		const addressMC1KHSU = accounts[2]
		const uintfgF1bB3 = BigInt("1677")
		const addressRbFCVKm = accounts[4]
		const addressUWTEiN = accounts[5]
		const uintLNUlAV1 = BigInt("1656")
		const addressEfgh07K = accounts[0]
		const boolcilHVYW = await GFCxiZyfYo.burn.call(uintzleIJxl, {from: accounts[4]});
		const boolFrnVDjD = await GFCxiZyfYo.transferFrom.call(address2IWfUc, addressCq7sNAJ, uintiGEmufx, {from: accounts[3]});
		const booldVWbZzg = await GFCxiZyfYo.approveAndCall.call(addressMC1KHSU, uint2NJU8d, byteIaaVc3c, {from: "0x0000000000000000000000000000000000000001"});
		const boolSY71JB = await GFCxiZyfYo.transferFrom.call(addressUWTEiN, addressRbFCVKm, uintfgF1bB3, {from: "0x0000000000000000000000000000000000000001"});
		const boolV22rmCj = await GFCxiZyfYo.approve.call(addressEfgh07K, uintLNUlAV1, {from: accounts[1]});
	});
})