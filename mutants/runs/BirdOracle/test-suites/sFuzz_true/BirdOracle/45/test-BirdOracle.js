const BirdOracle = artifacts.require("BirdOracle");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BirdOracle', (accounts) => {
	it('test for BirdOracle', async () => {
		const BirdOracleBEn9L1v = await BirdOracle.new({from: accounts[0]});
		const uintftV7DVq = BigInt("1333")
		const uintIlujaEE = BigInt("1965")
		const stringaXujDsX = "4qq6z5mfGrGqmRlzPo9jP"
		const stringfYHEqlI = "1wpF78lWxG2v27MmNO4Y4KMmD7JcLKhZQTAd08E7d0mvU2GWcMcrpsELswmaHvrrmmUihPS7gywyM7vfSWvB1VyIQ6Ot"
		const stringsGTaQL = "WKUxd4lMxeoOwLEDwq9MM5QcLwrU5z4tYK17DfqvqdWH3vjuq"
		const stringdJj9DNq = "8Wl1QoZigS5V6PWo3eWrY4ifR5JsiKvABxMsoGQgHnK88"
		const uintQZPR5Ar = BigInt("2011")
		const stringKCyG0Gd = "iVmi"
		const stringOqa4RvA = await BirdOracleBEn9L1v.substring.call(stringaXujDsX, uintIlujaEE, uintftV7DVq, {from: accounts[3]});
		const 
aG1bwdb = await BirdOracleBEn9L1v.newChainRequest.call(stringsGTaQL, stringfYHEqlI, {from: accounts[3]});
		const addressCiqVs1C = await BirdOracleBEn9L1v.parseAddr.call(stringdJj9DNq, {from: accounts[5]});
		const stringjWhsIP = await BirdOracleBEn9L1v.substring.call(stringKCyG0Gd, uintQZPR5Ar, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclevaZSuPq = await BirdOracle.new({from: accounts[4]});
		const stringP0Nerq0 = "vu8OBd4k0AIzY7ntShfFJUBI4caJC"
		const stringkZQe6wi = "nw9la50XY4B"
		const uintH9cKCGI = BigInt("1852")
		const uintmT6oV3K = BigInt("1122")
		const stringOTlLvFw = "gvU1SF2h66MJH1VXm3B5OARASIDmztD02kipICZnt037FTLq5UE98348nvcsS2qFhHkjheFXHYCPuQzNNgosAoxeXWwSmaBth0"
		const uintK3LACMy = await BirdOraclevaZSuPq.getRating.call({from: accounts[1]});
		const addressopeytxj = await BirdOraclevaZSuPq.parseAddr.call(stringP0Nerq0, {from: accounts[0]});
		const stringXCHOFJJ = await BirdOraclevaZSuPq.extractAddress.call(stringkZQe6wi, {from: accounts[2]});
		const 
R4mwSNt = await BirdOraclevaZSuPq.updatedChainRequest.call(uintmT6oV3K, uintH9cKCGI, {from: accounts[1]});
		const uintH59k638 = await BirdOraclevaZSuPq.getRatingByAddressString.call(stringOTlLvFw, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleGQywbIA = await BirdOracle.new({from: accounts[3]});
		const stringVYqef92 = "gpSs8cwDBEXtq1ZNA"
		const addressM92TIow = accounts[2]
		const addressxzJEmuy = accounts[5]
		const stringUaZPeiK = "OOmEymcRIkvk8vdtjhmnW2aF10TxzWwmjwnfkiLpldArJ8iA79RqSqgNTkLojeUZ9H1hiJFT4qt1"
		const stringKdSlm4 = await BirdOracleGQywbIA.extractAddress.call(stringVYqef92, {from: accounts[3]});
		const uintKixZKmz = await BirdOracleGQywbIA.getRatingByAddress.call(addressM92TIow, {from: accounts[2]});
		const uintKgvSRF0 = await BirdOracleGQywbIA.getRatingByAddress.call(addressxzJEmuy, {from: accounts[4]});
		const stringTIM3fr1 = await BirdOracleGQywbIA.extractAddress.call(stringUaZPeiK, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclejBeDzhs = await BirdOracle.new({from: accounts[4]});
		const stringyWdMVk = "RIMRl0qDX7PPhX9iSYJZ2AzzJpvsjDlXy6JXMvBLyR3Lpxd2bSlvlBNYUDGaNxVsr9rCF7B3g"
		const stringXGYteS = "8ik28rlFuYmIdHb7kp3FLvc828KBcvVkmTkOm4bUY5IkJwNiiU0fAwfxLPHPqGbg3kt"
		const stringFTAK0So = "xScCKWlFDq"
		const uintmk90GdU = BigInt("744")
		const uintf3kBldW = BigInt("450")
		const uintYM7Qgf6 = await BirdOraclejBeDzhs.getRating.call({from: accounts[0]});
		const addressCpb7j9l = await BirdOraclejBeDzhs.parseAddr.call(stringyWdMVk, {from: accounts[4]});
		const uintjb7J5w5 = await BirdOraclejBeDzhs.getRatingByAddressString.call(stringXGYteS, {from: accounts[1]});
		const stringALm3ac = await BirdOraclejBeDzhs.extractAddress.call(stringFTAK0So, {from: accounts[5]});
		const 
X113SXk = await BirdOraclejBeDzhs.updatedChainRequest.call(uintf3kBldW, uintmk90GdU, {from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclemGkH56h = await BirdOracle.new({from: accounts[3]});
		const uintIFc64CC = BigInt("1865")
		const uintLAdXA4S = BigInt("1409")
		const uintGdAwvXU = BigInt("946")
		const stringqDMVpOC = "oxdq0kiRTnE2II5DWnsjE7nKH9f"
		const stringYkfe1ag = "JzLZA6OnUk6KNFsajKpl7SB4PV4WCBWS4PyrlRBR4R9HcFgjhgcnTkPtWceGe8oq3tPO"
		const 
X7Vy0Rf = await BirdOraclemGkH56h.updatedChainRequest.call(uintLAdXA4S, uintIFc64CC, {from: accounts[2]});
		const stringWIlnvtC = await BirdOraclemGkH56h.substring.call(stringqDMVpOC, uintGdAwvXU, {from: accounts[0]});
		const address5sedYW = await BirdOraclemGkH56h.parseAddr.call(stringYkfe1ag, {from: accounts[4]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCnqR7D = await BirdOracle.new({from: accounts[4]});
		const addressC9ITzR3 = accounts[3]
		const stringjiOY9h9 = "GRbJuLXQeCb1G82yU73Ksy5866IyaaHwyNSfWgZQG8PKYw7Mhc3WDjYKM1ZrGD2jPrMQHwkKrivCjV18G6GfKYW4KD1"
		const uintmx9uVT = await BirdOracleyCnqR7D.getRatingByAddress.call(addressC9ITzR3, {from: accounts[2]});
		const stringfmMvx8K = await BirdOracleyCnqR7D.extractAddress.call(stringjiOY9h9, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleTNkdLS = await BirdOracle.new({from: accounts[3]});
		const uintBuT6xv = BigInt("1349")
		const stringN31ktS7 = "faDNWHokwhq7LJL8VM9PfKXCTf3UEUwwjxMkByfUsN1jyRSa9nHLr63n8Nqi6vkSKVxLtlFNuv439owsnNhUSbOL"
		const uintcwloNAr = BigInt("1323")
		const uintMbA7qKO = BigInt("596")
		const stringAFILEEv = "hcrHV23NM1GTVAIwqDdINJK9vwLArXzjnj9T6mxbneiBWiknSzTVNn7"
		const stringzgc57k = "XFGCGnkZpLSutItQ3cBCAsSGhITWpb54JqgpnfRp908YQs7K"
		const uintao8SahY = BigInt("911")
		const uintt0vOVF = BigInt("555")
		const uintIDgkXfU = await BirdOracleTNkdLS.getRating.call({from: accounts[1]});
		const stringfza9uK = await BirdOracleTNkdLS.substring.call(stringN31ktS7, uintBuT6xv, {from: accounts[3]});
		const 
L3RqOJ4 = await BirdOracleTNkdLS.updatedChainRequest.call(uintMbA7qKO, uintcwloNAr, {from: accounts[4]});
		const addressHyV8OBn = await BirdOracleTNkdLS.parseAddr.call(stringAFILEEv, {from: accounts[1]});
		const stringVRxvjYe = await BirdOracleTNkdLS.extractAddress.call(stringzgc57k, {from: accounts[0]});
		const 
Cx9HFGl = await BirdOracleTNkdLS.updatedChainRequest.call(uintt0vOVF, uintao8SahY, {from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOraclekor7RJF = await BirdOracle.new({from: accounts[1]});
		const uintmMt9e6U = BigInt("313")
		const uintMI5akH = BigInt("178")
		const stringrwOkqG = "s5X3jJgGSm8oec1Oi7eILnbhSIFoZB1oAx6iNaIMhNebaQl4dlWMtJcKvT2DOxVCamqPuHq2Y"
		const addressn2l3ha = accounts[1]
		const stringvfYSpws = await BirdOraclekor7RJF.substring.call(stringrwOkqG, uintMI5akH, uintmMt9e6U, {from: accounts[3]});
		const uint7VHZ7M = await BirdOraclekor7RJF.getRatingByAddress.call(addressn2l3ha, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCnqR7D = await BirdOracle.new({from: accounts[4]});
		const addressDCHhkXy = accounts[3]
		const uintR0OA7fR = BigInt("1434")
		const stringNgvKBam = "Wxxzh6oLcO1ojEbk7b3PKUNf4VjQN6XVXUpJx4jkOBVHpF"
		const stringjiOY9h9 = "GRbJuLXQeCb1G82yU73Ksy5866IyaaHwyNSfWgZQG8PKYw7Mhc3WDjYKM1ZrGD2jPrMQHwkKrivCjV18G6GfKYW4KD1"
		const uintmx9uVT = await BirdOracleyCnqR7D.getRatingByAddress.call(addressDCHhkXy, {from: accounts[2]});
		const stringUgStOHH = await BirdOracleyCnqR7D.substring.call(stringNgvKBam, uintR0OA7fR, {from: accounts[4]});
		const stringfmMvx8K = await BirdOracleyCnqR7D.extractAddress.call(stringjiOY9h9, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleK9lQKK8 = await BirdOracle.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM0nWigl = BigInt("160")
		const stringIyn2LTc = "BNrkR6k15BIXOwooehgaGvPRwAWvQJnGYmgvgvoTCNhXykmn5GnDjy3wjOQw"
		const stringgfgk6SC = "AcdfYEhIrh"
		const stringZYQD8W = "CPrSVQUYWymbX3DkkPOpX7ZVcbsvA4hWzG"
		const stringes1LGSD = "XSLpx23CsqToNneVzuPKyGCmd8PFJ39eQb8qzWHgVzcygfTctRT3GaEBNAAQlFcJv7TcuKwWhNO9MZxYUfKNVbCCqSV934YUH7"
		const stringfTNOvTT = "rsBia948gSs73wOEeEYo6pP81qieQ0v6TcKJ7"
		const stringhsWfPTg = "leTNi7Iupid1yothjrHTWsLYPnSKHC0NLsNcoMncwnXthJHXjOC7cCXYdPjTwM0zFUhBEjg8GiJANSNEhijQVc"
		const stringSVFVuJM = "Xp4JGL6kuGwYzlBE3LcGjxyiHPASJgqg84mwxj8v92o9n5kDLGmNn6WB1sI2Xe5k20EB9jI4kCE3GwxLVyDC2j6GlRt"
		const stringxIJ8oS = await BirdOracleK9lQKK8.substring.call(stringIyn2LTc, uintM0nWigl, {from: accounts[1]});
		const stringlKObmbg = await BirdOracleK9lQKK8.extractAddress.call(stringgfgk6SC, {from: accounts[3]});
		const 
okhm4x4 = await BirdOracleK9lQKK8.newChainRequest.call(stringes1LGSD, stringZYQD8W, {from: accounts[3]});
		const uintfkg913N = await BirdOracleK9lQKK8.getRatingByAddressString.call(stringfTNOvTT, {from: accounts[0]});
		const stringNeGh0w = await BirdOracleK9lQKK8.extractAddress.call(stringhsWfPTg, {from: accounts[1]});
		const uintzR8SMaZ = await BirdOracleK9lQKK8.getRatingByAddressString.call(stringSVFVuJM, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCzwH6W = await BirdOracle.new({from: accounts[1]});
		const uintDNsiwbg = BigInt("210")
		const stringBvyipMe = "D51ICksJAajCXYTm82"
		const uintQHx6H1M = BigInt("367")
		const uintwrGtTyw = BigInt("335")
		const stringvTllwrN = "fu1OdaZo6wLfwLoUHXOgoTwVMOKEJOXk66PQW9PulHqt2JtLv4JH7VZmJbNcdXwYhd5Se3oSrHqggLH0tTa1Py63"
		const stringDmGlSFD = "oxESPFrkkmGQh4Z2SeDBWFzOgGDPXVAdXVkzitOUu2kUK1fyNTnIiPBf1QvWgWzo5wNNqxlcvnbbFj8GafC"
		const addressdhdvwdl = accounts[4]
		const addressPJbXloY = accounts[1]
		const stringakGYvk3 = await BirdOracleyCzwH6W.substring.call(stringBvyipMe, uintDNsiwbg, {from: accounts[0]});
		const stringjNNx3Lk = await BirdOracleyCzwH6W.substring.call(stringvTllwrN, uintwrGtTyw, uintQHx6H1M, {from: accounts[0]});
		const stringeiwMkg = await BirdOracleyCzwH6W.extractAddress.call(stringDmGlSFD, {from: accounts[0]});
		const uintpaQqufI = await BirdOracleyCzwH6W.getRatingByAddress.call(addressdhdvwdl, {from: accounts[3]});
		const uintcsihby = await BirdOracleyCzwH6W.getRatingByAddress.call(addressPJbXloY, {from: accounts[3]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleDwTidkH = await BirdOracle.new({from: accounts[0]});
		const uintmz8VXsg = BigInt("1457")
		const stringbtKDlKZ = "Q9VpXZi1WyXiDsPP6hgac30kiYCw7"
		const uintNvslx1a = BigInt("1175")
		const uint0t311b = BigInt("1496")
		const stringhVFjwfD = await BirdOracleDwTidkH.substring.call(stringbtKDlKZ, uintmz8VXsg, {from: accounts[2]});
		const 
N0k02jL = await BirdOracleDwTidkH.updatedChainRequest.call(uint0t311b, uintNvslx1a, {from: accounts[1]});
		const uintiw4mzcz = await BirdOracleDwTidkH.getRating.call({from: accounts[1]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCnqR7D = await BirdOracle.new({from: accounts[4]});
		const stringqX4Eflv = "jLxzDSxgTo99SJ1qQs5ZRNZCTvNSAe5KqNseDOpH7dEpx2kTL9jNebXQt5eGVA5W7HrdJE6pgR5nEW494UQBv6Af"
		const stringweY3Eda = "YpQlcwa"
		const stringjiOY9h9 = "GRbJuLXQeCb1G82yU73Ksy5866IyaaHwyNSfWgZQG8PKYw7Mhc3WDjYKM1ZrGD2jPrMQHwkKrivCjV18G6GeKYW4KD1"
		const 
VqNb9Wq = await BirdOracleyCnqR7D.newChainRequest.call(stringweY3Eda, stringqX4Eflv, {from: accounts[0]});
		const stringfmMvx8K = await BirdOracleyCnqR7D.extractAddress.call(stringjiOY9h9, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCnqR7D = await BirdOracle.new({from: accounts[4]});
		const uintLfVHubY = BigInt("885")
		const stringqZ8GzNV = "WHSR9g9AK1JbqxCL1eERLt5bsilmwxNTir"
		const stringjiOY9h9 = "GRbJuLXQeCb1G82yU73Ksy5866IyaaHwyNSfWgZQG8PKYw7Mhc3WDjYKM1ZrGD2jPrMQHwkKrivCjV18G6GfKYW4KD1"
		const stringfEbHUx6 = await BirdOracleyCnqR7D.substring.call(stringqZ8GzNV, uintLfVHubY, {from: "0x0000000000000000000000000000000000000001"});
		const stringfmMvx8K = await BirdOracleyCnqR7D.extractAddress.call(stringjiOY9h9, {from: accounts[0]});
		const uintGqQNpAG = await BirdOracleyCnqR7D.getRating.call({from: accounts[2]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCnqR7D = await BirdOracle.new({from: accounts[4]});
		const uintdfxWYuz = BigInt("1996")
		const stringr046MOV = "9LOkCJ7wbcHLx"
		const stringjiOY9h9 = "GRbJuLXQeCb1G82yU73Ksy5866IyaaHwyNSfWgZQG8PKYw7Mc3WDjYKM1ZrGD2jPrMQHwkKrivCjV18G6GfKYW4KD1"
		const stringdHjjNgf = await BirdOracleyCnqR7D.substring.call(stringr046MOV, uintdfxWYuz, {from: accounts[5]});
		const stringfmMvx8K = await BirdOracleyCnqR7D.extractAddress.call(stringjiOY9h9, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCnqR7D = await BirdOracle.new({from: accounts[4]});
		const uintzNthn01 = BigInt("1813")
		const string1jpIwB = "GTwHHK6"
		const uintVzh6SM = BigInt("1108")
		const stringOHwsT0 = "gIr8JGJLf3a5SSBoTlusXDTNTwxTjTzE19b76xDxCwNLOERuGkW7nm9nCYYh73JGBP0iYy3JTxZzkMNPK4nz7ni"
		const stringjiOY9h9 = "GRbJuLXQeCb1G82yU73Ksy5866IyaaHwyNSfWgZQG8PKYw7Mhc3WDjYKM1ZrGD2jPrMQHwkKrivCjV18G6GfKYW4KD1"
		const stringCz6FjM = await BirdOracleyCnqR7D.substring.call(string1jpIwB, uintzNthn01, {from: accounts[1]});
		const stringDZmtyRG = await BirdOracleyCnqR7D.substring.call(stringOHwsT0, uintVzh6SM, {from: accounts[2]});
		const stringfmMvx8K = await BirdOracleyCnqR7D.extractAddress.call(stringjiOY9h9, {from: accounts[0]});
	});

	it('test for BirdOracle', async () => {
		const BirdOracleyCzwH6W = await BirdOracle.new({from: accounts[1]});
		const uintaTRTBrn = BigInt("366")
		const uintuQzRXHu = BigInt("366")
		const stringvTllwrN = "fu1OdaZo6wLfwLoUHXOgoTwVMOKEJOXk66PQW9PulHqt2JtLv4JH7VZmJbNcdXwYhd5Se3oSrHqggLH0tTa1Py63"
		const uintLFqqt0I = BigInt("1568")
		const uintUyvIm0m = BigInt("1937")
		const stringkXVPjub = "QVcDzglRrgIlYqb8KKO4Q352TBFEkJgOw48yAPo"
		const stringjNNx3Lk = await BirdOracleyCzwH6W.substring.call(stringvTllwrN, uintuQzRXHu, uintaTRTBrn, {from: accounts[0]});
		const 
yhpQzKQ = await BirdOracleyCzwH6W.updatedChainRequest.call(uintUyvIm0m, uintLFqqt0I, {from: accounts[4]});
		const uintSdGrlAm = await BirdOracleyCzwH6W.getRatingByAddressString.call(stringkXVPjub, {from: accounts[2]});
	});
})